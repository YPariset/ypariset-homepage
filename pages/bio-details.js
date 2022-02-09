import React from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
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
  Button,
  List,
  ListItem
} from '@chakra-ui/react'

import Layout from '../components/layouts/article'
import styles from '../lib/bio.module.css'

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
    firstEl: "Travel agencies",
    secondEl: "Business or reservation platforms",
    thirdEl: "Tour operators",
    titleSecondDiv:"Intensive General English -",
    unoEl: "Speaking",
    dosEl: "Writting",
    tresEl: "Understanding",
    experienceTitle: "Work Experience",
    experienceText:  " I spent 3 years of apprenticeship at Chateaud'eau during my secondary school diploma in Telecoms & Networks. I mostly had to solve IT problems related to the human resources department, not customers. I also learned how to install and configure electronic systems such as network switches, security alarms, audiovisual or multimedia equipment.\n\nAfter spending 1 year at TUI, I decided to start my own business in collaboration with a friend in order to develop and market Web-Planning in France, a web planning and project management application.\n\nAs part of this achievement was to develop a native iOS application with Swift that optimizes productivity and promotes employees collaboration in time management, resources and projects.\n\nIn order to complete this personal project, I have decided to join an intensive training within the Coding Factory in order to deepen my knowledge and to get a major as an Analyst Developer of software applications.",
    experienceFirstElTitle: "Self-Employed | Commercial & IT Service Provider -",
    experienceFirstElTag:"since 3 years",
    now:'now',
    experienceFirstElIntro:"Responsibility to create and/or manage various IT supports:",
    experienceFirstElDesc1:"Website",
    experienceFirstElDesc2:"Commercial brochure",
    experienceFirstElDes3:"Helpdesk solution",
    experienceSecondElTitle:"Helpdesk Technician -",
    experienceSecondElTag:"3 years",
    experienceSecondElDesc1:"Telephone and physical intervention",
    experienceSecondElDesc2:"Diagnose breakdowns",
    experienceSecondElDes3:"Guide the user and resolve the incident",
  },
  'fr-FR': {
    title: 'Bio',
    content:
      "Je m'appelle Yoann, je suis un développeur web junior de 23 ans. Je considère que la base d'un bon développeur est un désir constant d'apprendre et de suivre les nouvelles tendances. Mon objectif est d'allier design et technologie, afin de créer des sites web attractifs ainsi que des applications web. J'aime la musique, les voyages et les jeux vidéo. Je crois qu'une vision artistique multidisciplinaire a un impact positif sur mon travail.",
    skillTitle: 'Mes Compétences',
    skills:
      "Je suis capable de travailler avec différentes technologies telles que JAVA, HTML5 & CSS3, JavaScript, PHP, ainsi que des CMS comme Wordpress ou Mobirise. Je maîtrise également l'utilisation de frameworks comme React.js ou React-native. Autodidacte dans l'âme, j'apprends facilement de nouvelles technologies et je me fixe sans cesse de nouveaux défis.",
    download:
      "Télécharger mon CV au format PDF.\nN'hésitez pas à me faire part de vos commentaires afin que je puisse m'améliorer.",
    educationTitle: 'Mon Parcours',
    education:
      "Après avoir obtenu mon diplôme d'études secondaires en Télécoms & Réseaux, j'ai décidé de partir en Australie afin de suivre une formation intensive d'anglais de 6 mois.\n\nDe retour à la réalité, j'ai pris la décision de postuler au Diplôme Vendeur Conseil en Voyage d'Affaires et de Tourisme.\n\n Il s'est avéré que ce métier ne me convenait pas, j'ai donc arrêté la formation et transformé mon programme d'alternance en un emploi à temps plein avec l'organisation TUI, le leader mondial du tourisme. C'était une bénédiction déguisée, j'avais enfin trouvé ma voie et ce que je souhaitais faire pour aller de l'avant.\n\nUne fois mon contrat terminé, j'ai décidé de devenir autodidacte et de me former à l'apprentissage de différents langages informatiques en commençant par Swift.\n\nJe suis désormais un étudiant de la Sorbonne Université en Licence Pro - Projet Web et Mobile et en alternance au sein de la CNP Assurances.",
    titleDiv: "Vendeur Conseil en Voyage d'Affaires\n et de Tourisme -",
    aYear: '1 An',
    introList: "Cours intensifs avec d'excellents professeurs sur:",
    firstEl: "Agences de voyages",
    secondEl: "Plateformes d'affaires ou de réservation",
    thirdEl: "Tour-opérateurs",
    titleSecondDiv:"Anglais Général Intensif -",
    unoEl: "Oral",
    dosEl: "Écriture",
    tresEl: "Compréhension",
    experienceTitle: "Mon Expérience",
    experienceText: "J'ai passé 3 ans en apprentissage à Châteaud'eau lors de mon BAC PRO Télécoms & Réseaux. Ma mission était principalement de résoudre des problèmes informatiques liés au service des ressources humaines. J'ai également appris à installer et à configurer des systèmes électroniques tels que des commutateurs réseau, des alarmes de sécurité, du matériel audiovisuel ou multimédia.\n\nAprès avoir passé 1 an chez TUI, j'ai décidé de créer ma propre entreprise en collaboration avec un ami afin de développer et commercialise Web-Planning en France, une application web de planification et de gestion de projets.\n\nDans le cadre de cette réalisation, je devais développer une application iOS native avec Swift qui optimise la productivité et favorise la collaboration des employés dans la gestion du temps, des ressources et des projets.\n\nAfin de mener à bien ce projet personnel, j'ai décidé de suivre une formation intensive au sein de la Coding Factory afin d'approfondir mes connaissances et d'obtenir un BAC+2 en tant qu'Analyste Développeur d'applications.",
    experienceFirstElTitle: "Auto-entrepreneur | Prestataire de services commerciaux et informatiques -",
    experienceFirstElTag:"depuis 3 ans",
    now:'maintenant',
    experienceFirstElIntro:"Responsabilité de créer et/ou de gérer divers supports informatiques :",
    experienceFirstElDesc1:"Site web",
    experienceFirstElDesc2:"Plaquette commerciale",
    experienceFirstElDes3:"Solution d'assistance",
    experienceSecondElTitle:"Technicien Helpdesk -",
    experienceSecondElTag:"3 ans",
    experienceSecondElDesc1:"Intervention téléphonique et physique",
    experienceSecondElDesc2:"Diagnostiquer les pannes",
    experienceSecondElDes3:"Guider l'utilisateur et résoudre l'incident",

  }
}

