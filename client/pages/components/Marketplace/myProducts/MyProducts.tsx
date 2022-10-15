import React, { useState, useEffect } from 'react';
// import ABI from '../../../../../artifacts/contracts/Ecommarce.sol/Ecommarce.json';
import ABI from '../../../../utils/Ecommarce.json';
import { ethers } from 'ethers';
import Products from './Products';

function MyProducts() {

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


  const deployAddress = "0x6cA0AC66ed28b00c2bbae46a0a003f04a006983e"
  const [data, setData] = useState(sampleData)
  const [fatch, setFatch] = useState(false)

  
  const fatchedData = async() => {
    try {
      if(typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(deployAddress, ABI.abi, signer)
        
        let allMyProducts = await contract.getMyAllProduct();
  
        const items: any = await Promise.all(allMyProducts.map(async (i: any) => {
  
          let item = {
            price: i.price,
            productId: i.productId.toNumber(),
            seller: i.seller,
            buyer: i.buyer,
            title: i.title,
            desc: i.desc,
            stocks: i.stocks,
            img: i.img,
            deliveryStart: i.deliveryStart,
            deliveryEnd: i.deliveryEnd,
            delevered: i.delevered,
          }
          return item
        }))
  
        setData(items)
  
        setFatch(true)
      }


    } catch (error) {
      console.log(error)
    }
  }
  
  if(!fatch) {
    fatchedData()
  }

  const styles = {
    page: `w-screen min-h-screen flex justify-center items-center`,
    box: `w-10/12 min-h-96 bg-slate-300/[.3] shadow-2xl border-stone-900 rounded-xl p-3`,
  }

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div>
          {data.map((value, index) => {
            return <Products data={value} key={index} />
          })}
        </div>
      </div>
    </div>
  )
}

export default MyProducts