import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
    const email = 'admin@chaitanyakore.in'
    const password = 'securepassword123' // You can change this later
    const name = 'Chaitanya Kore'

    const hashedPassword = await bcrypt.hash(password, 10)

    const admin = await prisma.user.upsert({
        where: { email },
        update: {},
        create: {
            email,
            name,
            password: hashedPassword,
        },
    })

    console.log('✅ Admin user seeded/verified:', admin.email)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
