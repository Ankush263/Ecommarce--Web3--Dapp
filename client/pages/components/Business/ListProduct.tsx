import { Button } from '@mui/material'
import React, { useState } from 'react'
import { uploadFileToIPFS } from '../../pinata'
import NavBar from './NavBarBusiness'

function ListProduct() {

  const [uploadImg, setUploadImg] = useState('')

  const list = async () => {
    try {
      console.log(uploadImg)
    } catch (error) {
      console.log(error)
    }
  }

  const uploadFile = async (e: any) => {
    let file = e.target.files[0]
    try {
      const response = await uploadFileToIPFS(file)

      if(response.success === true) {
        setUploadImg(response.pinataURL)
        console.log(response.pinataURL)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const styles = {
    space: `bg-slate-300/[.2] shadow-2xl border-stone-900 w-11/12 min-h-screen rounded-3xl flex flex-col justify-center items-center mb-10 p-5`,
    left: `w-6/12 h-5/6 bg-slate-300/[.2] shadow-2xl border-stone-900 rounded-3xl mt-10 flex flex-col items-start pb-20 pt-14 pl-10 pr-10`,
    right: `w-4/12 h-5/6 bg-slate-300/[.2] shadow-2xl border-stone-900 rounded-3xl mt-10 flex justify-center items-center`,
    text: `text-2xl font-black p-3`,
    box: `ml-10 w-11/12 h-full flex flex-col justify-around`,
    input: `text-black rounded-xl p-4 bg-slate-200/[.2] shadow-2xl border-stone-900`,
    subBox: `flex flex-col`,
  }



  return (
    <div>
      <NavBar />
      <div className='flex flex-col justify-center items-center'>
        <div className={styles.space}>
          <span className='w-11/12 h-1/6 text-4xl font-black'>
            <p className='ml-60 text-orange-700 font-serif'>Welcome to the Web3.0 Ecommerce Business</p>
            <p className='ml-40 text-orange-700 font-serif'>Here you can list any products with 0.01 eth each</p>
          </span>
          <div className="w-11/12 h-screen flex justify-around">
            <div className={styles.left}>
              <div className={styles.box}>
                <div className={styles.subBox}>
                  <span className={styles.text}>Upload Image</span>
                  <input type="file" onChange={uploadFile} className='' />
                </div>
                <div className={styles.subBox}>
                  <span className={styles.text}>Title: </span>
                  <input type="text" className={styles.input} />
                </div>
                <div className={styles.subBox}>
                  <span className={styles.text}>Description: </span>
                  <textarea className={styles.input} cols={40} rows={5}></textarea>
                </div>
                <div className={styles.subBox}>
                  <span className={styles.text}>Stocks: </span>
                  <input type="number" className={styles.input} />
                </div>
                <div className={styles.subBox}>
                  <Button variant="contained" onClick={list} className='rounded-3xl mt-5 font-bold text-black'>List Product</Button>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              {
                uploadImg ? 
                <img src={`${uploadImg}`} className='rounded-xl w-max h-max max-w-full max-h-full'/> : 
                <p className='text-orange-700 text-xl font-bold font-sans'>Uploaded image will be shown here!!!</p>
              }
              
              {/* <img src='/images/ecommerce-logo.png' className='border-8'/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListProduct