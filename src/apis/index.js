import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

//  API  
export async function callApi({method, url, body, headers }) {
    let authHeader = localStorage.getItem("authorization")
        ? { authorization: localStorage.getItem("authorization") }
        : {};
    try {
        const result = await axios({
            url: url,
            method: method,
            headers: { ...authHeader },
            data: body,
            timeout: 120000,
        });
        return result;
    } catch (error) {
        // throw error;
        if (error && error.response) {
            return error.response;
        }
    }
}

