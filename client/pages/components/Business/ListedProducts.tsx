import React, { useState } from 'react';
import { Button } from '@mui/material';
import ABI from '../../../../artifacts/contracts/Ecommarce.sol/Ecommarce.json';
import { ethers } from 'ethers';
import ItemCard from './Itemcard';



function ListedProducts() {

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

  const deployAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"

  const getItems = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const address = await signer.getAddress()
      const contract = new ethers.Contract(deployAddress, ABI.abi, signer)

      let allProducts = await contract.getAllMyListedProducts()

      // let p = allProducts[0].price.toString()
      // console.log(ethers.utils.formatEther(p).toString())

      const items: any = await Promise.all(allProducts.map(async (i: any) => {

        let price = ethers.utils.formatEther((i.price).toString())

        console.log("i.price: ", i.price.toString())
        console.log("price: ", price.toString())
        
        let item = {
          price,
          productId: i.productId.toNumber(),
          seller: i.seller,
          buyer: i.buyer,
          title: i.title,
          desc: i.desc,
          stocks: i.stocks,
          img: i.img,
          delevered: i.delevered,
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
    getItems()
  }

  const styles = {
    box: `w-11/12 min-h-screen mt-20 mb-20 bg-slate-300/[.5] shadow-2xl border-white-900/75 rounded-xl flex justify-center items-center p-2`,
  }

  return (
    <div className='min-h-screen w-10/12 mt-20 ml-9 flex justify-between items-center '>
      <div className="w-full min-h-screen grid grid-cols-5  ">

        {data.map((value, index) => {
          return <ItemCard data={value} key={index} />
        })}
      </div>
    </div>
  )
}

export default ListedProducts