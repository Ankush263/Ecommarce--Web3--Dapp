import React, { useState, useEffect } from 'react';
import {Button} from '@mui/material';
import ABI from '../../../../../artifacts/contracts/Ecommarce.sol/Ecommarce.json';
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


  const deployAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  const [data, setData] = useState(sampleData)

  
  const fatchedData = async() => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const address = await signer.getAddress()
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
        }
        return item
      }))

      setData(items)

      console.log(data)


    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fatchedData()
  }, [])

  const styles = {
    page: `w-screen min-h-screen flex justify-center items-center`,
    box: `w-10/12 min-h-96 bg-slate-300/[.3] shadow-2xl border-stone-900 rounded-xl p-3`,
    // itemBox: `w-full h-48 border-4`,
  }

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div>

          {data.map((value, index) => {
            return <Products data={value} key={index} />
          })}

          {/* <Products/>
          <Products/> */}
        </div>
        {/* <div className={styles.itemBox}></div>
        <div className={styles.itemBox}></div>
        <div className={styles.itemBox}></div>
        <div className={styles.itemBox}></div> */}
      </div>
    </div>
  )
}

export default MyProducts