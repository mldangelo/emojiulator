import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>Emojiulator</title>
        <meta name="description" content="Translate any sentence into emoji" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello World</h1>
      </main>
    </>
  )
}

export const config = {
  runtime: 'experimental-edge',
}