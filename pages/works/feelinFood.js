import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="feelinFood">
    <Container>
      <Title>
      feelin&apos;Food <Badge>2020-</Badge>
      </Title>
      <P>
        A PHP e-commerce web application.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://feelinfoodfrance.000webhostapp.com/">
            Go to website <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP, HTML5, CSS, JavaScript, MySql</span>
        </ListItem>s
      </List>

      <WorkImage src="/images/works/homepage_ff.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
