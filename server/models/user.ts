import type { User } from "~~/type";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getUsers() {
    return users;
}

export async function getUserByEmail(email: string) {
    return await prisma.user.findUnique({
        where: {
            email: email
        },
        select: {
            id: true,
            email: true,
            username: true,
            password: true,
            profilePic: true,
            roles: {
                select: {
                    name: true
                }
            }
        }
    });
}

export async function getUserById(id: string) {
    return await prisma.user.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            email: true,
            username: true,
            password: true,
            profilePic: true,
            roles: {
                select: {
                    name: true
                }
            }
        }
    });
}

export async function isAdmin(user?: User) {
    return user?.roles.includes("admin");
}