import Head from 'next/head'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <h1>homepage</h1>
      <p>These styles (styles.css) will apply to all pages and components in your application. Due to the global nature of stylesheets, and to avoid conflicts, you may only import them inside pages/_app.js.</p>
      <p>In development, expressing stylesheets this way allows your styles to be hot reloaded as you edit them—meaning you can keep application state.</p>
    </div>
  )
}
