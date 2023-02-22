import {
    Box,
    Button,
    Container,
    Flex,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { IoLogoGithub } from 'react-icons/io5';
import { HamburgerIcon } from '@chakra-ui/icons';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../firebase-config';

export const Navbar: React.FC = () => {
    const context = useContext(AuthContext);

    const loginHandler = async () => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        console.log(result.user);
        context.login(result.user.accessToken);
    };

    const logo = () => {
        if (context.isLoggedIn) {
            return <Button onClick={() => context.logout()}>Log out</Button>;
        }
        return (
            <Button onClick={() => loginHandler()} variant="ghost" size="lg">
                Olexander Chako
            </Button>
        );
    };

    return (
        <header>
            <Box
                position="relative"
                as="nav"
                w="100%"
                css={{ backdropFilter: 'blur(10px)' }}
                zIndex={2}
            >
                <Container display="flex" p={2} maxW="container.md">
                    <Flex align="center" mr={5}>
                        {logo()}
                    </Flex>
                    <Flex
                        justify="right"
                        gap="5"
                        direction={{ base: 'column', md: 'row' }}
                        display={{ base: 'none', md: 'flex' }}
                        width={{ base: 'full', md: 'auto' }}
                        alignItems="center"
                        flexGrow={2}
                        mt={{ base: 4, md: 0 }}
                    >
                        <Link p={2} href="/works" style={{ color: 'inherit' }}>
                            Works
                        </Link>
                        <Link p={2} bg="grassTeal" href="/posts" style={{ color: 'inherit' }}>
                            Posts
                        </Link>
                        <Link
                            p={2}
                            bg="grassTeal"
                            display="inline-flex"
                            alignItems="center"
                            style={{ gap: 4, color: 'inherit' }}
                            pl={2}
                            href="https://github.com/achako2012/octo-translator"
                        >
                            <IoLogoGithub />
                            Source
                        </Link>
                        <Link p={2} bg="grassTeal" href="/articles" style={{ color: 'inherit' }}>
                            Articles
                        </Link>
                    </Flex>

                    <Box
                        align="right"
                        flex={1}
                        ml={2}
                        display={{ base: 'inline-block', md: 'none' }}
                    >
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <MenuItem
                                    as={Link}
                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                    href="/"
                                >
                                    About
                                </MenuItem>
                                <MenuItem
                                    as={Link}
                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                    href="/works"
                                >
                                    Works
                                </MenuItem>
                                <MenuItem
                                    as={Link}
                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                    href="/posts"
                                >
                                    Posts
                                </MenuItem>
                                <MenuItem
                                    as={Link}
                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                    href="https://github.com/achako2012/octo-translator"
                                >
                                    View Source
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Container>
            </Box>
        </header>
    );
};

export default Navbar;
