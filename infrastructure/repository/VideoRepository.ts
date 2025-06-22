import z from "zod/v4";
import { db } from "../database";
import { Video, VideoWithoutId } from "../../app/interfaces/video";

export const initUser = async () => {
    return await db.execAsync(
        `CREATE TABLE IF NOT EXISTS people(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image_path TEXT NOT NULL,
            user_id INTEGER NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`
    );
}

export const store = async (video: VideoWithoutId) => {
    return await db.runAsync(`INSERT INTO videos (image_path, user_id) VALUES (?, ?)`,
        [video.image_path]
    )
}

export const erase = async (id: string) => {
    const video = await get(id);
    if (!video) return "This video does not exist";
    return await db.runAsync(`DELETE FROM videos WHERE id = ? AND user_id = ?`,
        [id, video.user_id])
}

export const get = async (id: string): Promise<Video | null> => {
    return await db.getFirstAsync(`SELECT * FROM videos WHERE id = ?`,
        [id]
    );
}

export const list = async (): Promise<Video[]> => {
    return await db.getAllAsync(`SELECT videos.id, videos.image_path, videos.created_at, users.username FROM videos JOIN users ON videos.user_id = users.id`);
}

export const VideoSchema = z.object({
    image_path: z.string().min(1, "An image pawth is required"),
    user_id: z.number("Must be related to an user")
});
