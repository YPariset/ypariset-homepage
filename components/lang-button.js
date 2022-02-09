import { AnimatePresence, motion } from 'framer-motion'
import { useColorModeValue, Button, Divider, Stack } from '@chakra-ui/react';
import ReactCountryFlag from "react-country-flag"
import { useRouter } from 'next/router'
import NextLink from 'next/link'

const LangButton = () => {
  const { locale, pathname } = useRouter()
  var linkFR = `/fr-FR${pathname}`
  var linkUS = `/en-US${pathname}`

  return (
    <div style={{ display: 'flex' }}>
      <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'flex' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <NextLink
        activeClassName={locale === 'en-US'}
        href={linkUS}
        passHref
        locale="en-US"
      >
        <Button aria-label="Toggle lang" colorScheme="transparent" marginRight={0.5}>
        <ReactCountryFlag
                countryCode="US"
                svg
                style={{
                    width: '1.5em',
                    height: '1.5em',
                }}
                title="US"
            />
        </Button>
      </NextLink>
      <Divider orientation="vertical" />
      <NextLink
        activeClassName={locale === 'fr-FR'}
        href={linkFR}
        passHref
        locale="fr-FR"
      >
        <Stack direction="row" spacing={4}>
          <Button  aria-label="Toggle lang" colorScheme="transparent" marginRight={5} marginLeft={0.5}>
          <ReactCountryFlag
                countryCode="FR"
                svg
                style={{
                  width: '1.5em',
                  height: '1.5em',
                }}
                title="FR"
            />
          </Button>
        </Stack>
      </NextLink>
     
      </motion.div>
    </AnimatePresence>
    </div>
  )
}

export default LangButton
