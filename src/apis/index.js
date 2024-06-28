import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

//  PostAPI  //
export async function callPostApi({ url, body, headers }) {
    let authHeader = localStorage.getItem("authorization")
        ? { authorization: localStorage.getItem("authorization") }
        : {};
    try {
        const result = await axios({
            url: url,
            method: "POST",
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

//  GETAPI  //
export async function callGetApi({ url, body, headers }) {
    let authHeader = localStorage.getItem("authorization")
        ? { authorization: localStorage.getItem("authorization") }
        : {};
    try {
        const result = await axios({
            url: url,
            method: "GET",
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

//  PUTAPI  //
export async function callPutApi({ url, body, headers }) {
    let authHeader = localStorage.getItem("authorization")
        ? { authorization: localStorage.getItem("authorization") }
        : {};
    try {
        const result = await axios({
            url: url,
            method: "PUT",
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

// DELETEAPI //
export async function callDeleteApi({ url, body, headers }) {
    let authHeader = localStorage.getItem("authorization")
        ? { authorization: localStorage.getItem("authorization") }
        : {};
    try {
        const result = await axios({
            url: url,
            method: "DELETE",
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
