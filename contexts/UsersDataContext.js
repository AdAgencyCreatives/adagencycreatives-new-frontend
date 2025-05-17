"use client";

import { api } from "contexts/api";

export const getUserById = async (id) => {
    try {
        const response = await api.get("/users/" + id);
        return response.data.data[0];
    } catch (error) { }
};
