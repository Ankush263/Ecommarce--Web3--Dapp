import React from 'react'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button';



function id() {

  const router = useRouter()
  const data = router.query

  return (
    <div>
      <Button onClick={() => console.log(data)}>Click</Button>
    </div>
  )
}

export default id