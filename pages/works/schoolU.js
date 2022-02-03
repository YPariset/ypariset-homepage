import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="schoolU">
    <Container>
      <Title>
        School-and-U <Badge>2021</Badge>
      </Title>
      <P>
        A React-native app that reinvents communication between parents and teachers.
      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/YPariset/School-U">
            Go to source <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/MacOS/Linux - iOS/Android </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React-native, Firebase</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/homepage_schoolU.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
