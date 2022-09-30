import React from 'react';
import { Button } from '@mui/material';


function Itemcard(props: any) {
  return (
    <div>
      <Button variant="contained" onClick={() => console.log(props)}>click</Button>
    </div>
  )
}

export default Itemcard