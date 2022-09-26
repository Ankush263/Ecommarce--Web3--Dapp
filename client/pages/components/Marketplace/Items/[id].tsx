import React from 'react'
import { useRouter } from 'next/router'
import SideBar from '../SideBar'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Button from '@mui/material/Button';
import Link from 'next/link';

function id() {

  const router = useRouter()

  const data = router.query

  const items = {
    img: data.img,
    title: data.title,
    price: data.price,
    id: data.id
  }

  const styles = {
    page: `min-w-screen min-h-screen flex justify-center items-center`,
    sideBarBox: `w-2/12 h-screen ml-1`,
    mainBox: `w-full h-screen mr-2`,
    // top: `h-2/6 w-full flex justify-between items-start bg-slate-200/[.2] shadow-2xl border-white-900/75 `,
    top: `ml-2 h-2/6 w-full flex justify-between items-start shadow-2xl border-white-900/75 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl`,
    bottom : `w-full h-full flex justify-center items-center`,
    left: `cursor-pointer`,
    mid: `min-w-52 h-64 mt-36 rounded-xl flex flex-col justify-center items-center`,
    right: `mr-2 w-36 h-10 flex justify-around items-center`,
    box: `w-8/12 h-2/3 flex flex-col justify-around  bg-slate-200/[.2] shadow-2xl border-white-900/75 rounded-xl p-2 border-4 mt-20 mr-20 border-orange-500`,
    desc: `text-slate-600 font-semibold text-xl ml-2`,
    btn: `block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`,
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
            <span className='text-black font-semibold text-xl'>{data.title}</span>
          </div>
          <div className={styles.right}>
            <span>9999.983</span>
            <AccountBalanceWalletIcon fontSize='large' />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.box}>
            <span className={styles.desc}>Only {data.stocks} pices left</span>
            <span className={styles.desc}>Description: {data.desc}</span>
            <span className={styles.desc}>Owner: {data.seller}</span>
            <span className={styles.desc}>Price: {data.price}eth only</span>
            <div className="w-full flex justify-center items-center">
              <Link href={{
                pathname: '/components/Marketplace/Buy',
                query: items
              }}>
                <Button variant="contained" className='w-8/12 bg-orange-500'>Buy</Button>
              </Link>
              {/* <Button variant="contained" className={styles.btn} data-modal-toggle="authentication-modal">Buy</Button> */}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default id