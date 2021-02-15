import axios from "axios";
import { Alert } from '@material-ui/lab';
import React from "react";

const API_URL = "https://tgsms.herokuapp.com/api";

const register = (firstName, lastName, phoneNumber, password) => {
    return axios.post(API_URL + "/add", {
        firstName,
        lastName,
        phoneNumber,
        password,
    });
};

const activate = (firstName, lastName, phoneNumber, password, code) => {
    return axios.post(API_URL + "/active", {
        firstName,
        lastName,
        phoneNumber,
        password,
        code,
    });
};

const login = (phoneNumber, password) => {
    return axios
        .post(API_URL + "/login", {
            phoneNumber,
            password,
        })
        .then((response) => {
            if (response.data == "xato"){
                return response.data;
            } else {
                localStorage.setItem("Bearer", JSON.stringify(response.data.body.accessToken));
                return response.data;
            }

        }
        );
};

const logout = () => {
    localStorage.removeItem("Bearer");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("Bearer"));
};

export default {
    register,
    login,
    logout,
    getCurrentUser,
    activate,
};


// export default function authHeader() {
//     const user = JSON.parse(localStorage.getItem('Bearer'));
//
//     if (user && user.accessToken) {
//         return { Authorization: 'Bearer ' + user.accessToken };
//     } else {
//         return {};
//     }
// }

