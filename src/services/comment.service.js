import { authFetch } from "../utils/authFetch";

const API_URL = "http://localhost:3000/comments"

export async function getComments() {
    const res = await fetch(API_URL);

    if(!res.ok){
        throw new Error(res.message);
    }

    return res.json();
}


export async function deleteComment(id) {
    const res = await authFetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    const data = await res.json;

    if(!res.ok){
        throw new Error(data.message);
    }

    return data;
}