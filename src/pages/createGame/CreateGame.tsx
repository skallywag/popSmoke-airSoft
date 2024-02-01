import * as React from 'react';
import './CreateGame.scss';
import {toast} from "react-toastify";
import {createGame} from "../../api/game";
import {isNotEmpty, useForm} from '@mantine/form';
import '@mantine/dates/styles.css';
import {DateTimePicker} from '@mantine/dates';
import {Box, Button, Textarea, TextInput, Select} from "@mantine/core";

type FieldValues = {
    title: string;
    description: string;
    gameType: string;
    state: string;
    dateTime: string;
}

const CreateGame: React.FC = () => {
    const form = useForm<FieldValues>({
        initialValues: {title: '', description: '', gameType: '', state: '', dateTime: ''},
        validate: {
            title: (value) => (value.length < 4 && 'Title must have at least 2 letters'),
            description: (value) => (value.length < 4 && 'Enter game description'),
            gameType: (value) => (!value && 'Select a game type'),
            state: (value) => (!value && 'Select a State'),
            dateTime: (value) => (!value && "Choose a date and time")
        },
    });


    const onSubmit = (values) => {
        try {
            // const response = await createGame(values)
            // console.log(response)
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <Box className={'page CreateGame'}>
            <Box mb={40} ta={"center"}>Create a Game or Event</Box>
            <Box style={{boxShadow: '0 0 10px rgba(0,0,0,.18', padding: '36px 24px'}}>
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <TextInput mb={20} label="Title" placeholder="Title" {...form.getInputProps('title')}/>
                    <Textarea mb={20} label="Description"
                              placeholder="Description" {...form.getInputProps('description')}/>
                    <Select mb={20} label="Game Type" placeholder="Select Game Type"
                            data={["Open play", "Event"]} {...form.getInputProps('gameType')}/>
                    <Select mb={20} label="State" placeholder="Select State"
                            data={["Arizona", "Utah"]} {...form.getInputProps('state')}/>
                    <DateTimePicker
                        mb={20}
                        label="Pick date and time"
                        placeholder="Pick date and time"
                        valueFormat="DD MMM YYYY hh:mm A"
                        {...form.getInputProps('dateTime')}
                    /> <Button fullWidth mt={4} type='submit'>
                    Submit
                </Button>
                </form>
            </Box>
        </Box>
    );
};
export default CreateGame;