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
        localStorage.removeItem("cart");
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
    },
    async loadProducts() {
        try {
            const response = await fetch('http://localhost:3005/products');
            if (!response.ok) {
                throw new Error(response.error);
            }
            const products = await response.json();
            return {
                error: null,
                result: products
            }
        } catch (e) {
            return {
                error: e.message,
                result: null
            }
        }
    },
    async loadCategories() {
        try {
            const response = await fetch('http://localhost:3005/categories');
            if (!response.ok) {
                throw new Error(response.error);
            }
            const categories = await response.json();
            return {
                error: null,
                result: categories
            }
        } catch (e) {
            return {
                error: e.message,
                result: null
            }
        }
    }
}