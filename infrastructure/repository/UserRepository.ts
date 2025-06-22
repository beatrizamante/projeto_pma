import z from "zod/v4";
import { db } from "../database";

export const initUser = async () => {
    await db.execAsync(
        `CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            email TEXT NOT NULL,
            role TEXT NOT NULL,
            password TEXT NOT NULL
        )`
    );
}

export const store = async (user: z.infer<typeof UserSchema>) => {
    await db.runAsync(`INSERT INTO users (username, email, role, password) VALUES (?, ?, ?, ?)`,
        [user.username, user.email, user.role, user.password]
    )
}

export const patch = async (id: string, user: z.infer<typeof UserSchema>) => {
    await db.runAsync(`UPDATE users SET username = ?, email = ?, password = w?, role = ? WHERE id = ?`),
        [id, user.username, user.email, user.role]
}

export const erase = async (id: string) => {
    await db.runAsync(`DELETE FROM users WHERE id = ?`,
        [id],)
}

export const get = async (id: string) => {
    await db.getFirstAsync(`SELECT * FROM users WHERE id = ?`), [id];
}

export const list = async () => {
    await db.getFirstAsync(`SELECT * FROM users`);
}

export const UserSchema = z.object({
    username: z.string().min(1, "Username is required"),
    email: z.email("Invalid email"),
    role: z.enum(["user", "admin"]),
    password: z.string().min(6, "Password must be at least 6 characters"),
});
