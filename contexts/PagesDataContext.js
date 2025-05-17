"use client";

import { api } from "contexts/api";

export const getPageData = async (page) => {
    try {
        const response = await api.get("/pages?filter[page]=" + page);
        localStorage.setItem(page, JSON.stringify(response.data));
        return response.data;
    } catch (error) {
    }
    return null;
};
