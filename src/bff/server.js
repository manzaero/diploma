import {getUser} from "./get-user.js";
import {addUser} from "./add-user.js";
import {createSession} from "react-router-dom";

export const server = {
    async authorize(authLogin, authPassword) {
        const user = await getUser(authLogin, authPassword);
        if (!user) {
            return {
                error: 'No user found.', result: null
            }
        }
        if (authPassword !== user.password) {
            return {
                error: 'Wrong password', result: null
            }
        }


        return {
            error: null, result: createSession(user.role_id)
        }
    }, async register(regLogin, regPassword) {
        const user = await getUser(regLogin);

        if (user) {
            return {
                error: "This login is busy", result: null
            }
        }

        await addUser(regLogin, regPassword);


        return {
            error: null, result: createSession(user.role_id)
        }
    }
}