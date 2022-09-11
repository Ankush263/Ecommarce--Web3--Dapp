import React from 'react'

function NavBarMarket() {

  const styles = {
    navbar: `border-8 h-60 flex flex-col`,
    top: `border-8 border-red-900 w-full h-20 flex justify-between items-center`,
    bottom: `border-8 border-sky-700 w-full h-48 flex justify-around items-center`,
    topLeft: `ml-10`,
    topRight: `w-1/2 flex justify-between mr-10`,
    searchBox: ``,
    search: `w-60`,
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <img src='/images/ecommerce-logo.png' className='w-16' />
        </div>
        <div className={styles.topRight}>

          <div className={styles.searchBox}>
            <input type="search" className={styles.search} />
          </div>

          {/* <span>searchBox</span>
          <span>Home</span>
          <span>0.938428</span>
          <span>Buscate</span>
          <span>App</span> */}
          
        </div>
      </div>
      <div className={styles.bottom}>
        <span>two</span>
        <span>two</span>
        <span>two</span>
        <span>two</span>
        <span>two</span>
      </div>
    </div>
  )
}

export default NavBarMarket