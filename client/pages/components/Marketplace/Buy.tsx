import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button';
import { ethers } from 'ethers';
import ABI from '../../../../artifacts/contracts/Ecommarce.sol/Ecommarce.json'



function Buy() {

  const deployAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
  const [address, setAddress] = useState('')
  const [numberItems, setNumberItems] = useState(0)

  const router = useRouter()
  const data = router.query

  const buy = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const address = await signer.getAddress()
      const contract = new ethers.Contract(deployAddress, ABI.abi, signer)

      const amount = ((Number(data.price) * numberItems)).toString()

      console.log(amount)
      console.log(typeof amount)



      // console.log(amount)
      // console.log(ethers.utils.parseUnits(amount, 'ether'))
      
      // console.log(typeof amount)
      // console.log(typeof ethers.utils.parseUnits(amount, 'ether'))

      await contract.buy(
        Number(data.id), 
        address, 
        Number(numberItems), 
        { value: ethers.utils.parseUnits(amount, 'ether') })
        
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