import Head from 'next/head'
import { signOut } from "next-auth/react";


export default function Home() {
  return (
    <div >
      <Head>
        <title>Job Case</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, distinctio architecto? Debitis fugit necessitatibus omnis, sed dignissimos enim alias nostrum?</h1>

    </div>
  )
}
