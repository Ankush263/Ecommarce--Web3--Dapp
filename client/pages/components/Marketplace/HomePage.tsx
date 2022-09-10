import React from 'react'
import NavBar from './NavBarMarket'
import SideBar from './SideBar'
import Marketplace from './Marketplace'

function HomePage() {
  return (
    <div className='grid grid-cols-6 grid-flow-row'>
      <div className="row-span-3">
        <SideBar />
      </div>
      <div className="col-span-5 row-span-1">
        <NavBar />
      </div>
      <div className="row-span-2 col-span-5">
        <Marketplace />
      </div>
    </div>
  )
}

export default HomePage