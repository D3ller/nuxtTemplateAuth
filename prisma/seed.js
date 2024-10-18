import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const admin = await prisma.user.upsert({
        where: {email: 'admin@nuxt.com'},
        update: {},
        create: {
            email: 'admin@nuxt.com',
            username: 'Kora',
            roles: {
                create: {
                    name: 'ADMIN'
                }
            }
        },
    })

    console.log({admin})
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