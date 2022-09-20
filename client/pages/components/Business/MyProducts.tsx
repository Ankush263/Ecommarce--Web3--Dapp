import React from 'react'
import SideBar from '../Marketplace/SideBar'
import NavBarBusiness from './NavBarBusiness'

function MyProducts() {

  const styles = {
    page: `border-8 w-screen h-screen flex`,
    left: `w-2/12`,
    right: `w-full h-full`,
  }

  return (
    // <div className={styles.page}>
    //   <div className={styles.left}>
    //     <SideBar />
    //   </div>
    //   <div className={styles.right}>
    //     My Products
    //   </div>
    // </div>
    <div className='grid grid-cols-6 grid-flow-row'>
      <div className="row-span-3">
        <SideBar />
      </div>
      <div className="col-span-5 row-span-1 border-8 h-36">
        <NavBarBusiness />
      </div>
      <div className="row-span-2 col-span-5">
        <div className="border-8 h-full w-full">
          My Products
        </div>
      </div>
    </div>
  )
}

export default MyProducts