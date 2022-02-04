import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta httpEquiv="content-language" content="fr"/>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Yoann Pariset homepage" />
        <meta name="author" content="Yoann Pariset" />
        <meta name="author" content="parizoo" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Yoann Pariset Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <meta name="keywords" content="Yoann, Pariset, Sorbonne, Sorbonne Universite, Developpeur web, CFA, Sciences, Three.js, Three, JS, HTML, CSS, PHP, Java, Javascript, React-native"/>
        <meta name="description" content="Développeur web à la Sorbonne | CFA des Sciences"/>
        <meta itemprop="name" content="Yoann Pariset - Developpeur junior full stack"/>
        <meta itemprop="description" content="Développeur web à la Sorbonne | CFA des Sciences"/>
        <meta property="og:url" content="https://ypariset.fr"/>
        <meta property="og:title" content="Yoann Pariset - Developpeur junior full stack"/>
        <meta property="og:description" content="Développeur web à la Sorbonne | CFA des Sciences"/>
        <meta property="og:image" content="https://docs.ypariset.fr/presentation_website.png"/>
        <meta itemprop="image" content="https://docs.ypariset.fr/presentation_website.png"/>
        <meta name="apple-mobile-web-app-title" content="Yoann"/>
        <meta name="application-name" content="Yoann Pariset"/>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
