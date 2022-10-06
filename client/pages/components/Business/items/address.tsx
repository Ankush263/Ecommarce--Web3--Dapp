import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ABI from '../../../../../artifacts/contracts/Ecommarce.sol/Ecommarce.json';
import { ethers } from 'ethers';
import swal from 'sweetalert';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';


function Address(props: any) {

  const [delevered, setDeleverd] = useState(false)

  const deployAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

  const showAddress = async (addr: any) => {

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(deployAddress, ABI.abi, signer)

      let sendAddress = await contract.deliveryLocation(addr)

      swal(sendAddress);

      let delevery = await contract.delevery(props.id, addr)
      setDeleverd(delevery)

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='mb-10 w-8/12 flex justify-between'>
      <span>{props.data}</span>
      {delevered && <DoneOutlineIcon />}
      <Button onClick={() => showAddress(props.data)} variant="contained" className='bg-orange-500'>Show Me Address</Button>
    </div>
  )
}

export default Address