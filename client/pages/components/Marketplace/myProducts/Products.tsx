import React from 'react';
import Button from '@mui/material/Button';

function products(props: any) {

  const styles = {
    productBox: `w-full h-48 flex justify-between items-center mb-5`,
    imgBox: `w-48 h-48 rounded-xl ml-8`,
    rightBox: `w-80 h-48 mr-8 flex justify-center items-center`,
  }

  return (
    <div className={styles.productBox}>
      <div className={styles.imgBox}>
        <img src={props.data.img} className='w-full h-full rounded-xl' />
      </div>
      <span className='text-2xl text-black text-bold'>Order delivered in {(Number(props.data.deliveryEnd) - Number(props.data.deliveryStart)) / 86400} Days</span>
      <div className={styles.rightBox}>
        <div className="w-full flex justify-end items-center">
          <Button variant="contained" className='w-6/12 bg-green-700' color="success">
            Delivered
          </Button>
        </div>
      </div>
    </div>
  )
}

export default products