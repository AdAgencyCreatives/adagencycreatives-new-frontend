'use client';

import { use, useContext, useEffect } from "react";
import { Context as FaqsContext } from "contexts/FaqsContext";

const useDirectoryFaqs = () => {

    const {
        state: { directory_faqs, directory_nextPage, directory_loading },
        getDirectoryFaqs, loadDirectoryFaqs, searchDirectoryFaqsAdvanced
    } = useContext(FaqsContext);


    useEffect(() => {
        if (!directory_faqs) {
            getDirectoryFaqs();
        }
    }, [directory_faqs, getDirectoryFaqs]);

    let directoryFaqs = directory_faqs?.map(item => {
        return {
            title: item?.title || 'TITLE',
            content: item?.description || 'DESCRIPTION',
            order: item?.order || 0,
            item: item,
        };
    });

    const loadMoreDirectoryFaqs = () => {
        if (directory_nextPage === null || directory_loading) return;
        loadDirectoryFaqs(directory_nextPage);
    };

    return {
        directoryFaqs, directory_nextPage, directory_loading, getDirectoryFaqs, loadMoreDirectoryFaqs, searchDirectoryFaqsAdvanced
    };
}

export default useDirectoryFaqs;