export default function Bio() {
  const { locale, locales, defaultLocale, asPath } = useRouter()
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

  const [hovered, setHovered] = useState(false)
  const toggleHover = () => setHovered(!hovered)

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
      <div>
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
      </div>
      <div id="section02" className={styles.resumeDiv}>
        <div className={styles.scanLabel}>
          <h2 className={styles.titleDiv}>Scan & Go</h2>
          <span className={styles.whitespace}>{download}</span>
        </div>
        <div className={styles.motion}>
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
          <Container style={{ height: '80vh' }} maxW="container.lg">
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
                      <span>∙ {firstEl}</span>
                    </ListItem>
                    <ListItem>
                      <span>∙ {secondEl}</span>
                    </ListItem>
                    <ListItem>
                      <span>∙ {thirdEl}</span>
                    </ListItem>
                  </List>
                </Box>
                <Box mt={16} ml={6}>
                  <Heading as="h4" fontSize={16} mb={4}>
                    {titleSecondDiv}<Meta>{aYear}</Meta>
                  </Heading>
                  <Paragraph>ELC - Sydney (Australie)</Paragraph>
                  <Paragraph>2017-2018</Paragraph>
                  <hr style={{ marginTop: '10px', marginBottom: '10px' }}></hr>
                  <List>
                    <ListItem>
                      <span>{introList}</span>
                    </ListItem>
                    <ListItem>
                      <span>∙ {unoEl}</span>
                    </ListItem>
                    <ListItem>
                      <span>∙ {dosEl}</span>
                    </ListItem>
                    <ListItem>
                      <span>∙ {tresEl}</span>
                    </ListItem>
                  </List>
                </Box>
              </Section>
            </SimpleGrid>
          </Container>
        </Layout>
      </div>
      <div>
        <Layout title="Bio">
          <Container style={{ height: '80vh', marginBottom:'100px' }} maxW="container.lg">
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
                <Box style={{ marginTop: '115px' }} ml={6}>
                  <Heading as="h4" fontSize={16} mb={4}>
                    {experienceFirstElTitle}
                    <Meta>{experienceFirstElTag}</Meta>
                  </Heading>
                  <Paragraph>Web-Planning</Paragraph>
                  <Paragraph>2019 - {now}</Paragraph>
                  <hr style={{ marginTop: '10px', marginBottom: '10px' }}></hr>
                  <List>
                    <ListItem>
                      <span>
                        {experienceFirstElIntro}
                      </span>
                    </ListItem>
                    <ListItem>
                      <span>∙ {experienceFirstElDesc1}</span>
                    </ListItem>
                    <ListItem>
                      <span>∙ {experienceFirstElDesc2}</span>
                    </ListItem>
                    <ListItem>
                      <span>∙ {experienceFirstElDes3}</span>
                    </ListItem>
                  </List>
                </Box>
                <Box mt={16} ml={6} mb={16}>
                  <Heading as="h4" fontSize={16} mb={4}>
                  {experienceSecondElTitle}<Meta> {experienceSecondElTag}</Meta>
                  </Heading>
                  <Paragraph>CHATEAUD'EAU</Paragraph>
                  <Paragraph>2014 - 2017</Paragraph>
                  <hr style={{ marginTop: '10px', marginBottom: '10px' }}></hr>
                  <List>
                    <ListItem>
                      <span>∙ {experienceSecondElDesc1}</span>
                    </ListItem>
                    <ListItem>
                      <span>∙ {experienceSecondElDesc2}</span>
                    </ListItem>
                    <ListItem>
                      <span>∙ {experienceSecondElDes3}</span>
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
