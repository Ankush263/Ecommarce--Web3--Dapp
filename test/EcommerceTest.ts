// import { expect } from "chai";
// import { ethers } from "hardhat";

// describe("Ecommarce", async () => {
//   let Ecommarce: any;
//   let contract: any;
//   let owner: any;
//   let address1: any;
//   let address2: any;
//   let address3: any;
//   let address: any;

//   beforeEach(async () => {
//     Ecommarce = await ethers.getContractFactory("Ecommarce");
//     [owner, address1, address2, address3, ...address] = await ethers.getSigners();
//     contract = await Ecommarce.deploy();
//   });

//   describe("Contract Deployment", async () => {

//     it("Should set the contract manager", async () => {
//       expect(await contract.manager()).to.equal(owner.address);
//     });

//     it("Should set the listPrice as 0.01 eth", async () => {
//       expect(ethers.utils.formatEther(await contract.listPrice())).to.equal('0.01');
//     });

//     it("Should set the end date as 7 days", async () => {
//       expect(await contract.endAt() / 86400).to.equal(7);
//     });

//   });

//   // describe("Register Product in Ecommarce site", async () => {

//   //   it("Should register the products into ecommarce site", async () => {
//   //     await contract.connect(owner).registerProduct(
//   //       "Mobile", 
//   //       "Good Mobile",
//   //       10,
//   //       2,
//   //       {value: ethers.utils.parseEther('0.02')}
//   //     )
//   //     // expect()
//   //     console.log(await contract.products.length)
//   //   });

//   // });



// });