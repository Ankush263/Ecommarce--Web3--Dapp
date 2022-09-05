//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Ecommarce {

  struct Product {
    string title;
    string desc;
    uint price;
    uint productId;
    uint stocks;    // How many products has stocked
    address buyer;
    address payable seller;
    bool delevered;  
  }

  mapping(address=>mapping(uint => uint)) public productsNumber;   // mapping(address=>mapping(id=>no. of product)) ie. no[address][id]=numbers

  mapping(address => string) public deliveryLocation;    // where the item should delivered

  mapping(uint => address) public customers;

  uint public deliveryDays;   // How many days need to delevered the product
  uint public listPrice;    // Listing price of a product into the market
  uint count = 1;
  Product[] public products;
  address payable public manager;

  bool destroyed = false;

  constructor() {
    manager = payable(msg.sender);
    listPrice = 0.01 ether;
  }

  function registerProduct(string memory _title, string memory _desc, uint _price, uint _stocks) public {

    require(_price > 0, "Price should be greater then zero");
    Product memory tempProduct;
    tempProduct.title = _title;
    tempProduct.desc = _desc;
    tempProduct.price = _price * (10 ** 18);
    tempProduct.stocks = _stocks;
    tempProduct.seller = payable(msg.sender);
    tempProduct.productId = count;
    products.push(tempProduct);
    count++;
  
  }

  function buy(uint _productId, string memory _deliveryAddress, uint _numberOfProducts) public payable {

    require(products[_productId-1].price == msg.value, "Please  pay the exact price");
    require(products[_productId-1].seller != msg.sender, "Seller not be the buyer");
    require(_numberOfProducts > 0, "Please select how many products you want to buy");
    require(products[_productId-1].stocks >= _numberOfProducts, "You reach the product's stock limit");
    products[_productId-1].buyer = msg.sender;
    deliveryLocation[msg.sender] = _deliveryAddress;
    customers[_productId] = msg.sender;
    productsNumber[msg.sender][_productId] = _numberOfProducts;

  }

  function delivery() public {

  }


}