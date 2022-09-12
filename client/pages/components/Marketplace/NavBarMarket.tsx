import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AppsIcon from '@mui/icons-material/Apps';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

function NavBarMarket() {

  const styles = {
    navbar: `h-60 flex flex-col`,
    top: `w-full h-20 flex justify-between items-center`,
    bottom: `w-full h-48 flex justify-around items-center`,
    topLeft: `ml-10`,
    topRight: `w-1/2 flex justify-around mr-10`,
    searchBox: `w-72 bg-slate-300/[.5] shadow-2xl border-white-900/75 rounded-3xl flex justify-between items-center p-1 text-black`,
    search: `w-72 bg-slate-300/[.0] rounded-3xl text-black pl-1 pr-1 placeholder-gray-900 focus:outline-none`,
    home: `flex flex-col justify-center items-center cursor-pointer`,
    basket: `flex flex-col justify-center items-center`,
    app: ``,
    bottomAsset: ``,
    vertical: `h-28 w-20 absolute ml-5 rounded-2xl`,
    horizontal: `w-52 h-16 mt-10 p-10 rounded-2xl bg-gradient-to-r from-sky-700 to-indigo-500 shadow-2xl border-white-900/75`,
    gif: `w-full h-full rounded-xl`,
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <img src='/images/ecommerce-logo.png' className='w-16 shadow-2xl border-white-900/75 rounded-full' />
        </div>
        <div className={styles.topRight}>

          <div className={styles.searchBox}>
            <input type="search" className={styles.search} placeholder="Search Your Items" />
            <SearchIcon />
          </div>
          <Link href="/">
            <div className={styles.home}>
              <HomeIcon />
              <span>Home</span>
            </div>
          </Link>
          <div className={styles.basket}>
            <AccountBalanceWalletIcon />
            <span>0.977823</span>
          </div>
          <div className={styles.basket}>
            <ShoppingBasketIcon />
            <span>3</span>
          </div>
          <div className={styles.app}>
            <AppsIcon fontSize='large' />
          </div>
        </div>
      </div>

      <span className='p-5 text-xl'>Fancy Products</span>

      <div className={styles.bottom}>
        <div className={styles.bottomAsset}>
          <div className={styles.vertical}>
            <img src="/images/bike.gif" className={styles.gif} />
          </div>
          <div className={styles.horizontal}></div>
        </div>
        <div className={styles.bottomAsset}>
          <div className={styles.vertical}>
            <img src="/images/shoe.gif" className={styles.gif} />
          </div>
          <div className={styles.horizontal}></div>
        </div>
        <div className={styles.bottomAsset}>
          <div className={styles.vertical}>
            <img src="/images/watch.gif" className={styles.gif} />
          </div>
          <div className={styles.horizontal}></div>
        </div>
        <div className={styles.bottomAsset}>
          <div className={styles.vertical}>
            <img src="/images/car.gif" className={styles.gif} />
          </div>
          <div className={styles.horizontal}></div>
        </div>
      </div>
    </div>
  )
}

export default NavBarMarket