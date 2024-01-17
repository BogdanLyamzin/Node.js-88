import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const setToken = token => {
    if (token) {
        return instance.defaults.headers.authorization = `Bearer ${token}`;
    }
    instance.defaults.headers.authorization = "";
}

instance.interceptors.response.use(
    response => response,
    async error => {
        if (error.response.status === 401 && !error.config._retry) {
            error.config._retry = true;
            const refreshToken = localStorage.getItem("refreshToken");
            const { data } = await instance.post("/auth/refresh", { refreshToken });
            setToken(data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);
            return instance(error.config);
        }
        return Promise.reject(error);
    }
);

export const register = async (data) => {
    const { data: result } = await instance.post("/auth/register", data);
    setToken(result.token);
    return result;
}

export const login = async (data) => {
    const { data: result } = await instance.post("/auth/login", data);
    setToken(result.accessToken);
    localStorage.setItem("refreshToken", result.refreshToken)
    return result;
}

export const logout = async () => {
    const { data } = await instance.post("/auth/logout");
    setToken();
    return data;
}

export const getCurrent = async (token) => {
    try {
        setToken(token);
        const { data } = await instance.get("/auth/current");
        return data;
    }
    catch (error) {
        setToken();
        throw error;
    }
}

export default instance;