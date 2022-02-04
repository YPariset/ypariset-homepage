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
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import thumbFeelinFood from '../public/images/works/homepage_ff.png'
import thumbSchoolU from '../public/images/works/homepage_schoolU.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack developer based in France ! 🇫🇷
      </Box> 

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Yoann Pariset
          </Heading>
          <p>Digital Craftsman (Developer / Designer)</p>
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

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        My name is Yoann, I am a 23 years old junior web developer. I consider that the foundation of a good developer is a constant desire to learn and follow new trends.
        My goal is to combine design and technology, in order to create attractive websites as well as web applications.
        I love music, travelling and video-games. I believe that a multidisciplinary artistic vision has a positive impact on my work.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1998</BioYear>
          Born in Paris, France.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Completed the secondary school diploma in Telecoms and Networks
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Major as an Analyst Developer of software applications with Coding Factory School
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Works as a freelance
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
        Currently on a work-study program at Sorbonne University and CNP Assurance
        </BioSection>
        <Box align="center" my={4}>
          <Link href="https://io.ypariset.fr" isExternal style={{color: 'inherit', textDecoration: 'none'}}>
            <Button rightIcon={<ChevronRightIcon />} href="" colorScheme="teal">
              My Resume
            </Button>
          </Link>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
         Some projects
        </Heading>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <NextLink href="/works/feelinFood">
          <Link style={{color: 'inherit', textDecoration: 'none'}}>
          <GridItem
            title="Feelin'Food"
            thumbnail={thumbFeelinFood}
          >
            A PHP e-commerce web application designing around food delivery.
          </GridItem>
          </Link>
        </NextLink>
        <NextLink href="/works/schoolU">
          <Link style={{color: 'inherit', textDecoration: 'none'}}>
            <GridItem
              title="School-and-U"
              thumbnail={thumbSchoolU}
            >
              A React-native app that reinvents communication between parents and teachers.
            </GridItem>
          </Link>
          </NextLink>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
