import { Button, Divider, Stack } from '@chakra-ui/react'
import ReactCountryFlag from 'react-country-flag'
import { useRouter } from 'next/router'
import NextLink from 'next/link'

const LangButton = () => {
  const { locale, pathname } = useRouter()
  var linkFR = `/fr-FR${pathname}`
  var linkUS = `/en-US${pathname}`

  return (
    <div style={{ display: 'flex' }}>
      <NextLink
        activeClassName={locale === 'en-US'}
        href={linkUS}
        passHref
        locale="en-US"
      >
        <Button
          aria-label="Toggle lang"
          colorScheme="transparent"
          marginRight={0.5}
        >
          <ReactCountryFlag
            countryCode="US"
            svg
            style={{
              width: '1em',
              height: '1em'
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
          <Button
            aria-label="Toggle lang"
            colorScheme="transparent"
            marginRight={5}
            marginLeft={0.5}
          >
            <ReactCountryFlag
              countryCode="FR"
              svg
              style={{
                width: '1em',
                height: '1em'
              }}
              title="FR"
            />
          </Button>
        </Stack>
      </NextLink>
    </div>
  )
}

export default LangButton
