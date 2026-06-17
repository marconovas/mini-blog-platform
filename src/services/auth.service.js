
const API_URL = `${import.meta.env.VITE_API_URL}/auth`

export async function userRegister(name, email, password) {
    const userData = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    });

    const data = await userData.json();

    console.log(data);

    if(!userData.ok){
        throw new Error(
            data.message || data.errors?.[0]?.msg || "Something went wrong"
        );
    }

    return data;
}

export async function userLogIn(email, password) {
    const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    
    const data = await res.json();
    
    if(!res.ok){
        throw new Error(
            data.message || data.errors?.[0]?.msg || "Something went wrong"
        );
    }

    return data;
}