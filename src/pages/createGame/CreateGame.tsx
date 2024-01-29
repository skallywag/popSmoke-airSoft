import * as React from 'react';
import './CreateGame.scss';
import theme from '../../styles/themeVars.module.scss';
import {createGame} from "../../api/game";
import {useForm, SubmitHandler} from "react-hook-form";
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    Box, Textarea
} from '@chakra-ui/react'

const CreateGame: React.FC = () => {
    const {
        handleSubmit,
        register,
        formState: { errors},
    } = useForm()

    async function onSubmit(values) {
        try {
            const response = await createGame(values)
            console.log(response)
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <Box className={'page CreateGame'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                    <FormLabel mt={3} htmlFor='title'>Title</FormLabel>
                    <Input
                        id='title'
                        placeholder='Title'
                        {...register('title', {
                            required: 'Title is required',
                            minLength: {value: 4, message: 'Minimum length should be 4'},
                        })}
                    />
                    <span style={{color: theme.accentError}}>{errors.title && errors.title.message}</span>
                </FormControl>

                <FormControl>
                    <FormLabel mt={3} htmlFor='description'>Description</FormLabel>
                    <Textarea
                        id='description'
                        placeholder='Description'
                        {...register('description', {
                            required: 'Description is required',
                            minLength: {value: 4, message: 'Minimum length should be 4'},
                        })}
                    />
                    <span style={{color: theme.accentError}}>{errors.description && errors.description.message}</span>
                </FormControl>

                <FormControl>
                    <FormLabel mt={3} htmlFor='location'>Location</FormLabel>
                    <Input
                        id='location'
                        placeholder='Location'
                        {...register('location', {
                            required: 'Location is required',
                            minLength: {value: 4, message: 'Minimum length should be 4'},
                        })}
                    />
                    <span style={{color: theme.accentError}}>{errors.location && errors.location.message}</span>
                </FormControl>

                <Button width={'100%'} mt={4} colorScheme='teal' type='submit'>
                    Submit
                </Button>
            </form>
        </Box>
    )
};
export default CreateGame;