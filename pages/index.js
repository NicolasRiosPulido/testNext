import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export const getStaticProps = async (context) => {
  const res = await fetch('https://rickandmortyapi.com/api/location')
  const data = await res.json()
  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      data
    }
  }
}

export default function Home(props) {
  const { data } = props
  console.log('respuestas test', data)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="amphtml" href="/amp" />
      </Head>
      <main className={styles.main}>
        <h1>Otto.com</h1>
        <Link href="/test_page">
          <a>test link next.js</a>
        </Link>
        <h2>{data.results[0].name}</h2>
      </main>
    </div>
  )
}

