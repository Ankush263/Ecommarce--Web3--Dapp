//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Ecommarce{

  struct Product {
    string title;
    string desc;
    uint price;
    uint productId;
    uint stocks;    // How many products has stocked
    uint deliveryStart;
    uint deliveryEnd;
    address[] buyer;
    address payable seller;
    bool delevered;
  }

  mapping(address=>mapping(uint => uint)) public productsNumber;   // mapping(address=>mapping(id=>no. of product)) ie. no[address][id]=numbers

  mapping(address => string) public deliveryLocation;    // where the item should delivered

  address[] public customers;

  uint public endAt;    // End day

  uint public buyId;


  uint public listPrice;    // Listing price of a product into the market
  uint count = 1;
  Product[] public products;

  Product[] public myProducts;

  address payable public manager;

  bool destroyed = false;

  constructor(){
    manager = payable(msg.sender);
    listPrice = 2 ether;
    endAt = 7 days;
  }

  function registerProduct(string memory _title, string memory _desc, uint _price, uint _stocks) payable public {

    require(_price > 0, "Price should be greater then zero");
    require(msg.value == listPrice * _stocks, "Please pay the exact price");
    Product memory tempProduct;
    tempProduct.title = _title;
    tempProduct.desc = _desc;
    tempProduct.price = _price * (10 ** 18);
    tempProduct.stocks = _stocks;
    tempProduct.seller = payable(msg.sender);
    tempProduct.productId = count;
    tempProduct.deliveryStart = block.timestamp;
    tempProduct.deliveryEnd = block.timestamp + endAt;
    products.push(tempProduct);
    count++;

  }

  function buy(uint _productId, string memory _deliveryAddress, uint _numberOfProducts) payable public {

    require(products[_productId-1].price * _numberOfProducts == msg.value, "Please  pay the exact price");
    require(products[_productId-1].seller != msg.sender, "Seller not be the buyer");
    require(_numberOfProducts > 0, "Please select how many products you want to buy");
    require(_numberOfProducts <= products[_productId-1].stocks, "You reach the product's stock limit");
    products[_productId-1].buyer.push(payable(msg.sender));
    deliveryLocation[msg.sender] = _deliveryAddress;

    customers.push(products[_productId-1].buyer[products[_productId-1].buyer.length-1]);
    buyId++;

    productsNumber[msg.sender][_productId] = _numberOfProducts;
    products[_productId-1].stocks -= _numberOfProducts; 


  }

  function showStockOfProduct(uint _productId) public view returns(uint) {
    require(msg.sender == products[_productId-1].seller, "Only seller can call this");
    return products[_productId-1].stocks;
  }

  function OrderCancel(uint _productId, address payable _buyer) public {

    require(products[_productId-1].seller != msg.sender, "Seller can't cancell the ordered product");

    payable(_buyer).transfer(products[_productId-1].price);
    products[_productId-1].stocks += productsNumber[msg.sender][_productId];


  }

  function delivery(uint _productId) payable public {

    require(products[_productId-1].seller != msg.sender, "Only buyer can call this");
    products[_productId-1].delevered = true;
    (products[_productId-1].seller).transfer(products[_productId-1].price);

  }

  
  function updateDeliveryDays(uint _day) public {
    require(msg.sender == manager, "Only manager can call this function");
    endAt = _day;
  }

  function showAllcustomers() public view returns(address[] memory){
    return customers;
  }

  function showMyProducts(address _address) public{
    for(uint i = 0; i < products.length; i++){
      for(uint j = 0; j < products[i].buyer.length; j++){
        if(products[i].buyer[j] == _address){
          myProducts.push(products[i]);
        }
      }
    }
  }
}