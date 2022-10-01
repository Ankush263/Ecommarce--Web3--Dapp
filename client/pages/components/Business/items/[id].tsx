import React from 'react'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button';



function id() {

  const router = useRouter()
  const data = router.query

  const styles = {
    page: `w-screen h-screen flex justify-center items-center`,
    box: `w-11/12 min-h-5/6 bg-slate-300/[.5] shadow-2xl border-white-900/75 rounded-xl p-4 flex flex-col justify-center items-center`,
  }

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <img src={`${data.img}`} className='w-96 rounded-xl' />
        <div className="w-full mt-10 flex justify-center items-center">
          <span className='text-3xl text-orange-600 font-bold'>My Customers</span>
        </div>
        <div className="mt-4 border-4 w-full h-20 flex flex-col justify-between items-center">
          <span className='text-black text-xl font-bold mt-5'>{data.buyer}</span>
        </div>
      </div>
    </div>
  )
}

export default id