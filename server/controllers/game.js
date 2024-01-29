import prisma from "../prisma/prismaInstance.js";


export const getAllGames = async (req, res) => {
    try {
        const response = await prisma.game.findMany()
        res.status(200).send(response)
    } catch (error) {
        console.error('Error fetching games:', error)
        return res.status(500).json({message: 'Error fetching games'})
    }
}

export const createGame = async (req, res) => {
    const {title, description, location} = req.body.data
    try {
        const response = await prisma.game.create({
            data: {
                userId: 1,
                title: title,
                description: description,
                location: location
            }
        })
        return res.status(200).send(response)
    } catch (error) {
        console.error('Error Creating game:', error)
        return res.status(500).json({message: 'Error Creating game'})
    }
}


