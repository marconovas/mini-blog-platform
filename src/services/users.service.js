const API_URL = "http://localhost:3000"

export async function getUserById(id) {
    const response = await fetch(`${API_URL}/users/${id}`)

    const data = await response.json();

    if(!response.ok) {
        throw new Error(data.message);
    }

    return data;
}

