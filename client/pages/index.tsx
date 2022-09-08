import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import WellcomePage from './components/WellcomePage'

const Home: NextPage = () => {
  return (
    <div className="app">
      <WellcomePage />
    </div>
  )
}

export default Home
