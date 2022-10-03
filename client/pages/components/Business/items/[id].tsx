import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button';
import { ethers } from 'ethers';
import Address from './Address';



function id() {


  // const [customers, setCustomers] = useState()

  // let addressArr: (string | string[] | undefined)[] = []

  const router = useRouter()
  const data = router.query

  const test = () => {
    console.log(Array(data.buyer))
    Array(`${data.buyer}`).map((data: any, index: any) => {
      return <Address data={data} key={index} />
    })
  }

  const styles = {
    page: `w-screen min-h-screen flex justify-center items-center`,
    box: `w-11/12 h-5/6 bg-slate-300/[.5] shadow-2xl mt-20 mb-10 border-white-900/75 rounded-xl p-4 flex flex-col justify-center items-center`,
  }

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <img src={`${data.img}`} className='w-96 rounded-xl' onClick={test} />
        <div className="w-full mt-10 flex justify-center items-center">
          <span className='text-3xl text-orange-600 font-bold'>My Customers</span>
        </div>
        <div className="mt-4 w-full min-h-5/6 flex flex-col justify-between items-center">
          
          <div id='addr' className="text-black text-2xl flex flex-col justify-center items-center mb-10 w-full">
            {

              // Array(`${data.buyer}`).map((data: any, index: any) => {
              //   return <Address data={data} key={index} />
              // })
              
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default id