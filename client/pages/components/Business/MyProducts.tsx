import React from 'react'
import SideBar from '../Marketplace/SideBar'
import NavBarBusiness from './NavBarBusiness'
// import Button from '@mui/material/Button';
// import ABI from '../../../utils/Ecommarce.json'
// import { ethers } from 'ethers'
import ListedProducts from './ListedProducts';

function MyProducts() {

  

  const styles = {
    page: `border-8 w-screen h-screen flex`,
    left: `w-2/12`,
    right: `w-full h-full`,
  }

  return (
    <div className='grid grid-cols-6 grid-flow-row'>
      <div className="row-span-3">
        <SideBar />
      </div>
      <div className="col-span-5 row-span-1 h-36">
        <NavBarBusiness />
      </div>
      <div className="row-span-2 col-span-5">
        <div className="h-full w-full flex justify-center items-between">
          <ListedProducts />
        </div>
      </div>
    </div>
  )
}

export default MyProducts