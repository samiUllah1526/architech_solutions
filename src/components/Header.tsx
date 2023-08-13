import {
  Container,
  Box,
  Flex,
  HStack,
  Text,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import { OpenIcon } from './svgs'

interface Props {
  children: React.ReactNode
}

const leftLinks = ['home', 'projects', 'clients']
const rightLinks = ['about Us', 'gallery']

const NavLink = (props: Props) => {
  const { children } = props
  return (
    <Box
      as="a"
      px={2}
      py={1}
      fontWeight='500'
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box mb="20">
      <Container maxW='90%' bg="transparent" py={3}>
        <Box bg={useColorModeValue('transparent', 'gray.900')} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {leftLinks.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
            <Box>
              <Text style={{ fontFamily: "Syncopate" }}>architect</Text>
              <Text style={{ fontFamily: "Syncopate" }}>Solutions</Text>
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {rightLinks.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              <Button
                variant='solid'
                rightIcon={<AddIcon />}
              >Contact US</Button>

            </HStack>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {leftLinks.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </Container>
      <Box bg="customegrey" height="1px" mb="2px"></Box>
      <Box bg="customegrey" height="1px"></Box>
    </Box>
  )
}
