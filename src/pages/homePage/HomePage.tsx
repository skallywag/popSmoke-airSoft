import * as React from 'react';
import './HomePage.scss';
import {Box} from "@mantine/core";
interface HomePageProps {
}
const HomePage: React.FC<HomePageProps> = (props) => {
    return (
        <Box className={'HomePage.scss'}>
        I am Home
        </Box>
    )
}
export default HomePage;