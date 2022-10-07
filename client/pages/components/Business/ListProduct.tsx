import { Button } from '@mui/material'
import { ethers } from 'ethers'
import React, { useState } from 'react'
import { uploadFileToIPFS, uploadJSONToIPFS } from '../../pinata'
import NavBar from './NavBarBusiness'
import ABI from '../../../../artifacts/contracts/Ecommarce.sol/Ecommarce.json'
// import ABI from '../../../utils/Ecommarce.json'

function ListProduct() {

  const deployAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

  const [uploadImg, setUploadImg] = useState('')
  const [productDesc, setProductDesc] = useState({ title: '', desc: '', price: 0, stock: 0, img: '' })
  const [disabled, setDisabled] = useState(false)

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

  const uploadMetadataToIPFS = async () => {

    const { title, desc, price, stock, img } = productDesc

    if(!title || !desc || !price || !stock || !img || !uploadImg ) {
      return
    }

    const productJSON = {
      title,
      desc,
      price,
      stock,
      img,
      image: uploadImg
    }

    try {
      const response = await uploadJSONToIPFS(productJSON)
      if(response.success === true) {
        return response.pinataURL
      }
    } catch (error) {
      console.log("Upload metadata to IPFS error: ", error)
    }
  }

  const list = async (e: any) => {

    setDisabled(true)
    e.preventDefault()

    try {
      
      const metadataURL = await uploadMetadataToIPFS()
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const address = await signer.getAddress()
      const contract = new ethers.Contract(deployAddress, ABI.abi, signer)

      const price = ethers.utils.parseUnits(productDesc.price.toString(), 'wei')

      let listingPrice = await contract.listPrice()
      listingPrice = listingPrice.toString()
      
      let transaction = await contract.registerProduct(
        productDesc.title, 
        productDesc.desc,
        price,
        productDesc.stock,
        uploadImg,
        { value: listingPrice }
      )
      await transaction.wait()
      alert("Successfully list your product!!!")
      setUploadImg('')
      setProductDesc({ title: '', desc: '', price: 0, stock: 0, img: '' })
      setDisabled(false)
      window.location.replace('/components/Marketplace/HomePage')
      console.log(listingPrice)

    } catch (error) {
      alert("Upload Error: "+error)
      console.log("List Error: ", error)
    }
    
  }

  const styles = {
    space: `bg-slate-300/[.3] shadow-2xl border-stone-900 w-11/12 min-h-screen rounded-3xl flex flex-col justify-center items-center mb-10 p-5`,
    left: `w-6/12 h-5/6 bg-slate-300/[.3] shadow-2xl border-stone-900 rounded-3xl mt-10 flex flex-col items-start pb-20 pt-14 pl-10 pr-10`,
    right: `w-4/12 h-5/6 bg-slate-300/[.2] shadow-2xl border-stone-900 rounded-3xl mt-10 flex justify-center items-center p-2`,
    text: `text-md text-black p-2 font-semibold`,
    box: `ml-10 w-11/12 h-full flex flex-col justify-around`,
    input: `text-black rounded-md p-1 bg-slate-200/[.8] shadow-3xl border-stone-900`,
    subBox: `flex flex-col`,
  }



  return (
    <div>
      <NavBar />
      <div className='flex flex-col justify-center items-center'>
        <div className={styles.space}>
          <span className='w-11/12 h-1/6 text-4xl font-black'>
            <span 
              className='ml-60 text-teal-900 font-serif'>
                Welcome to the Web3.0 Ecommerce Business
            </span>
            <span 
              className='ml-40 text-teal-900 font-serif'>
                Here you can list any products with 0.01 eth each
            </span>
          </span>
          <div className="w-11/12 h-screen flex justify-around">
            <div className={styles.left}>
              <div className={styles.box}>
                <div className={styles.subBox}>
                  <span className={styles.text}>Upload Image</span>
                  <input 
                    type="file" 
                    onChange={uploadFile} 
                    className='' 
                  />
                </div>
                <div className={styles.subBox}>
                  <span className={styles.text}>Title: </span>
                  <input 
                    type="text" 
                    onChange={(e) => setProductDesc({ ...productDesc, title: e.target.value })} 
                    value={productDesc.title} 
                    className={styles.input} 
                  />
                </div>
                <div className={styles.subBox}>
                  <span className={styles.text}>Description: </span>
                  <textarea 
                    className={styles.input} 
                    cols={40} 
                    rows={5} 
                    onChange={(e) => setProductDesc({ ...productDesc, desc: e.target.value })} 
                    value={productDesc.desc}
                    >
                  </textarea>
                </div>
                <div className={styles.subBox}>
                  <span className={styles.text}>Stocks: </span>
                  <input 
                    type="number" 
                    className={styles.input} 
                    onChange={(e: any) => setProductDesc({ ...productDesc, stock: e.target.value })}
                    value={productDesc.stock}
                  />
                </div>
                <div className={styles.subBox}>
                  <span className={styles.text}>Price: </span>
                  <input 
                    type="number" 
                    className={styles.input} 
                    onChange={(e: any) => setProductDesc({ ...productDesc, price: e.target.value })}
                    value={productDesc.price}
                  />
                </div>
                <div className={styles.subBox}>
                  <Button 
                    variant="contained" 
                    onClick={list} 
                    className='rounded-md mt-5 text-black bg-sky-500'
                    disabled={disabled}
                  >
                    List Product
                  </Button>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              {
                uploadImg ? 
                <img src={`${uploadImg}`} 
                  className='rounded-xl w-max h-max max-w-full max-h-full'
                /> : 
                <p 
                  className='text-teal-900 text-xl font-bold font-sans'
                  >Uploaded image will be shown here!!!
                </p>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListProduct