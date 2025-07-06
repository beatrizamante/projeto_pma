export default interface Video {
    id: string;
    user_id: string;
    image_path: string;
}

export type VideoWithoutId = Omit<Video, 'id'>
