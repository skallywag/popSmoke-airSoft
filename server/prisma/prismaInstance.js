// prismaInstance.js
import { PrismaClient } from '@prisma/client'
// export const prisma = new PrismaClient()


let prisma

if (!global.prisma) {
    global.prisma = new PrismaClient()
}

prisma = global.prisma
export default prisma