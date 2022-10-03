import React from 'react';
import Button from '@mui/material/Button';
import ABI from '../../../../../artifacts/contracts/Ecommarce.sol/Ecommarce.json';
import { ethers } from 'ethers';
import swal from 'sweetalert';


function Address(props: any) {

  const deployAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

  const showAddress = async (addr: any) => {

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(deployAddress, ABI.abi, signer)

      let sendAddress = await contract.deliveryLocation(addr) 

      // alert(sendAddress)
      swal(sendAddress);

      console.log(sendAddress)

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='mb-10 w-8/12 flex justify-between'>
      <span>{props.data}</span>
      <Button onClick={() => showAddress(props.data)} variant="contained">Show Me Address</Button>
    </div>
  )
}

export default Address