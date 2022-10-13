import React, { useState } from 'react'
import ABI from '../../../utils/Ecommarce.json'
// import ABI from '../../../../artifacts/contracts/Ecommarce.sol/Ecommarce.json'
import { ethers } from 'ethers'
import Button from '@mui/material/Button';
import ItemCard from './ItemCard';


function Marketplace() {

  const sampleData = [
    {
      "img": "https://www.domusweb.it/content/dam/domusweb/en/news/2021/05/13/how-to-mint-your-own-nft-in-5-simple-steps/nft.jpg.foto.rbig.jpg",
      "title": "Demo1",
      "price": "1000",
      "tokenId": "01",
    },
    {
      "img": "https://www.domusweb.it/content/dam/domusweb/en/news/2021/05/13/how-to-mint-your-own-nft-in-5-simple-steps/nft.jpg.foto.rbig.jpg",
      "title": "Demo2",
      "price": "1000",
      "tokenId": "02",
    },
  ]

  const [data, updateData] = useState(sampleData)
  const [dataFatched, updateDataFatched] = useState(false)

  const deployAddress = "0x6cA0AC66ed28b00c2bbae46a0a003f04a006983e"

  const getAllData = async () => {
    
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const address = await signer.getAddress()
      const contract = new ethers.Contract(deployAddress, ABI.abi, signer)

      let allProducts = await contract.getAllProducts()

      const items: any = await Promise.all(allProducts.map(async (i: any) => {

        // let price = ethers.utils.formatUnits((i.price).toString(), 'ether')
        let price = ethers.utils.formatUnits((i.price).toString(), 'ether')
        // let price = ethers.utils.formatEther((i.price))
        console.log(i.productId.toNumber())
        let item = {
          price,
          // price: i.price.toString(),
          productId: i.productId.toNumber(),
          seller: i.seller,
          buyer: i.buyer,
          title: i.title,
          desc: i.desc,
          stocks: i.stocks,
          img: i.img,
        }
        return item
      }))

      updateData(items)
      updateDataFatched(true)


    } catch (error) {
      console.log(error)
    }
  }

  if(!dataFatched) {
    getAllData()
  }

  return (
    <div className='min-h-screen mt-20 ml-9 flex justify-center '>
      <div className="w-10/12 h-screen grid grid-cols-5 ">

        {data.map((value, index) => {
          return <ItemCard data={value} key={index} />
        })}
      </div>
    </div>
  )
}

export default Marketplace