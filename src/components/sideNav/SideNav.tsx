import * as React from 'react';
import {useEffect, useState} from 'react';
import logo from '../../assets/smokeIcon.jpeg';
import {
    IconHome2,
    IconLogout,
    IconActivity,
    IconCircleOff,
    IconUserCircle
} from '@tabler/icons-react';
import {Box, NavLink, Divider, Image, Title} from '@mantine/core';
import {router} from '../../router';
import {useLocation} from 'react-router-dom'
import './SideNav.scss';

const Sidebar: React.FC = () => {
   const location = useLocation()
    const [currentPath, setCurrentPath] = useState(location.pathname);

    return (
        <nav className={`sidebar`}>
            <Box display={"flex"} style={{alignItems: "center", gap: 12}} mb={"20px"}>
                <Image src={logo} radius={80} height={40} width={100}/>
                <Title size={"md"}>Pop Smoke</Title>
            </Box>
            <Divider mb={20}/>
            <NavLink
                mb={8}
                label="Games and Events"
                active={currentPath === '/'}
                leftSection={<IconHome2 size="28px" stroke={1.5}/>}
                onClick={() => {
                    setCurrentPath('/')
                    router.navigate('/').catch(console.error)
                }}
            />
            <NavLink
                mb={8}
                label="Create Game"
                active={currentPath === '/game/create'}
                leftSection={<IconActivity size="28px" stroke={1.5}/>}
                onClick={() => {
                    setCurrentPath('/game/create')
                    router.navigate('/game/create').catch(console.error)
                }}
            />
        </nav>
    );
};

export default Sidebar;
