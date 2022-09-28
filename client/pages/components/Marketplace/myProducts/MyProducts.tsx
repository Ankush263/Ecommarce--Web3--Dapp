import React, { useState } from 'react';
import {Button} from '@mui/material';
import ABI from '../../../../../artifacts/contracts/Ecommarce.sol/Ecommarce.json';
import { ethers } from 'ethers';
import Products from './Products';

function MyProducts() {
  const deployAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  const [data, setData] = useState()
  
  const handleClick = async() => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const address = await signer.getAddress()
      const contract = new ethers.Contract(deployAddress, ABI.abi, signer)
      console.log("Clicked!!!")


      // const show = await contract.showMyProducts(address)

      // await show.wait()

      console.log(await contract.myProducts(0))




    } catch (error) {
      console.log(error)
    }
  }

  const styles = {
    page: `w-screen min-h-screen flex justify-center items-center`,
    box: `w-10/12 min-h-96 bg-slate-300/[.3] shadow-2xl border-stone-900 rounded-xl p-3`,
    // itemBox: `w-full h-48 border-4`,
  }

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div>
          <Products/>
          <Products/>
        </div>
        {/* <div className={styles.itemBox}></div>
        <div className={styles.itemBox}></div>
        <div className={styles.itemBox}></div>
        <div className={styles.itemBox}></div> */}
      </div>
    </div>
  )
}

export default MyProducts