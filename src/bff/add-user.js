import {generateDate} from "./generate-date.js";

export const addUser = async (login, email, password) =>
    fetch('http://localhost:3005/users', {
        method: 'POST', headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }, body: JSON.stringify({
            login: login,
            email: email,
            password: password,
            registered_at: generateDate(),
            role_id: 2
        })
    })
        .then((createdUser) => createdUser.json())