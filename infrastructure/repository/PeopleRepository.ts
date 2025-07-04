import { z } from "zod/v4";
import { db } from "../database";
import { Person, PersonWithoutId } from "../../app/interfaces/person";

export const initPeople = async () => {
    return await db.execAsync(
        `CREATE TABLE IF NOT EXISTS people (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                label TEXT NOT NULL,
                user_id INTEGER NOT NULL
            )`
    );
}

export const store = async (person: PersonWithoutId) => {
    return await db.runAsync(`INSERT INTO users (label, user_id) VALUES (?, ?)`,
        [person.name, person.user_id]
    )
}

export const erase = async (id: string) => {
    const person = await get(id);
    if (!person) return "This person doesn't exist on the database";


    return await db.runAsync(`DELETE FROM users WHERE id = ? AND user_id = ?`,
        [id, person.user_id]
    )
}

export const get = async (id: string): Promise<Person | null> => {
    return await db.getFirstAsync(`SELECT * FROM people WHERE id = ?`, [id]);
}

export const list = async (): Promise<Person[]> => {
    return await db.getAllAsync(`SELECT people.id, people.label FROM people JOIN users ON people.user_id = users.id`);
}

export const PeopleSchema = z.object({
    name: z.string().min(1, "Label is required"),
    user_id: z.string("Must be related to an user")
});
