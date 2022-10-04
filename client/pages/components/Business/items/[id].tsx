import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button';
import { ethers } from 'ethers';
import Address from './Address';
import ABI from '../../../../../artifacts/contracts/Ecommarce.sol/Ecommarce.json';



function id() {
  
  const router = useRouter()
  const data = router.query

  const [myCustomers, setMyCustomers] = useState([])
  const [disable, setDisable] = useState(false)
  const [id, setId] = useState(0)

  const deployAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

  const test = async () => {
    setDisable(true)
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(deployAddress, ABI.abi, signer)

      let allMyCustomers = await contract.ShowMyCustomersById(data.id)
      setMyCustomers(allMyCustomers)

      console.log(data)
      setId(Number(data.id))

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
          
          <div id='addr' className="text-black text-2xl flex flex-col justify-center items-center mb-10 w-full">
            <Button disabled={disable} onClick={test} variant="contained" className='mb-5 bg-orange-500'>Show My Customers</Button>
            {
              myCustomers.map((data, index) => {
                return <Address data={data} id={id} key={index} />
              }) 
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default id