"use client";

import { api } from "contexts/api";

export const getCreativeById = async (id) => {
    try {
        const response = await api.get("/creatives?filter[user_id]=" + id);
        return response.data.data[0];
    } catch (error) { }
};
