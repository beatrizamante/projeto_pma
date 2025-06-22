export interface Video {
    id: string;
    user_id: string;
    image_path: string;
    created_at: string;
}

export type VideoWithoutId = Omit<Video, 'id'>
