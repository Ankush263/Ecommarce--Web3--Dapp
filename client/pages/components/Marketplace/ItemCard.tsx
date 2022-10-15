import { ethers } from 'ethers'
import Link from 'next/link'
import React from 'react'

function ItemCard(props: any) {

  const stocks = () => {
    console.log(props.data.img)
  }

  const data = {
    img: props.data.img,
    title: props.data.title,
    desc: props.data.desc,
    seller: props.data.seller,
    stocks: props.data.stocks ? (props.data.stocks).toString() : props.data.stocks,
    price: props.data.price,
    id: props.data.productId
  }

  const styles = {
    cardBox: `w-36 h-56 flex flex-col justify-between items-center`,
    imgBox: `w-full h-44 bg-slate-300/[.5] shadow-2xl border-white-900/75 rounded-xl`,
    img: `w-full h-full border-4 border-orange-600 rounded-xl`,
  }

  return (
    <div className={styles.cardBox}>
      <div className={styles.imgBox}>
        <Link 
          href={{
            pathname: `/components/Marketplace/Items/${props.data.productId}`,
            query: data
          }}
        >
          <img src={props.data.img} onClick={stocks} className={styles.img} />
        </Link>
        {/* <img src={props.data.img} onClick={stocks} className={styles.img} /> */}
      </div>
      <span className='text-black text-sm font-semibold'>{props.data.title}</span>
      <div className="w-full flex justify-center items-center">
        <span className='text-black text-sm font-bold'>Stocks: {props.data.stocks ? (props.data.stocks).toString() : ""}</span>
        <span className='text-black text-sm font-semibold ml-5'>{props.data.price}</span>
        <img src="/images/eth2.png" className='w-10 m-0 p-0' />
      </div>
    </div>
  )
}

export default ItemCard