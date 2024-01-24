import * as React from 'react';
import './CreateGame.scss';
import {Box} from "@chakra-ui/react";

interface CreateGameProps {
}

const CreateGame: React.FC<CreateGameProps> = (props) => {
return (
        <Box className={'page CreateGame'}>
       create game
        </Box>
    )
}
export default CreateGame;