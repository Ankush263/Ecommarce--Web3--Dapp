import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ABI from '../../../../../artifacts/contracts/Ecommarce.sol/Ecommarce.json';
import { ethers } from 'ethers';

function products(props: any) {

  const deployAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"

  const [click, setClick] = useState(false)

  // if(props.data.delevered){
  //   setClick(true)
  // }

  
  
  const delivered = async () => {
  try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(deployAddress, ABI.abi, signer)
      console.log(props.data.productId)
      let transaction = await contract.delivery(props.data.productId)
      await transaction.wait()
      alert('Your Order is delivered to you!!!')
      window.location.replace('/components/Marketplace/HomePage')
      
    } catch (error) {
      console.log(error)
    }
  }

  const styles = {
    productBox: `w-full h-48 flex justify-between items-center mb-5`,
    imgBox: `w-48 h-48 rounded-xl ml-8`,
    rightBox: `w-80 h-48 mr-8 flex justify-center items-center`,
  }

  return (
    <div className={styles.productBox}>
      <div className={styles.imgBox}>
        <img src={props.data.img} className='w-full h-full rounded-xl' />
      </div>
      {!props.data.delevered ? <span className='text-2xl text-black text-bold'>
        Order delivered in {(Number(props.data.deliveryEnd) - Number(props.data.deliveryStart)) / 86400} Days
      </span> : <span className='text-2xl text-black text-bold'>Thank you for shopping with us😊</span>}
      <div className={styles.rightBox}>
        <div className="w-full flex justify-end items-center">
          {!props.data.delevered ? <Button variant="contained" disabled={click} onClick={delivered} className='w-6/12 bg-green-700' color="success">
            Delivered
          </Button> : <span className='text-black text-2xl'>You have recived your product</span>}
        </div>
      </div>
    </div>
  )
}

export default products