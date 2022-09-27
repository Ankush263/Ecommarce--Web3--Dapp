import React from 'react';
import Button from '@mui/material/Button';

function products() {

  const styles = {
    productBox: `w-full h-48 flex justify-between items-center`,
    imgBox: `w-48 h-48 border-4 rounded-xl ml-8`,
    rightBox: `w-80 h-48 mr-8 flex justify-center items-center`,
  }

  return (
    <div className={styles.productBox}>
      <div className={styles.imgBox}></div>
      <span className='text-2xl text-black text-bold'>Only 7 days left</span>
      <div className={styles.rightBox}>
        <div className="w-full flex justify-between items-center">
          <Button variant="contained" color="error" >
            Cancell Order
          </Button>
          <Button variant="contained" className='w-6/12' color="success">
            Delivered
          </Button>
        </div>
      </div>
    </div>
  )
}

export default products