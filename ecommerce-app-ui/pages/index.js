import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from '../components/elements/Button'

export default function Home() {
  return (
    <div className={styles.container}>
     <Button variant='primary'>this is btn</Button>
    </div>
  )
}
