import {getUser} from "./get-user.js";
import {addUser} from "./add-user.js";
import {sessions} from "./sessions.js";


export const server = {
    async logout(session) {
        sessions.remove(session);

    },
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
            error: null, result: {
                id: user.id,
                name: user.name,
                login: user.login,
                roleId: user.role_id,
                session: sessions.create(user),
            }
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
            error: null, result: {
                id: user.id,
                login: user.login,
                roleId: user.role_id,
                session: sessions.create(user),
            }
        }
    }
}