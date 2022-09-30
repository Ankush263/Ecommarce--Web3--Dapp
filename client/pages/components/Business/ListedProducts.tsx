import React from 'react';
import { Button } from '@mui/material';
import ABI from '../../../../artifacts/contracts/Ecommarce.sol/Ecommarce.json';
import { ethers } from 'ethers';



function ListedProducts() {

  const deployAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

  const getItems = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const address = await signer.getAddress()
      const contract = new ethers.Contract(deployAddress, ABI.abi, signer)
      console.log("clicked")

      console.log(await contract.getAllMyListedProducts())
    } catch (error) {
      console.log(error)
    }
  }

  const styles = {
    box: `w-11/12 h-5/6 bg-slate-300/[.5] shadow-2xl border-white-900/75 rounded-xl mb-96`,
  }

  return (
    <div className={styles.box}>
      <Button variant="contained" onClick={getItems}>click</Button>
    </div>
  )
}

export default ListedProducts