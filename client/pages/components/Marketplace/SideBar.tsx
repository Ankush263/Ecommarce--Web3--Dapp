import Link from 'next/link'
import React from 'react'

function SideBar() {

  const styles = {
    sidebar: `border-8 h-screen flex flex-col justify-start items-center gap-10`,
    top: ``,
    topBox: `border-1 w-full h-60 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col justify-around items-center`,
    wallet: `flex flex-col bg-slate-200/[.2] shadow-2xl border-white-900/75 rounded-2xl p-2`,
    bottom: ``,
    accountInfo:`flex text-lg font-semibold`,
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
        {/* <img src="/images/ecommerce-logo.png" className='w-20' /> */}
      </div>
    </div>
  )
}

export default SideBar