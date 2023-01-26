import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <h1>homepage</h1>
      <Link href="/demo">
        <p>See demo list</p>
      
      </Link>
    </div>
  )
}
