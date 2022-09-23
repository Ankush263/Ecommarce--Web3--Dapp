import React from 'react'

function ItemCard(props: any) {

  const styles = {
    cardBox: `w-36 h-56 flex flex-col justify-between items-center`,
    imgBox: `w-full h-44 bg-slate-300/[.5] shadow-2xl border-white-900/75 rounded-xl`,
    img: `w-full h-full border-4 border-orange-600 rounded-xl`,
  }

  return (
    <div className={styles.cardBox}>
      <div className={styles.imgBox}>
        <img src={props.data.img} className={styles.img} />
      </div>
      <span className='text-black text-sm font-semibold'>{props.data.title}</span>
      <div className="flex justify-center items-center">
        <span className='text-black text-sm font-semibold ml-5'>{props.data.price}</span>
        <img src="/images/eth2.png" className='w-10 m-0 p-0' />
      </div>
    </div>
  )
}

export default ItemCard