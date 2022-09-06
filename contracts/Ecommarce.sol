//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Ecommarce is ERC721URIStorage{

  struct Product {
    string title;
    string desc;
    uint price;
    uint productId;
    uint stocks;    // How many products has stocked
    uint deliveryDays;    // Initial time for reach the product
    address payable buyer;
    address payable seller;
    bool delevered;
  }

  mapping(address=>mapping(uint => uint)) public productsNumber;   // mapping(address=>mapping(id=>no. of product)) ie. no[address][id]=numbers

  mapping(address => string) public deliveryLocation;    // where the item should delivered

  mapping(uint => address) public customers;

  // mapping(uint => bool) public cancelOrder;   // Takes the productId and returns if the product is canceled or not

  // mapping()


  uint public dayRemain;   // How many days need to delevered the product

  uint public listPrice;    // Listing price of a product into the market
  uint count = 1;
  Product[] public products;
  address payable public manager;

  bool destroyed = false;

  constructor() ERC721("MyToken", "MTK") {
    manager = payable(msg.sender);
    listPrice = 2 ether;
    // day = block.timestamp + 7 days;
  }

  function registerProduct(string memory _title, string memory _desc, uint _price, uint _stocks, uint _deliveryDays) payable public {

    require(_price > 0, "Price should be greater then zero");
    require(msg.value == listPrice * _stocks, "Please pay the exact price");
    Product memory tempProduct;
    tempProduct.title = _title;
    tempProduct.desc = _desc;
    tempProduct.price = _price * (10 ** 18);
    tempProduct.stocks = _stocks;
    tempProduct.seller = payable(msg.sender);
    tempProduct.productId = count;
    tempProduct.deliveryDays = _deliveryDays;
    products.push(tempProduct);
    count++;

  }

  function buy(uint _productId, string memory _deliveryAddress, uint _numberOfProducts) payable public {

    // uint Price = products[_productId-1].price + listPrice;

    require(products[_productId-1].price * _numberOfProducts == msg.value, "Please  pay the exact price");
    require(products[_productId-1].seller != msg.sender, "Seller not be the buyer");
    require(_numberOfProducts > 0, "Please select how many products you want to buy");
    require(_numberOfProducts <= products[_productId-1].stocks, "You reach the product's stock limit");
    products[_productId-1].buyer = payable(msg.sender);
    deliveryLocation[msg.sender] = _deliveryAddress;
    customers[_productId] = msg.sender;
    productsNumber[msg.sender][_productId] = _numberOfProducts;
    // dayRemain = block.timestamp + 7 days;
    products[_productId-1].stocks -= _numberOfProducts; 

    // payable(address(this)).transfer(products[_productId-1].price);

  }

  function showStockOfProduct(uint _productId) public view returns(uint) {
    return products[_productId-1].stocks;
  }

  function OrderCancel(uint _productId) public {

    require(products[_productId-1].seller != msg.sender, "Seller can't cancell the ordered product");
    payable(products[_productId-1].buyer).transfer(products[_productId-1].price);
    products[_productId-1].stocks += productsNumber[msg.sender][_productId];

  }

  function delivery(uint _productId) payable public {

    require(products[_productId-1].seller != msg.sender, "Only buyer can call this");
    products[_productId-1].delevered = true;
    (products[_productId-1].seller).transfer(products[_productId-1].price);

  }

  


}