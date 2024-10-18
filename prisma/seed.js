import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const admin = await prisma.user.upsert({
        where: {email: 'admin@nuxt.com'},
        update: {},
        create: {
            email: 'admin@nuxt.com',
            username: 'Kora',
            password: '$2y$10$hXPea83sKsVsuf95mtEZZeIYtcFl1vLJ1BXVTEqcgKArf6/5.Zksm',
            profilePic: 'https://placehold.jp/150x150.png',
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