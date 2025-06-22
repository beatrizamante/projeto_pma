import z from "zod/v4";
import { db } from "../database";
import { User } from "../../app/interfaces/user";

export type UserWithoutId = Omit<User, 'id'>;

export const initUser = async () => {
    return await db.execAsync(
        `CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            role TEXT NOT NULL,
            password TEXT NOT NULL
        )`
    );
}

export const store = async (user: UserWithoutId) => {
    return await db.runAsync(`INSERT INTO users (name, email, role, password) VALUES (?, ?, ?, ?)`,
        [user.name, user.email, user.role, user.password]
    )
}

export const patch = async (id: string, user: UserWithoutId) => {
    return await db.runAsync(`UPDATE users SET name = ?, email = ?, password = ?, role = ? WHERE id = ?`,
        [id, user.name, user.email, user.password, user.role]
    )
}

export const erase = async (id: string) => {
    return await db.runAsync(`DELETE FROM users WHERE id = ?`,
        [id]
    )
}

export const findByname = async (name: string): Promise<User | null> => {
    return await db.getFirstAsync(`SELECT id, name, password FROM users WHERE name = ?`, [name]);
}

export const get = async (id: string): Promise<User | null> => {
    return await db.getFirstAsync(`SELECT * FROM users WHERE id = ?`, [id]
    );
}

export const list = async (): Promise<User[] | null> => {
    return await db.getAllAsync(`SELECT * FROM users`);
}

export const UserSchema = z.object({
    name: z.string().min(1, "name is required"),
    email: z.email("Invalid email"),
    role: z.enum(["user", "admin"]),
    password: z.string().min(6, "Password must be at least 6 characters"),
});
