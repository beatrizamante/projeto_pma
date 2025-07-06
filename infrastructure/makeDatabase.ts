import { initVideos } from "./repository/VideoRepository";
import { initPeople } from "./repository/PeopleRepository";
import { initUsers } from "./repository/UserRepository";

export const makeDatabase = async () => {
    await initUsers();
    await initPeople();
    await initVideos();
};
