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
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Yoann Pariset homepage" />
        <meta name="author" content="Yoann Pariset" />
        <meta name="author" content="parizoo" />
        <meta name="google-site-verification" content="M9Xt3EbLlVqLBWyrz-rqk77PZZdUudq4VqrBtv8LEqE" />
        <meta property="og:site_name" content="Yoann Pariset Homepage" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="Yoann, Pariset, Sorbonne, Sorbonne Universite, Developpeur web, CFA, Sciences, Three.js, Three, JS, HTML, CSS, PHP, Java, Javascript, React-native"/>
        <meta name="description" content="Développeur web à la Sorbonne | CFA des Sciences"/>
        <meta property="og:title" content="Yoann Pariset - Developpeur junior full stack"/>
        <meta property="og:description" content="Développeur web à la Sorbonne | CFA des Sciences"/>
        <meta property="og:image" content="https://docs.ypariset.fr/presentation.png"/>
        <meta itemProp="name" content="Yoann Pariset - Developpeur junior full stack"/>
        <meta itemProp="description" content="Développeur web à la Sorbonne | CFA des Sciences"/>
        <meta itemProp="image" content="https://docs.ypariset.fr/presentation.png"/>
        <meta name="apple-mobile-web-app-title" content="Yoann"/>
        <meta name="application-name" content="Yoann Pariset"/>
        <title>Pariset Yoann - junior full-stack developer</title>
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.lg" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
