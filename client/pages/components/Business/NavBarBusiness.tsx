import React from 'react'
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import Link from 'next/link';

function NavBar() {

  const styles = {
    nav: `flex justify-center mt-5`,
    elements: `bg-slate-300/[.2] shadow-2xl border-white-900/75 w-11/12 h-30 rounded-3xl flex justify-around items-center mb-10 border-stone-900`,
  }



  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[500],
    '&:hover': {
      backgroundColor: yellow[700],
    },
  }));

  return (
    <div className={styles.nav}>
      <div className={styles.elements}>
        <Link href="/">
          <div className='w-6/12 flex justify-start mr-auto items-center'>
            <span className='mr-5 ml-5 font-bold text-3xl text-black'>Web3.0 Ecommerce</span>
            <img src='/images/ecommerce-logo.png' className='w-24 gap-x-10' />
          </div>
        </Link>
        <div className="flex w-5/12 justify-end">
          <div className='ml-5 w-3/12'>
            <ColorButton variant="outlined" className='font-bold'>My Products</ColorButton>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default NavBar