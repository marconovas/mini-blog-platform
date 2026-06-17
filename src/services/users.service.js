import { authFetch } from "../utils/authFetch";

const API_URL = "http://localhost:3000"

export async function getUserById(id) {
    const response = await fetch(`${API_URL}/users/${id}`)

    const data = await response.json();

    if(!response.ok) {
        throw new Error(data.message);
    }

    return data;
}

//UPDATE
export async function updateUser(id, data) {
    const response = await authFetch(`${API_URL}/users/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data)
    });

    const responseData = await response.json();

    if(!response.ok){
        throw new Error(responseData.message);
    }

    return responseData;
}