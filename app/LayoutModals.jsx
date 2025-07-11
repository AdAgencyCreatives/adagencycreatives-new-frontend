"use client";

import ChangePasswordModal from "pageComponents/dashboard/change-password-modal";
import DeleteProfileModal from "pageComponents/dashboard/delete-profile-modal";

export default function LayoutModals() {
    
    return (
        <>
            <ChangePasswordModal />
            <DeleteProfileModal />
        </>
    );
}
