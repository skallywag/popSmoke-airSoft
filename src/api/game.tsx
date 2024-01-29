import axios from "axios";


export const createGame = async (data) => {
    try {
        const response = await axios.post('http://localhost:8080/game/create', {data})
        return response.data
    } catch (error) {
        console.error(error.message)
    }
}
