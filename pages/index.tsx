// next js hello world page for static export 

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

    return (<>
    <Head>
        <title>Emojiulator</title>
        <meta name="description" content="Find the perfect emoji for anything" />
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
        <h1 className={styles.title}>
            Welcome to Emojiulator!
        </h1>
    </main>
    <footer>
        <a
            href="https://mldangelo.com"
            target="_blank"
            rel="noopener noreferrer"
        >
            Powered by{' '}
        </a>
    </footer>
    </>
    );
}

export const config = {
    runtime: 'experimental-edge',
}