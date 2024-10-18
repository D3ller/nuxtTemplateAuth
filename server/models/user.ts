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
        }
    });
}

export async function getUserById(id: string) {
    return await prisma.user.findUnique({
        where: {
            id: id
        }
    });
}

export async function isAdmin(user?: User) {
    return user?.roles.includes("admin");
}