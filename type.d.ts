export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    profilePic: string;
    roles: string[];
}

export type UserWithoutPassword = Omit<User, "password">;