
const API_URL = "http://localhost:3000/comments"

export async function getComments() {
    const res = await fetch(API_URL);

    if(!res.ok){
        throw new Error(res.message);
    }

    return res.json();
}


export async function deleteComment(id, token) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type" : "application/json",
            Authorization: `Bearer ${token}` 
        }
    });

    const data = await res.json;

    if(!res.ok){
        throw new Error(data.message);
    }

    return data;
}