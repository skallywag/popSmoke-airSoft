import * as React from 'react';
import './CreateGame.scss';
import {toast} from "react-toastify";
import {createGame} from "../../api/game";
import {isNotEmpty, useForm} from '@mantine/form';
import '@mantine/dates/styles.css';
import {DateTimePicker} from '@mantine/dates';
import {Box, Button, Textarea, TextInput, Select, Checkbox, NumberInput, MultiSelect, Divider, Title} from "@mantine/core";

type FieldValues = {
    title: string;
    description: string;
    gameType: string;
    state: string;
    address: string;
    locationName: string;
    dateTime: string;
    paidEvent?: boolean;
    entryPrice?: number;
    acceptedPayment?: any;
    firstName: string;
}

const CreateGame: React.FC = () => {
    const form = useForm<FieldValues>({
        initialValues: {
            title: '',
            description: '',
            gameType: '',
            state: '',
            dateTime: '',
            paidEvent: false,
            entryPrice: undefined,
            acceptedPayment: [],
            locationName: '',
            address: '',
            firstName: '',
            email: '',
            phoneNumber: ''
        },
        validate: {
            title: (value) => (value.length < 4 && 'Title must have at least 4 letters'),
            description: (value) => (value.length < 4 && 'Enter game description'),
            gameType: (value) => (!value && 'Select a game type'),
            state: (value) => (!value && 'Select a State'),
            locationName: (value) => (!value && 'Enter name of location'),
            address: (value) => (!value && 'Enter address of location'),
            dateTime: (value) => (!value && "Choose a date and time"),
            entryPrice: (value) => (!value && form.values.paidEvent && 'Enter entry price'),
            acceptedPayment: (value) => value.length === 0 && form.values.paidEvent && 'Select Payment type',
            firstName: (value) => (!value && "Enter your name"),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
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

    const handleResetEventValues = () => {
        if (form.values.paidEvent) {
            form.setFieldValue('entryPrice', undefined);
            form.setFieldValue('acceptedPayment', [])
        }
    }

    return (
        <Box className={'page CreateGame'}>
            <Box mb={40} ta={"center"}>Create a Game or Event</Box>

            <Box style={{boxShadow: '0 0 10px rgba(0,0,0,.18', padding: '36px 24px'}}>
                <Title mb={20} size={18}>Operation</Title>
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <TextInput mb={20} label="Title" placeholder="Title" {...form.getInputProps('title')}/>
                    <Textarea mb={20} label="Description"
                              placeholder="Description" {...form.getInputProps('description')}/>
                    <Select mb={20} label="Game Type" placeholder="Select Game Type"
                            data={["Open play", "Event"]} {...form.getInputProps('gameType')}/>

                    {form.values.gameType === "Event" &&
                        <Checkbox mb={20} onClick={() => handleResetEventValues()}
                                  label={"Paid Event?"} {...form.getInputProps('paidEvent')}/>}

                    {form.values.paidEvent &&
                        <>
                            <NumberInput ml={16} mb={20} placeholder="Entry Price" prefix="$" {...form.getInputProps('entryPrice')}/>
                            <MultiSelect ml={16} mb={20} placeholder="Select accepted payments"
                                         data={["venmo", "paypal", "Cash"]} {...form.getInputProps('acceptedPayment')}/>
                        </>
                    }
                    <Select mb={20} label="State" placeholder="Select State"
                            data={["Arizona", "Utah"]} {...form.getInputProps('state')}/>
                    <TextInput mb={20} label="Location Name"
                               placeholder="Hobble Creek" {...form.getInputProps('locationName')}/>
                    <TextInput mb={20} label="Address"
                               placeholder="ie: 2248 Deer Crk Wy, Springville, UT 84663" {...form.getInputProps('address')}/>
                    <DateTimePicker
                        mb={30}
                        clearable
                        label="Pick date and time"
                        placeholder="Pick date and time"
                        valueFormat="DD MMM YYYY hh:mm A"
                        {...form.getInputProps('dateTime')}
                    />
                    <Divider mb={20}/>
                    <Title mb={20} size={18}>Contact</Title>
                    <TextInput mb={20} label="First Name" placeholder="First name" {...form.getInputProps('firstName')}/>

                    <TextInput mb={20} label="Contact Email" placeholder="Contact Email" {...form.getInputProps('email')}/>

                    <TextInput mb={20} label="Phone (Optional)" placeholder="Phone Number" type={"number"}{...form.getInputProps('phoneNumber')}/>
                    <Button fullWidth mt={4} type='submit'>
                        Submit
                    </Button>
                </form>
            </Box>
        </Box>
    );
};
export default CreateGame;