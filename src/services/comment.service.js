
const API_URL = "http://localhost:3000/comments"

export async function getComments() {
    const res = await fetch(API_URL);

    if(!res.ok){
        throw new Error(res.message);
    }

    return res.json();
}