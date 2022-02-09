import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { useRouter } from 'next/router'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import thumbFeelinFood from '../public/images/works/homepage_ff.png'
import thumbSchoolU from '../public/images/works/homepage_schoolU.png'

export default function Home() {
  const homeContent = {
    'en-US': {
      title: "Hello, I'm a full-stack developer based in France ! 👨‍💻",
      desc: 'Digital Craftsman (Developer / Designer)',
      workIntro:
        'My name is Yoann, I am a 23 years old junior web developer. I consider that the foundation of a good developer is a constant desire to learn and follow new trends. My goal is to combine design and technology, in order to create attractive websites as well as web applications. I love music, travelling and video-games. I believe that a multidisciplinary artistic vision has a positive impact on my work.',
      workTitle: 'Work',
      workButton: 'My portfolio',
      bioBirth: 'Born in region of Paris, France.',
      bioBac: 'Completed the secondary school diploma in Telecoms and Networks',
      bioPostBac:
        'Major as an Analyst Developer of software applications with Coding Factory School',
      bioFreelance: 'Works as a freelance',
      bioSorbonne:
        'Currently on a work-study program at Sorbonne University and CNP Assurance',
      bioButton: 'My resume',
      projects: 'Some projects',
      feelinFood:
        ' A PHP e-commerce web application designing around food delivery.',
      schoolU:
        'A React-native app that reinvents communication between parents and teachers.'
    },
    'fr-FR': {
      title: 'Bonjour, je suis un développeur basé en France ! 👨‍💻',
      desc: 'Artisan numérique (Développeur / Designer)',
      workIntro:
        "Je m'appelle Yoann, je suis un développeur web junior de 23 ans. Je considère que la base d'un bon développeur est un désir constant d'apprendre et de suivre les nouvelles tendances. Mon objectif est d'allier design et technologie, afin de créer des sites web attractifs ainsi que des applications web. J'aime la musique, les voyages et les jeux vidéo. Je crois qu'une vision artistique multidisciplinaire a un impact positif sur mon travail.",
      workTitle: 'Réalisations',
      workButton: 'Mon portfolio',
      bioBirth: 'Né à Drancy(93), France.',
      bioBac: 'Obtention du diplôme BAC PRO SEN - Télécoms & Réseau',
      bioPostBac:
        "Obtention du diplôme d'Analyste Développeur d'Applications Web et Mobile",
      bioFreelance: 'Travaille en freelance',
      bioSorbonne:
        'Actuellement étudiant à Sorbonne Université et en alternance chez CNP Assurances',
      bioButton: 'Mon CV',
      projects: 'Quelques projets',
      feelinFood:
        'Un e-commerce PHP conçue autour de la livraison de nourriture.',
      schoolU:
        'React-native app qui réinvente la communication entre parents et enseignants.'
    }
  }

  const {locale} = useRouter()
  const {
    title,
    desc,
    workIntro,
    workTitle,
    workButton,
    bioBac,
    bioBirth,
    bioFreelance,
    bioPostBac,
    bioSorbonne,
    bioButton,
    projects,
    feelinFood,
    schoolU
  } = homeContent[locale]

  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          {title}
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Yoann Pariset
            </Heading>
            <p>{desc}</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/profile-700.jpeg"
              alt="Profile image"
            />
          </Box>
        </Box>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1998</BioYear>
            {bioBirth}
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            {bioBac}
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            {bioFreelance}
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            {bioPostBac}
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            {bioSorbonne}
          </BioSection>
          <Box align="center" my={4}>
            <NextLink
              href="/bio-details"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                {bioButton}
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.1}>
          <Heading style={{ marginTop:'100px' }} as="h3" variant="section-title">
            {workTitle}
          </Heading>
          <Paragraph>{workIntro}</Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" passHref>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                {workButton}
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" style={{ marginTop:'100px' }} variant="section-title">
            {projects}
          </Heading>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <NextLink href="/works/feelinFood">
              <Link style={{ color: 'inherit', textDecoration: 'none' }}>
                <GridItem title="Feelin'Food" thumbnail={thumbFeelinFood}>
                  {feelinFood}
                </GridItem>
              </Link>
            </NextLink>
            <NextLink href="/works/schoolU">
              <Link style={{ color: 'inherit', textDecoration: 'none' }}>
                <GridItem title="School-and-U" thumbnail={thumbSchoolU}>
                  {schoolU}
                </GridItem>
              </Link>
            </NextLink>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export { getServerSideProps } from '../components/chakra'
