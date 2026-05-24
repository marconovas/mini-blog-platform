
const API_URL = "http://localhost:3000/posts";

export async function getPosts() {
    const res = await fetch(API_URL);

    if(!res.ok){
        throw new Error(res.message);
    }

    return res.json();
}

export async function getPostById (id) {
    const res = await fetch(`${API_URL}/${id}`);

    if(!res.ok){
        const errorData = await res.json();

        throw new Error(errorData.message);
    }

    return res.json();
}

export async function createPost(title, content) {

    const res = await fetch(API_URL,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            content
        })
    });

    if(!res.ok){
        const errorData = await res.json();

        throw new Error(errorData.message);
    }

    return res.json();
}

export async function editPost(id, title, content) {
    const res  = await fetch(`${API_URL}/${id}`,{
        method: "PUT",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify({
            title,
            content
        })
    })

    if(!res.ok){
        const errorData = await res.json();

        throw new Error(errorData.message);
    }

    return res.json();
}

export async function deletePost(id) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })

    if(!res.ok){
        const errorData = await res.json();

        throw new Error(errorData.message);
    }

    return res.json();
}

//COMMENTS
export async function commentsbyPost(id) {
    const res = await fetch(`${API_URL}`/`${id}/comments`);

    if(!res.ok){
        const errorData = res.json();

        throw new Error(errorData.message);
    }

    return res.json();
}
