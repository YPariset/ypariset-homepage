import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Paragraph from '../components/paragraph'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import QRCode from 'qrcode.react'
import Section from '../components/section'
import { Meta } from '../components/work'
import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  List,
  ListItem
} from '@chakra-ui/react'

import Layout from '../components/layouts/article'
import styles from '../lib/bio.module.css'

export default function Bio() {
  const bioContent = {
    'en-US': {
      title: 'Bio',
      content:
        'My name is Yoann, I am a 23 years old junior web developer. I consider that the foundation of a good developer is a constant desire to learn and follow new trends. My goal is to combine design and technology, in order to create attractive websites as well as web applications. I love music, travelling and video-games. I believe that a multidisciplinary artistic vision has a positive impact on my work.',
      skillTitle: 'My Skills',
      skills:
        'I am able to work with different technologies such as JAVA, HTML5 & CSS3, JavaScript, PHP, as well as CMS like Wordpress or Mobirise. I am also proficient in using frameworks like React.js or React-native. Self-taught at heart, I easily learn new technologies and constantly set new challenges to myself.',
      download:
        "Feel free to download my resume in PDF format.\nPlease don't hesitate to send me your feedback in order for me to get better moving forward.",
      educationTitle: 'My Education',
      education:
        "After obtaining my secondary school diploma in Telecoms & Networks, I've decided to move to Australia in order to follow a 6 months intensive English training.\n\n I ended up staying 4 more months which was one of the best experience of my life. Back to reality, I made the decision to apply to the BTEC Higher National Diploma in Tourism Business.\n\n It turned out to quickly realize that this job was not the right fit for me, so I quited the training and turned my intership program into a full-time job with TUI organization, the world leading company in tourism. It was a blessing in disguise, I had finally found my way and what I wanted to do moving forward.\n\nOnce my contract ended, I decided to become self-taught and train myself to learn different computer languages such as Swift.\n\nI am now a student at the Sorbonne University in Pro License - Web and Mobile Project and work-study at CNP Assurances.",
      titleDiv: 'Business and tourism travel -',
      aYear: '1 Year',
      introList: 'Intensive lessons with great teachers about:',
      firstEl: 'Travel agencies',
      secondEl: 'Business or reservation platforms',
      thirdEl: 'Tour operators',
      titleSecondDiv: 'Intensive General English -',
      unoEl: 'Speaking',
      dosEl: 'Writting',
      tresEl: 'Understanding',
      experienceTitle: 'Work Experience',
      experienceText:
        " I spent 3 years of apprenticeship at Chateaud'eau during my secondary school diploma in Telecoms & Networks. I mostly had to solve IT problems related to the human resources department, not customers. I also learned how to install and configure electronic systems such as network switches, security alarms, audiovisual or multimedia equipment.\n\nAfter spending 1 year at TUI, I decided to start my own business in collaboration with a friend in order to develop and market Web-Planning in France, a web planning and project management application.\n\nAs part of this achievement was to develop a native iOS application with Swift that optimizes productivity and promotes employees collaboration in time management, resources and projects.\n\nIn order to complete this personal project, I have decided to join an intensive training within the Coding Factory in order to deepen my knowledge and to get a major as an Analyst Developer of software applications.",
      experienceFirstElTitle:
        'Self-Employed | Commercial & IT Service Provider -',
      experienceFirstElTag: 'since 3 years',
      now: 'now',
      experienceFirstElIntro:
        'Responsibility to create and/or manage various IT supports:',
      experienceFirstElDesc1: 'Website',
      experienceFirstElDesc2: 'Commercial brochure',
      experienceFirstElDes3: 'Helpdesk solution',
      experienceSecondElTitle: 'Helpdesk Technician -',
      experienceSecondElTag: '3 years',
      experienceSecondElDesc1: 'Telephone and physical intervention',
      experienceSecondElDesc2: 'Diagnose breakdowns',
      experienceSecondElDes3: 'Guide the user and resolve the incident'
    },
    'fr-FR': {
      title: 'Bio',
      content:
        "Je suis Yoann, un d??veloppeur junior de 23 ans. Je consid??re que la base d'un bon d??veloppeur est un d??sir constant d'apprendre et de suivre les nouvelles tendances. Mon objectif est d'allier design et technologie, afin de cr??er des sites web attractifs ainsi que des applications web. J'aime la musique, les voyages et les jeux vid??o. Je crois qu'une vision artistique multidisciplinaire a un impact positif sur mon travail.",
      skillTitle: 'Mes Comp??tences',
      skills:
        "Je suis capable de travailler avec diff??rentes technologies telles que JAVA, HTML5 & CSS3, JavaScript, PHP, ainsi que des CMS comme Wordpress ou Mobirise. Je ma??trise ??galement l'utilisation de frameworks comme React.js ou React-native. Autodidacte dans l'??me, j'apprends facilement de nouvelles technologies et je me fixe sans cesse de nouveaux d??fis.",
      download:
        "T??l??charger mon CV au format PDF.\nN'h??sitez pas ?? me faire part de vos commentaires afin que je puisse m'am??liorer.",
      educationTitle: 'Mon Parcours',
      education:
        "Apr??s avoir obtenu mon dipl??me d'??tudes secondaires en T??l??coms & R??seaux, j'ai d??cid?? de partir en Australie afin de suivre une formation intensive d'anglais de 6 mois.\n\nDe retour ?? la r??alit??, j'ai pris la d??cision de postuler au Dipl??me Vendeur Conseil en Voyage d'Affaires et de Tourisme.\n\n Il s'est av??r?? que ce m??tier ne me convenait pas, j'ai donc arr??t?? la formation et transform?? mon programme d'alternance en un emploi ?? temps plein avec l'organisation TUI, le leader mondial du tourisme. C'??tait une b??n??diction d??guis??e, j'avais enfin trouv?? ma voie et ce que je souhaitais faire pour aller de l'avant.\n\nUne fois mon contrat termin??, j'ai d??cid?? de devenir autodidacte et de me former ?? l'apprentissage de diff??rents langages informatiques en commen??ant par Swift.\n\nJe suis d??sormais un ??tudiant de la Sorbonne Universit?? en Licence Pro - Projet Web et Mobile et en alternance au sein de la CNP Assurances.",
      titleDiv: "Vendeur Conseil en Voyage d'Affaires\n et de Tourisme -",
      aYear: '1 An',
      introList: "Cours intensifs avec d'excellents professeurs sur:",
      firstEl: 'Agences de voyages',
      secondEl: "Plateformes d'affaires ou de r??servation",
      thirdEl: 'Tour-op??rateurs',
      titleSecondDiv: 'Anglais G??n??ral Intensif -',
      unoEl: 'Oral',
      dosEl: '??criture',
      tresEl: 'Compr??hension',
      experienceTitle: 'Mon Exp??rience',
      experienceText:
        "J'ai pass?? 3 ans en apprentissage ?? Ch??teaud'eau lors de mon BAC PRO T??l??coms & R??seaux. Ma mission ??tait principalement de r??soudre des probl??mes informatiques li??s au service des ressources humaines. J'ai ??galement appris ?? installer et ?? configurer des syst??mes ??lectroniques tels que des commutateurs r??seau, des alarmes de s??curit??, du mat??riel audiovisuel ou multim??dia.\n\nApr??s avoir pass?? 1 an chez TUI, j'ai cr???? ma propre entreprise en collaboration avec un ami afin de d??velopper et commercialiser Web-Planning en France, une application web de planification et de gestion de projets.\n\nDans le cadre de cette r??alisation, je devais d??velopper une application iOS native avec Swift qui optimise la productivit?? et favorise la collaboration des employ??s dans la gestion du temps, des ressources et des projets.\n\nAfin de mener ?? bien ce projet personnel, j'ai d??cid?? de suivre une formation intensive au sein de la Coding Factory afin d'approfondir mes connaissances et d'obtenir un BAC+2 en tant qu'Analyste D??veloppeur d'applications.",
      experienceFirstElTitle:
        'Auto-entrepreneur | Prestataire de services commerciaux et informatiques -',
      experienceFirstElTag: 'depuis 3 ans',
      now: 'maintenant',
      experienceFirstElIntro:
        'Responsabilit?? de cr??er et/ou de g??rer divers supports informatiques :',
      experienceFirstElDesc1: 'Site web',
      experienceFirstElDesc2: 'Plaquette commerciale',
      experienceFirstElDes3: "Solution d'assistance",
      experienceSecondElTitle: 'Technicien Helpdesk -',
      experienceSecondElTag: '3 ans',
      experienceSecondElDesc1: 'Intervention t??l??phonique et physique',
      experienceSecondElDesc2: 'Diagnostiquer les pannes',
      experienceSecondElDes3: "Guider l'utilisateur et r??soudre l'incident"
    }
  }
  const { locale } = useRouter()
  const {
    title,
    content,
    skillTitle,
    skills,
    download,
    education,
    educationTitle,
    titleDiv,
    aYear,
    introList,
    firstEl,
    secondEl,
    thirdEl,
    titleSecondDiv,
    unoEl,
    dosEl,
    tresEl,
    experienceText,
    experienceTitle,
    experienceFirstElTitle,
    experienceFirstElIntro,
    experienceFirstElTag,
    experienceFirstElDesc1,
    experienceFirstElDesc2,
    experienceFirstElDes3,
    experienceSecondElTitle,
    experienceSecondElTag,
    experienceSecondElDesc1,
    experienceSecondElDesc2,
    experienceSecondElDes3,
    now
  } = bioContent[locale]

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = e => {
      cursorX.set(e.clientX - 256 / 2 + window.scrollX)
      cursorY.set(e.clientY - 256 / 2 + window.scrollY)
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <div className="Bio">
      <Layout title="Bio">
        <Container maxW="container.lg">
          <Heading as="h2" variant="section-title" fontSize={20} mb={4}>
            {title}
          </Heading>
          <Paragraph>{content}</Paragraph>
          <Section>
            <Box flexShrink={0} mt={12}>
              <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
                {skillTitle}
              </Heading>
              <Paragraph>{skills}</Paragraph>
            </Box>
          </Section>
        </Container>
      </Layout>
      <div className={styles.resumeDiv}>
        <div className={styles.scanLabel}>
          <h2 className={styles.titleDiv}>Scan & Go</h2>
          <span className={styles.whitespace}>{download}</span>
        </div>
        <div>
          <motion.div
            className={styles.cursor}
            style={{
              translateX: cursorXSpring,
              translateY: cursorYSpring
            }}
          />
          <div className={styles.scan}>
            <div className={styles.scanDivChild}>
              <QRCode
                value="https://docs.ypariset.fr/CV-PARISET-YOANN.pdf"
                renderAs="svg"
                fgColor="#202023"
                className={styles.qrcode}
                style={{
                  width: '15vmin',
                  height: '15vmin'
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Layout title="Bio">
          <Container maxW="container.lg">
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
              <Section>
                <Box flexShrink={0} mt={8}>
                  <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
                    {educationTitle}
                  </Heading>
                  <Paragraph className={styles.whitespace}>
                    {education}
                  </Paragraph>
                </Box>
              </Section>
              <Section>
                <Box mt={16} ml={6}>
                  <Heading
                    as="h4"
                    fontSize={16}
                    mb={4}
                    className={styles.whitespace}
                  >
                    {titleDiv}
                    <Meta>{aYear}</Meta>
                  </Heading>
                  <Paragraph>EPT - Paris (75011)</Paragraph>
                  <Paragraph>2018 - 2019</Paragraph>
                  <hr style={{ marginTop: '10px', marginBottom: '10px' }}></hr>
                  <List>
                    <ListItem>
                      <span>{introList}</span>
                    </ListItem>
                    <ListItem>
                      <span>??? {firstEl}</span>
                    </ListItem>
                    <ListItem>
                      <span>??? {secondEl}</span>
                    </ListItem>
                    <ListItem>
                      <span>??? {thirdEl}</span>
                    </ListItem>
                  </List>
                </Box>
                <Box mt={16} ml={6}>
                  <Heading as="h4" fontSize={16} mb={4}>
                    {titleSecondDiv}
                    <Meta>{aYear}</Meta>
                  </Heading>
                  <Paragraph>ELC - Sydney (Australie)</Paragraph>
                  <Paragraph>2017-2018</Paragraph>
                  <hr style={{ marginTop: '10px', marginBottom: '10px' }}></hr>
                  <List>
                    <ListItem>
                      <span>{introList}</span>
                    </ListItem>
                    <ListItem>
                      <span>??? {unoEl}</span>
                    </ListItem>
                    <ListItem>
                      <span>??? {dosEl}</span>
                    </ListItem>
                    <ListItem>
                      <span>??? {tresEl}</span>
                    </ListItem>
                  </List>
                </Box>
              </Section>
            </SimpleGrid>
          </Container>
          <Container maxW="container.lg">
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
              <Section>
                <Box flexShrink={0} mt={16}>
                  <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
                    {experienceTitle}
                  </Heading>
                  <Paragraph className={styles.whitespace}>
                    {experienceText}
                  </Paragraph>
                </Box>
              </Section>
              <Section>
                <Box style={{ marginTop: '100px' }} ml={6}>
                  <Heading as="h4" fontSize={16} mb={4}>
                    {experienceFirstElTitle}
                    <Meta>{experienceFirstElTag}</Meta>
                  </Heading>
                  <Paragraph>Web-Planning</Paragraph>
                  <Paragraph>2019 - {now}</Paragraph>
                  <hr style={{ marginTop: '10px', marginBottom: '10px' }}></hr>
                  <List>
                    <ListItem>
                      <span>{experienceFirstElIntro}</span>
                    </ListItem>
                    <ListItem>
                      <span>??? {experienceFirstElDesc1}</span>
                    </ListItem>
                    <ListItem>
                      <span>??? {experienceFirstElDesc2}</span>
                    </ListItem>
                    <ListItem>
                      <span>??? {experienceFirstElDes3}</span>
                    </ListItem>
                  </List>
                </Box>
                <Box mt={16} ml={6} mb={16}>
                  <Heading as="h4" fontSize={16} mb={4}>
                    {experienceSecondElTitle}
                    <Meta> {experienceSecondElTag}</Meta>
                  </Heading>
                  <Paragraph>CHATEAUD&apos;EAU</Paragraph>
                  <Paragraph>2014 - 2017</Paragraph>
                  <hr style={{ marginTop: '10px', marginBottom: '10px' }}></hr>
                  <List>
                    <ListItem>
                      <span>??? {experienceSecondElDesc1}</span>
                    </ListItem>
                    <ListItem>
                      <span>??? {experienceSecondElDesc2}</span>
                    </ListItem>
                    <ListItem>
                      <span>??? {experienceSecondElDes3}</span>
                    </ListItem>
                  </List>
                </Box>
              </Section>
            </SimpleGrid>
          </Container>
        </Layout>
      </div>
    </div>
  )
}

export { getServerSideProps } from '../components/chakra'
