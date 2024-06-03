import { AuthProvider } from "react-admin";

export const authProvider: AuthProvider = {
    login: ({ username }) => {
        localStorage.setItem("username", username);
        return Promise.resolve();
    },
    logout: () => {
        localStorage.removeItem("username");
        return Promise.resolve();
    },
    checkError: ({ status }: { status: number }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem("username");
            return Promise.reject(new Error());
        }
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem("username") ? Promise.resolve() : Promise.reject(new Error());
    },
    getPermissions: () => Promise.resolve(),
};
