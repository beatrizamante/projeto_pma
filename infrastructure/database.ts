import * as SQLite from "expo-sqlite";
import { initVideos } from "./repository/VideoRepository";
import { initPeople } from "./repository/PeopleRepository";
import { initUsers } from "./repository/UserRepository";

export const db = SQLite.openDatabaseSync("watchme_dev");

export const initDatabase = async () => {
    await initUsers();
    await initPeople();
    await initVideos();
}
