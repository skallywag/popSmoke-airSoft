import prisma from "../prisma/prismaInstance.js";


export const getAllGames = async (req, res) => {
    try {
        const response = await prisma.game.findMany()
        console.log(response)
    } catch (error) {
        console.error('Error fetching events:', error)
        return res.status(500).json({message: 'Error fetching events'})
    }
}

export const createGame = async (req, res) => {
    const {title, description, location} = req.body
    try {
        const response = await prisma.game.create({
            data: {
                id: 1,
                title: title,
                description: description,
                location: location
            }
        })
    } catch (error) {
        console.error('Error Creating game:', error)
        return res.status(500).json({message: 'Error Creating game'})
    }
}


