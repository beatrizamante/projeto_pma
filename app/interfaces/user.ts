export default interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: string;
}

export type UserWithoutId = Omit<User, 'id'>;