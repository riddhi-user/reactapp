import axios from "axios";

export function GetApi(path) {
    return new Promise((resolve, reject) => {
        let tokenData = localStorage.getItem("user-token") ? localStorage.getItem("user-token") : "";
        let headers = { Authorization: tokenData, "Content-Type": "application/json" };
        axios
            .get(path, { headers: headers })
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                if (err.response.status === 401) {
                    localStorage.removeItem("user-token");
                    localStorage.removeItem("user_id");
                    window.location.href = "http://localhost:3015/login";
                }
                reject(err.response);
            });
    });
}

export function PostApi(path, body) {
    return new Promise((resolve, reject) => {
        let tokenData = localStorage.getItem("user-token") ? localStorage.getItem("user-token") : "";
        let headers = { Authorization: tokenData, "Content-Type": "application/json" };
        axios
            .post(path, body, { headers: headers })
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                if (err.response.status === 401) {
                    localStorage.removeItem("user-token");
                    localStorage.removeItem("user_id");
                    window.location.href = "http://localhost:3015/login";
                }
                reject(err.response);
            });
    });
}
