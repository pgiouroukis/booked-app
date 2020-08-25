async function api(endpoint = "/", reqMethod = "get", data = {}) {
    try {
        
        var reqData = {
            method: reqMethod,
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }
        if (reqMethod === "POST") reqData["body"] = JSON.stringify(data)

        const response = await fetch( "https://pgiouroukis.semantic.gr:9001" + endpoint, reqData)
        
        return response.json()

    } catch(error) {
        return error;
    }
}


export default api;