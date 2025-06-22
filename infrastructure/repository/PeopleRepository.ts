import z from "zod/v4";
import { db } from "../database";

export const initUser = async () => {
    await db.execAsync(
        `CREATE TABLE IF NOT EXISTS people(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            label TEXT NOT NULL,
            user_id INTEGER NOT NULL
        )`
    );
}

export const store = async (person: z.infer<typeof PeopleSchema>) => {
    await db.runAsync(`INSERT INTO users (label, user_id) VALUES (?, ?)`,
        [person.label, person.user_id]
    )
}

export const erase = async (id: string, person: z.infer<typeof PeopleSchema>) => {
    await db.runAsync(`DELETE FROM users WHERE id = ? AND user_id = ?`,
        [id, person.user_id],)
}

export const get = async (id: string) => {
    await db.getFirstAsync(`SELECT * FROM people WHERE id = ?`), [id];
}

export const list = async () => {
    await db.getAllAsync(`SELECT * FROM people JOIN users ON people.user_id = users.id`);
}

export const PeopleSchema = z.object({
    label: z.string().min(1, "Label is required"),
    user_id: z.number("Must be related to an user")
});
