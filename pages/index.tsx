// next js hello world page for static export 

import Head from 'next/head'

export default function Index() {
    return (
        <>
            <Head>
        <title>Emojiulator</title>
        <meta name="description" content="Find the perfect emoji for anything" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Emojiulator</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Translate any word, phrase, or text into emojis.
            </p>
          </div>
        </div>
      </div>
      </>
    )
  }

export const config = {
    runtime: 'experimental-edge',
}