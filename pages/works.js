import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbFeelinFood from '../public/images/works/homepage_ff.png'
import thumbSchoolU from '../public/images/works/homepage_schoolU.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="feelinFood" title="Feelin'Food" thumbnail={thumbFeelinFood}>
            A PHP e-commerce web application designing around food delivery.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="schoolU"
            title="School-and-U"
            thumbnail={thumbSchoolU}
          >
            A React-native app that reinvents communication between parents and teachers.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
