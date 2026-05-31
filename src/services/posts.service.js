const API_URL = "http://localhost:3000/posts";


export async function getPosts() {
    const res = await fetch(API_URL);
    
    const data = await res.json();
    
    if(!res.ok){
        throw new Error(data.message);
    }
    
    return data;
}

export async function getPostById (id) {
    const res = await fetch(`${API_URL}/${id}`);
    
    const data = await res.json();
    
    if(!res.ok){
        throw new Error(data.message);
    }

    return data;
}

export async function createPost(title, content, token) {

    const res = await fetch(API_URL,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            title,
            content
        })
    });

    const data = await res.json();

    if(!res.ok){
        throw new Error(data.message);
    }

    return data;
}

export async function editPost(id, title, content, token) {
    const res  = await fetch(`${API_URL}/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type" : "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            title,
            content
        })
    })

    const data = await res.json();

    if(!res.ok){
        throw new Error(data.message);
    }

    return data;
}

export async function deletePost(id) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })

    const data = await res.json();

    if(!res.ok){
        throw new Error(data.message);
    }

    return data;
}

//COMMENTS
export async function commentsByPost(id) {
    const res = await fetch(`${API_URL}/${id}/comments`);

    const data = await res.json();

    if(!res.ok){
        throw new Error(data.message);
    }

    return data;
}
