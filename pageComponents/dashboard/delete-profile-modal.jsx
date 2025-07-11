'use client';

import CommonModal from "components/CommonModal";
import PasswordInput from "components/PasswordInput";
import useHash from "hooks/useHash";
import { useContext, useEffect, useState } from "react";
import { Context as AuthContext } from "contexts/AuthContext";
import { Context as AnimatedAlertContext } from "contexts/AnimatedAlertContext";
import TailwindCircularLoader from "components/TailwindCircularLoader";
import ConfirmModal from "components/ConfirmModal";
import { useRouter } from "next/navigation";

const DeleteProfileModal = () => {

    const DEFAULT_MESSAGE_DATA = { type: 'none', message: '' };

    const [canValidate, setCanValidate] = useState(false);
    const [messageData, setMessageData] = useState(DEFAULT_MESSAGE_DATA);
    const [password, setPassword] = useState('');
    const [passwordHasFocus, setPasswordHasFocus] = useState(true);
    const [openDeleteProfileModal, setOpenDeleteProfileModal] = useState(false);
    const [openConfirmModal, setOpenConfirmModal] = useState(false);

    const router = useRouter();
    const { currentHash, setHash } = useHash();

    const { showAlert } = useContext(AnimatedAlertContext);
    const { state: { formSubmit, user }, confirmPassword, deleteProfile } = useContext(AuthContext);

    const onKeyDown = (e) => {
        if (e.key == "Enter") {
            onConfirmDeleteProfile();
        }
    };

    const onConfirmDeleteProfile = () => {
        if (formValidated()) {
            confirmPassword({ password: password }, (data, error) => {
                if (data) {
                    setMessageData({ type: 'success', message: 'Password Confirmed' });
                    setOpenConfirmModal(true);
                } else {
                    setMessageData({ type: 'error', message: 'Invalid Password' });
                    setPasswordHasFocus(false);
                    setPasswordHasFocus(true);
                }
            });
        }
    };

    const formValidated = () => {
        setMessageData(DEFAULT_MESSAGE_DATA);
        setPasswordHasFocus(false);
        if (!(password?.length > 0)) {
            setMessageData({ type: 'error', message: 'Password Empty' });
            setPasswordHasFocus(true);
            return false;
        }
        return true;
    };

    const resetForm = () => {
        setMessageData(DEFAULT_MESSAGE_DATA);
        setPassword('');
        setCanValidate(true);
    };

    const onCancelDeleteProfile = () => {
        resetForm();
        setHash('');
        setOpenDeleteProfileModal(false);
    };

    useEffect(() => {
        if (canValidate) {
            setMessageData(DEFAULT_MESSAGE_DATA);
            if (!(password?.length > 0)) {
                setMessageData({ type: 'error', message: 'Password Empty' });
            }
        }
    }, [password]);

    useEffect(() => {
        if (user && currentHash?.length > 0 && currentHash == "delete-profile") {
            resetForm();
            setOpenDeleteProfileModal(true);
        }
    }, [currentHash, user]);


    return (
        <CommonModal
            title={<>Delete Profile</>}
            subTitle={<>Are you sure you want to delete your profile?<br />This can not be undone.</>}
            openModal={openDeleteProfileModal}
            setOpenModal={setOpenDeleteProfileModal}
            onCancel={onCancelDeleteProfile}
            onConfirm={onConfirmDeleteProfile}
            autoDismiss={false}
            className="relative"
            innerClassName="max-w-max!"
        >
            <div className="flex flex-col max-sm:gap-[0.867rem] gap-[0.711rem] md:gap-[0.867rem] xl:gap-[0.949rem] 2xl:gap-[1rem] 3xl:gap-[1.333rem] 4xl:gap-[1.778rem]">
                <div className="">
                    <div className="font-bold leading-none max-sm:text-[0.759rem] text-[0.622rem] md:text-[0.759rem] xl:text-[0.83rem] 2xl:text-[0.875rem] 3xl:text-[1.167rem] 4xl:text-[1.556rem]">
                        Enter your Login Password
                        <span className="text-red-500">*</span>
                    </div>
                    <PasswordInput input={password} setInput={setPassword} onKeyDown={(e) => onKeyDown(e)} hasFocus={passwordHasFocus} />
                </div>
                {(messageData.type != 'none') && (
                    <div className={[
                        'font-bold leading-none max-sm:text-[0.759rem] text-[0.622rem] md:text-[0.759rem] xl:text-[0.83rem] 2xl:text-[0.875rem] 3xl:text-[1.167rem] 4xl:text-[1.556rem]',
                        messageData.type == 'error' ? 'text-red-500' : 'text-green-500'
                    ].join(' ')}
                    >
                        {messageData.message}
                    </div>
                )}
            </div>
            {(formSubmit) && (
                <TailwindCircularLoader className="absolute left-0 top-0 w-full h-full max-sm:rounded-[1.735rem] rounded-[1.422rem] md:rounded-[1.735rem] xl:rounded-[1.897rem] 2xl:rounded-[2rem] 3xl:rounded-[2.667rem] 4xl:rounded-[3.556rem]" iconClassName="max-sm:w-[5.204rem]! w-[4.267rem]! md:w-[5.204rem]! xl:w-[5.692rem]! 2xl:w-[6rem]! 3xl:w-[8rem]! 4xl:w-[10.667rem]!" />
            )}
            <ConfirmModal
                openModal={openConfirmModal}
                setOpenModal={setOpenConfirmModal}
                title="Confirm Delete Profile?"
                message="Are you sure you want to delete your profile?"
                onConfirm={() => {
                    deleteProfile(user.uuid, () => {
                        showAlert("Profile Deleted Successfully", () => {
                            resetForm();
                            setHash('');
                            setOpenDeleteProfileModal(false);
                            router.push("/sign-out");
                        });
                    });
                }}
                innerClassName='w-[100%]!'
            />
        </CommonModal>
    );
};
export default DeleteProfileModal;