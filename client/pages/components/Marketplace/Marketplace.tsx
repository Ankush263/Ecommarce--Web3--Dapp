import React, { useState } from 'react'
// import ABI from '../../../utils/Ecommarce.json'
import ABI from '../../../../artifacts/contracts/Ecommarce.sol/Ecommarce.json'
import { ethers } from 'ethers'
import Button from '@mui/material/Button';
import ItemCard from './ItemCard';


function Marketplace() {

  const [img, setImg] = useState('')
  const [price, setPrice] = useState(0)
  const [title, setTitle] = useState('')
  const [stock, setStock] = useState(0)  

  const deployAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"

  const handleClick = async () => {
    
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const address = await signer.getAddress()
      const contract = new ethers.Contract(deployAddress, ABI.abi, signer)

      // const allProducts = await contract.products(0)
      // allProducts.map((product: any) => {
      //   console.log(product)
      // })

      let allProducts = await contract.getAllProducts()

      allProducts.map((item: any) => {
        console.log(item.img)
        
      })
      
      // allProducts.map((i: any) => console.log(i))
      // console.log(allProducts)
      
      // console.log(allProducts)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='border-8 min-h-full mb-60'>
      Marketplace
      <ItemCard 

      />
      <Button onClick={handleClick}>Click</Button>
    </div>
  )
}

export default Marketplace