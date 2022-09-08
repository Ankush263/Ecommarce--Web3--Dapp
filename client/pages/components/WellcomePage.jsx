import React from 'react'
import Button from '@mui/material/Button';


function WellcomePage() {

  const styles = {
    screen: `bg-[url('/images/sale.jpg')] bg-cover bg-center h-screen w-screen bg-no-repeat`,
    second: `h-screen w-screen flex justify-center items-center`,
    contain: `w-screen h-screen flex flex-col justify-center items-center`,
    wallet: `bg-slate-300/[.2] shadow-2xl border-white-900/75 w-60 h-40 rounded-3xl flex flex-col justify-center items-center mb-10`,
    pages: `bg-slate-300/[.2] shadow-2xl border-white-900/75 w-6/12 h-60 rounded-3xl flex gap-20 justify-center items-center`,
  }

  return (
    <div className={styles.screen}>
      <div className={styles.second}>
        <div className={styles.contain}>
          <div className={styles.wallet}>
            <span className='font-bold text-blue-700 text-lg'>Connect to the Metamask</span>
            <Button variant="contained" className='bg-gradient-to-r from-sky-500 to-indigo-500'>
              <img src="/images/Metamask.png" className='w-10' />
              Connect
            </Button>
          </div>
          <div className={styles.pages}>
            <Button variant="contained" className='bg-gradient-to-r from-sky-500 to-indigo-500'>
              Go For Business
              <img src="/images/car_loading.PNG" className='w-20' />
            </Button>
            <Button variant="contained" className='bg-gradient-to-r from-sky-500 to-indigo-500'>
              Let's Shopping
              <img src="/images/shopping.PNG" className='w-20' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WellcomePage

//h-screen text-black flex justify-center items-center 