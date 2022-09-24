import React from 'react'
import { useRouter } from 'next/router'
import SideBar from '../SideBar'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

function id() {

  const router = useRouter()

  const data = router.query

  const styles = {
    page: `min-w-screen min-h-screen flex justify-center items-center`,
    sideBarBox: `w-2/12 h-screen ml-1`,
    mainBox: `w-full h-screen mr-2`,
    // top: `h-2/6 w-full flex justify-between items-start bg-slate-200/[.2] shadow-2xl border-white-900/75 `,
    top: `ml-2 h-2/6 w-full flex justify-between items-start shadow-2xl border-white-900/75 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl`,
    bottom : `w-full h-full border-4 flex justify-center items-center`,
    left: `cursor-pointer`,
    mid: `min-w-52 h-64 mt-36 rounded-xl flex flex-col justify-center items-center`,
    right: `mr-2 w-36 h-10 flex justify-around items-center`,
    box: `w-8/12 h-full border-4 mt-96 flex flex-col`,
  }

  return (
    <div className={styles.page}>
      <div className={styles.sideBarBox}>
        <SideBar />
      </div>
      <div className={styles.mainBox}>
        <div className={styles.top}>
          <div className={styles.left}>
            <ArrowBackIcon onClick={() => {router.back()}} fontSize='large' />
          </div>
          <div className={styles.mid}>
            <img src={`${data.img}`} className='rounded-xl w-52 h-52 border-4 bg-slate-200/[.2] shadow-2xl border-orange-500 ' />
            <span className='text-black font-semibold text-xl'>Title: {data.title}</span>
          </div>
          <div className={styles.right}>
            <span>9999.983</span>
            <AccountBalanceWalletIcon fontSize='large' />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.box}>
            <span>Stocks:</span>
            <span>Description:</span>
            <span>Owner:</span>
            <span>Price:</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default id