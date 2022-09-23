import React from 'react'

function ItemCard(props: any) {

  const styles = {
    cardBox: `border-2 w-32 h-44`,
    img: `w-full h-5/6`
  }

  return (
    <div className={styles.cardBox}>
      <div className={styles.img}>
        {/* <img src={props.data.img} /> */}
        
      </div>
    </div>
  )
}

export default ItemCard