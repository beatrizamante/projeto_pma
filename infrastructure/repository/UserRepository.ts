import z from "zod/v4";
import { db } from "../database";
import { User } from "../../app/interfaces/user";

export type UserWithoutId = Omit<User, 'id'>;

export const initUser = async () => {
    return await db.execAsync(
        `CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            email TEXT NOT NULL,
            role TEXT NOT NULL,
            password TEXT NOT NULL
        )`
    );
}

export const store = async (user: UserWithoutId) => {
    return await db.runAsync(`INSERT INTO users (username, email, role, password) VALUES (?, ?, ?, ?)`,
        [user.username, user.email, user.role, user.password]
    )
}

export const patch = async (id: string, user: UserWithoutId) => {
    return await db.runAsync(`UPDATE users SET username = ?, email = ?, password = ?, role = ? WHERE id = ?`,
        [id, user.username, user.email, user.password, user.role]
    )
}

export const erase = async (id: string) => {
    return await db.runAsync(`DELETE FROM users WHERE id = ?`,
        [id]
    )
}

export const findByUsername = async (username: string): Promise<User | null> => {
    return await db.getFirstAsync(`SELECT id, username, password FROM users WHERE username = ?`, [username]);
}

export const get = async (id: string): Promise<User | null> => {
    return await db.getFirstAsync(`SELECT * FROM users WHERE id = ?`, [id]

    );
}

export const list = async (): Promise<User[] | null> => {
    return await db.getAllAsync(`SELECT * FROM users`);
}

export const UserSchema = z.object({
    username: z.string().min(1, "Username is required"),
    email: z.email("Invalid email"),
    role: z.enum(["user", "admin"]),
    password: z.string().min(6, "Password must be at least 6 characters"),
});
