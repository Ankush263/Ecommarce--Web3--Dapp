import Link from 'next/link'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';

function SideBar() {

  const styles = {
    sidebar: `h-screen flex flex-col justify-start items-center gap-10`,
    top: ``,
    topBox: `w-full h-60 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col justify-around items-center shadow-2xl border-white-900/75 cursor-pointer`,
    wallet: `flex flex-col bg-slate-200/[.2] shadow-2xl border-white-900/75 rounded-2xl p-2`,
    bottom: `w-full h-1/2 flex flex-col justify-around items-center`,
    accountInfo:`flex text-lg font-semibold`,
    sideWallet: `flex flex-col justify-center items-center`,
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <div className={styles.topBox}>
          <Link href="/">
            <img src="/images/Metamask.png" />
          </Link>
          <div className={styles.wallet}>
            <span className={styles.accountInfo}>0x930....1938</span>
            <span className={styles.accountInfo}>
              0.0928977
              <img src="/images/eth.png" className='w-5' />
            </span>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.sideWallet}>
          <img src="/images/Metamask.png" className='w-20' />
          <span>930x....9302</span>
        </div>
        <div className={styles.sideWallet}>
          <img src="/images/eth.png" className='w-8' />
          <span>0.983923</span>
        </div>
        <div className={styles.sideWallet}>
          <PersonIcon fontSize='large' />
        </div>
        <div className={styles.sideWallet}>
          <img src='/images/ecommerce-logo.png' className='w-16 shadow-2xl border-white-900/75 rounded-full' />
        </div>
      </div>
    </div>
  )
}

export default SideBar