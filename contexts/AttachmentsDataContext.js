"use client";

import { api } from "contexts/api";

export const getAttachments = async (user_id) => {
    try {
        const response = await api.get("/attachments?sort=-created_at&filter[user_id]=" + user_id);
        return response.data.data;
    } catch (error) {
    }
    return null;
};

export const saveAttachment = async (data, progressHandler) => {
    try {
        const response = await api.post("/attachments", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress: progressHandler
        });
        return response.data.data;
    } catch (error) {
        return error;
    }
    return null;
};

export const updateAttachment = async (id) => {
    try {
        const response = await api.patch("/attachments/" + id);
        return response.data;
    } catch (error) {
    }
    return null;
};

export const deleteAttachment = async (id) => {
    try {
        const response = await api.delete("/attachments/" + id);
        return response.data;
    } catch (error) {
    }
    return null;
};
