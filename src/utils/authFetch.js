
export async function authFetch(url, options = {}) {
    const token = localStorage.getItem("token");

    const res = await fetch(url, {
        ...options,

        headers: {
            ...options.headers,
            Authorization: `Bearer ${token}`
        }
    });

    if(res.status === 401 || res.status === 403){

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        window.location.href = "/auth/login";

        throw new Error("Session Expired");
    }

    return res;
}