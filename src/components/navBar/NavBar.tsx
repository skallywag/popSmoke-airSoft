import {
    Group,
    Button,
    Divider,
    Box,
    Burger,
    Drawer,
    ScrollArea,
    rem,
    Text, Stack, Title
} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown,
} from '@tabler/icons-react';
import './NavBar.scss';
import themes from '../../styles/themeVars.module.scss';
import {router} from "../../router";

const NavBar: React.FC = () => {
    const [drawerOpened, {toggle: toggleDrawer, close: closeDrawer}] = useDisclosure(false);

    return (
        <Box pb={120} className={"navBar"}>
            <header className={"header"}>
                <Group justify="space-between" h="100%">
                    <Burger pl={20} color={themes.primaryOrange} opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm"/>
                </Group>
            </header>
            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Pop Smoke"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <Stack mb={30}>
                    <Text
                        className={"link"}
                        style={{color: themes.primaryOrange}}
                        onClick={() => {
                            router.navigate('/')
                            toggleDrawer()
                        }}
                    >
                        Home
                    </Text>
                    <Text
                        className={"link"}
                        style={{color: themes.primaryOrange}}
                        onClick={() => {
                            router.navigate('/')
                            toggleDrawer()
                        }}>
                        Games and Events
                    </Text>
                    <Text
                        style={{color: themes.primaryOrange}}
                        className={"link"}
                        onClick={() => {
                            router.navigate('/game/create')
                            toggleDrawer()
                        }}
                    >
                        Create Game
                    </Text>


                </Stack>


                    <Divider mb={30} my="sm"/>

                    <Group justify="center" grow pb="xl" px="md">
                        <Button variant="default">Log in</Button>
                        <Button color={themes.primaryOrange}>Sign up</Button>
                    </Group>
            </Drawer>
        </Box>
    );
}

export default NavBar;