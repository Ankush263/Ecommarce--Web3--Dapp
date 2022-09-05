//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Ecommarce {

  struct Product {
    string title;
    string desc;
    uint price;
    uint productId;
    uint stocks;
    address buyer;
    address payable seller;
    bool delevered;  
  }

  mapping(address=>mapping(uint => uint)) productsNumber;   // mapping(address=>mapping(id=>no. of product)) ie. no[address][id]=numbers

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


}