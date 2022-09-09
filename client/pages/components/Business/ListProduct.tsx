import React from 'react'
import NavBar from '../NavBar'

function ListProduct() {

  const styles = {
    space: `bg-slate-300/[.2] shadow-2xl border-stone-900 w-11/12 h-screen rounded-3xl flex flex-col justify-center items-center mb-10 border-8`,
  }



  return (
    <div>
      <NavBar />
      <div className='flex flex-col justify-center items-center'>
        <div className={styles.space}>
          <span className='w-11/12 h-1/6 text-4xl font-black'>
            <p className='ml-60'>Welcome to the Web3.0 Ecommerce shop.</p>
            <p className='ml-40'>Here you can add any products with 0.01 eth each.</p>
          </span>
          <div className="w-11/12 h-screen">Hello</div>
        </div>
      </div>
    </div>
  )
}

export default ListProduct