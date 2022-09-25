import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button';
import { ethers } from 'ethers';
import ABI from '../../../../artifacts/contracts/Ecommarce.sol/Ecommarce.json'



function Buy() {

  const deployAddress = "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e"
  const [address, setAddress] = useState()
  const [numberItems, setNumberItems] = useState()

  const router = useRouter()
  const data = router.query

  const buy = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const address = await signer.getAddress()
      const contract = new ethers.Contract(deployAddress, ABI.abi, signer)
      console.log(contract)
      console.log(data)

      console.log(typeof Number(data.id))
      console.log(typeof Number(numberItems))

      await contract.buy(Number(data.id), address, Number(numberItems))
      // await contract.buy(data.id, address, numberItems)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <input 
        type="text" 
        placeholder='Enter delivery address'
        onChange={(e: any) => setAddress(e.target.value)}
        value={address}
      />
      <input 
        type="number" 
        placeholder='enter number of Items'
        onChange={(e: any) => setNumberItems(e.target.value)}
        value={numberItems}
      />
      <Button variant="contained" onClick={buy}>Buy</Button>
    </div>
  )
}

export default Buy