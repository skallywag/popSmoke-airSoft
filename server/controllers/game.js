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
    const {
        title,
        description,
        locationName,
        gameType,
        state,
        dateTime,
        paidEvent,
        entryPrice,
        address,
        firstName,
        acceptedPayment,
        email,
        phoneNumber
    } = req.body.data

    try {
        const response = await prisma.game.create({
            data: {
                userId: 8,
                title: title,
                description: description,
                locationName: locationName,
                gameType: gameType,
                state: state,
                dateTime: dateTime,
                paidEvent: paidEvent,
                entryPrice: entryPrice,
                acceptedPayment: acceptedPayment,
                address: address,
                firstName: firstName,
                email: email,
                phoneNumber: phoneNumber
            }
        })
        return res.status(200).send(response)
    } catch (error) {
        console.error('Error Creating game:', error)
        return res.status(500).send({message: 'Error Creating game'})
    }
}


