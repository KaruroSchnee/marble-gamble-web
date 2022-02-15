import type { NextPage } from 'next'
import { AnimatePresence, motion } from 'framer-motion'
import { Layout } from '../common/features'
import { MainHome } from '../modules'
import Head from 'next/head'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <link rel="canonical" href="https://www.marblegamble.io"></link>
                <meta property="og:title" content="Marble Gamble"></meta>
                <meta property="og:description" content="Have fun betting marbles on the block chain."></meta>
                <meta property="og:url" content="https://www.marblegamble.io"></meta>
                <meta property="og:site_name" content="Marble Gamble"></meta>
                <meta property="og:type" content="website"></meta>
            </Head>
            <AnimatePresence exitBeforeEnter>
                <motion.div initial='initial' animate='animate' exit='exit'>
                    <Layout>
                        <MainHome/>
                    </Layout>
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default Home
