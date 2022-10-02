import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button';
import ABI from '../../../../../artifacts/contracts/Ecommarce.sol/Ecommarce.json';
import { ethers } from 'ethers';
import address from './address';



function id() {

  const deployAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"


  const [address, setAddress] = useState('')
  const [disabled, setDisabled] = useState(false)


  const router = useRouter()
  const data = router.query



  const showAddress = async (addr: any) => {

    setDisabled(true)

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const address = await signer.getAddress()
      const contract = new ethers.Contract(deployAddress, ABI.abi, signer)

      let sendAddress = await contract.deliveryLocation(addr) 

      // await sendAddress.wait()

      
      console.log(sendAddress)

      setAddress(sendAddress)

    } catch (error) {
      console.log(error)
    }
  }


  const styles = {
    page: `w-screen min-h-screen flex justify-center items-center`,
    box: `w-11/12 h-5/6 bg-slate-300/[.5] shadow-2xl mt-20 mb-10 border-white-900/75 rounded-xl p-4 flex flex-col justify-center items-center`,
  }

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <img src={`${data.img}`} className='w-96 rounded-xl' />
        <div className="w-full mt-10 flex justify-center items-center">
          <span className='text-3xl text-orange-600 font-bold'>My Customers</span>
        </div>
        <div className="mt-4 w-full min-h-5/6 flex flex-col justify-between items-center">
          {
            // (data.buyer)?.length
            // allData.map((i: any) => <p>i</p>)
            
          }
          {/* <span className='text-black text-xl font-bold mt-5 flex flex-col justify-between items-center border-4 min-h-10'>{data.buyer}</span>
          {data.buyer && <Button 
            variant="contained" 
            onClick={() => showAddress(data.buyer)} 
            className='mt-5 w-48 bg-orange-500'
            disabled={disabled}
          >
            Delivery Address
          </Button>}
          <span className='text-black text-xl font-bold mt-5 '>{address}</span> */}
          
        </div>
      </div>
    </div>
  )
}

export default id