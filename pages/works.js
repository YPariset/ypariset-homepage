import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { useRouter } from 'next/router'
import { WorkGridItem } from '../components/grid-item'

import thumbFeelinFood from '../public/images/works/homepage_ff.png'
import thumbSchoolU from '../public/images/works/homepage_schoolU.png'

export default function Works() {
  const workContent = {
    'en-US': {
      title: 'Works',
      feelinFood:
        ' A PHP e-commerce web application designing around food delivery.',
      schoolU:
        'A React-native app that reinvents communication between parents and teachers.'
    },
    'fr-FR': {
      title: 'Réalisations',
      feelinFood:
        'Un e-commerce PHP conçue autour de la livraison de nourriture.',
      schoolU:
        'React-native app qui réinvente la communication entre parents et enseignants.'
    }
  }

  const { locale } = useRouter()
  const { title, feelinFood, schoolU } = workContent[locale]

  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          {title}
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="feelinFood"
              title="Feelin'Food"
              thumbnail={thumbFeelinFood}
            >
             {feelinFood}
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="schoolU"
              title="School-and-U"
              thumbnail={thumbSchoolU}
            >
             {schoolU}
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export { getServerSideProps } from '../components/chakra'
