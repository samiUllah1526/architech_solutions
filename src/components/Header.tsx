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
import { Logo } from './svgs'


type NavLinkProps = {
  children: React.ReactNode,
  path: string
}

type NavLink = {
  label: string,
  path: string
}

const leftLinks: NavLink[] = [
  { label: 'home', path: "#home" },
  { label: 'services', path: "#services" },
  { label: 'our testimonials', path: "#testimonials" }
]

const rightLinks: NavLink[] = [
  { label: 'about us', path: '#aboutUs' },
  { label: 'gallery', path: '#gallery' },
  { label: "contact us", path: "#contactUs" }
]



const NavLink = (props: NavLinkProps) => {
  const { children, path } = props
  return (
    <Box
      as="a"
      px={2}
      py={1}
      fontWeight='500'
      color="primary"
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        transition: "0.5s",
        bg: useColorModeValue('#d0920091', 'gray.700'),
        color: "white",
      }}
      href={path}>
      {children}
    </Box>
  )
}

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box mb="20">
      <Container >
        <Box bg={useColorModeValue('transparent', 'gray.900')}>
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
                <NavLink key={link.label} path={link.path}>{link.label}</NavLink>
              ))}
            </HStack>
            <Box>
              <Logo />
              {/* <Text style={{ fontFamily: "Syncopate" }} textTransform="uppercase">architect</Text>
              <Text style={{ fontFamily: "Syncopate" }} textTransform="uppercase">Solutions</Text> */}
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {rightLinks.map((link) => (
                <NavLink key={link.label} path={link.path}>{link.label}</NavLink>
              ))}
              {/* <Button
              size='md'
                variant='solid'
                rightIcon={<AddIcon />}
              >Contact US</Button> */}
            </HStack>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {leftLinks.concat(rightLinks).map((link) => (
                  <NavLink key={link.label} path={link.path}>{link.label}</NavLink>
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
