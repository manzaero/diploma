import {generateDate} from "./generate-date.js";

export const addUser = async (login, password) => {
    await fetch('http://localhost:3005/users', {
        method: 'POST', headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }, body: JSON.stringify({
            login: login,
            password: password,
            registered_at: generateDate(),
            role_id: 3
        })
    })
}