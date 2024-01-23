import * as React from 'react';
import './HomePage.scss';
interface HomePageProps {
}
const HomePage: React.FC<HomePageProps> = (props) => {
    return (
        <div className={'HomePage.scss'}>
        I am Home
        </div>
    )
}
export default HomePage;