"use client";

import { api } from "contexts/api";

export const notifyError = async (data) => {
    try {
        const response = await api.post("/notify-error", data);
        return response.data;
    } catch (error) { }
};
