import axios from "axios";
import httpStatus from "http-status";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import server from "../environment";

export const AuthContext = createContext({});

const client = axios.create({
baseURL: 'http://localhost:8000/api/v1/users'
});

export const AuthProvider = ({ children }) => {

    // 🔴 Removed useContext inside same context file — not needed
    // const authContext = useContext(AuthContext);

    // ✅ initialize with empty object
    const [userData, setUserData] = useState({});

    const router = useNavigate();

    const handleRegister = async (name, username, password) => {
        try {
            let request = await client.post("/register", {
                name: name,
                username: username,
                password: password
            });

            if (request.status === httpStatus.CREATED) {
                return request.data.message;
            }
        } catch (err) {
            throw err;
        }
    };

const handleLogin = async (username, password) => {
try {
const request = await client.post("/login", {
username: username,
password: password
});

console.log("Login response:", request);

if (request.status === httpStatus.OK && request.data.token) {
  localStorage.setItem("token", request.data.token);
  console.log("Token stored in localStorage:", request.data.token);
  router("/home");
} else {
  console.error("Token not received.");
}

        } catch (err) {
            console.error("Login error:", err);
            throw err;
        }
    };

    const getHistoryOfUser = async () => {
        try {
            let request = await client.get("/get_all_activity", {
                params: {
                    token: localStorage.getItem("token")
                }
            });
            return request.data;
        } catch (err) {
            throw err;
        }
    };

    const addToUserHistory = async (meetingCode) => {
        try {
            let request = await client.post("/add_to_activity", {
                token: localStorage.getItem("token"),
                meeting_code: meetingCode
            });
            return request;
        } catch (e) {
            throw e;
        }
    };

    const data = {
        userData,
        setUserData,
        addToUserHistory,
        getHistoryOfUser,
        handleRegister,
        handleLogin
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};
