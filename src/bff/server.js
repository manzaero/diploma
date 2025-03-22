import {getUser} from "./get-user.js";
import {addUser} from "./add-user.js";
import {sessions} from "./sessions.js";


export const server = {
    async logout(session) {
        sessions.remove(session);

    },
    async authorize(authEmail, authPassword) {
        const user = await getUser(authEmail, authPassword);
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
                login: user.login,
                email: user.email,
                roleId: user.role_id,
                session: sessions.create(user),
            }
        }
    }, async register(regLogin, regEmail, regPassword) {
        const existedUser = await getUser(regEmail);

        if (existedUser) {
            return {
                error: "This email is busy", result: null
            }
        }


        const user = await addUser(regLogin, regEmail, regPassword);


        return {
            error: null, result: {
                id: user.id,
                email: user.email,
                login: user.login,
                roleId: user.role_id,
                session: sessions.create(user),
            }
        }
    }
}