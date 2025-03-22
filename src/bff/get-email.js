import {getUsers} from "./get-users.js";

export const getEmail = async (emailToFind) => {
    const users = await getUsers();
    return users.find(({email}) => email === emailToFind)
};