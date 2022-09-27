import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button';
import { ethers } from 'ethers';
import ABI from '../../../../artifacts/contracts/Ecommarce.sol/Ecommarce.json';


function Buy() {

  const deployAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  const [address, setAddress] = useState('')
  const [numberItems, setNumberItems] = useState(1)
  const [total, setTotal] = useState(1)
  const [click, setClick] = useState(false)

  const router = useRouter()
  const data = router.query

  useEffect(() => {
    setTotal(Number(data.price) * numberItems)
  },[numberItems])

  const buy = async () => {
    setClick(true)
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const address = await signer.getAddress()
      const contract = new ethers.Contract(deployAddress, ABI.abi, signer)

      const amount = ((Number(data.price) * numberItems)).toString()

      let transaction = await contract.buy(
        Number(data.id), 
        address, 
        Number(numberItems), 
        { value: ethers.utils.parseUnits(amount, 'ether') })
      await transaction.wait()
      alert("Successfully buy product!!!")
      setAddress('')
      setNumberItems(1)
      setTotal(1)
      window.location.replace('/components/Marketplace/myProducts/MyProducts')
      setClick(false)
        
    } catch (error) {
      console.log(error)
    }
  }

  const styles = {
    page: `w-screen h-screen flex justify-center items-center`,
    box: `w-8/12 h-4/5 flex items-center bg-slate-300/[.3] shadow-2xl border-stone-900 rounded-xl p-2 border-orange-500 border-2`,
    left: `h-full w-4/12 flex flex-col justify-center items-center bg-slate-300/[.3] shadow-2xl border-stone-900 rounded-xl border-orange-500 border-2`,
    imgBox: `w-44 h-44 bg-slate-300/[.3] shadow-2xl border-stone-900 rounded-xl border-orange-500 border-2`,
    priceBox: `h-10 w-44 mt-5 bg-slate-900 shadow-2xl border-stone-900 rounded-xl pt-1 pl-2 border-orange-500 border-2 text-sm`,
    right: `h-3/6 w-8/12 flex flex-col justify-around items-center`,
    input1: `w-4/12 h-10 shadow-2xl border-stone-900 rounded-xl`,
    input2: `w-8/12 h-40 bg-slate-300/[.3] shadow-2xl border-stone-900 rounded-xl`,
  }

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.left}>
          <div className={styles.imgBox}>
            <img src={`${data.img}`} className='w-full h-full rounded-xl' />
          </div>
          <div className={styles.priceBox}>
            Price: {data.price} & Total: {total} eth
          </div>
          <span>Only {data.stocks} products left</span>
        </div>
        <div className={styles.right}>
          <div className={styles.input1}>
          <input 
            type="number" 
            placeholder='enter number of Items'
            onChange={(e: any) => setNumberItems(e.target.value)}
            value={numberItems}
            className='w-full h-full rounded-xl p-3 text-xl'
          />
          </div>
          <div className={styles.input2}>
          <textarea
            cols={40} 
            rows={5}
            placeholder='Enter delivery address'
            onChange={(e: any) => setAddress(e.target.value)}
            value={address}
            className='w-full h-full rounded-xl p-3 text-xl'
          ></textarea> 
          </div>
          <Button disabled={click} variant='contained' onClick={buy} className='w-6/12 bg-sky-600'>Buy</Button>
        </div>
      </div>
    </div>
  )
}

export default Buy