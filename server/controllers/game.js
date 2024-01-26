import prisma from "../prisma/prismaInstance.js";


export const getAllGames = async (req, res) => {
    try {

        const response = await prisma.operators.findMany()
        console.log(response)
    } catch (error) {
        console.error('Error fetching events:', error)
        return res.status(500).json({ message: 'Error fetching events' })
    }
}


