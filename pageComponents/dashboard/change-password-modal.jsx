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

const ChangePasswordModal = () => {

    const DEFAULT_MESSAGE_DATA = { type: 'none', message: '' };

    const [canValidate, setCanValidate] = useState(false);
    const [messageData, setMessageData] = useState(DEFAULT_MESSAGE_DATA);
    const [oldPassword, setOldPassword] = useState('');
    const [oldPasswordHasFocus, setOldPasswordHasFocus] = useState(true);
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordHasFocus, setNewPasswordHasFocus] = useState(false);
    const [retypePassword, setRetypePassword] = useState('');
    const [retypePasswordHasFocus, setRetypePasswordHasFocus] = useState(false);
    const [openChangePasswordModal, setOpenChangePasswordModal] = useState(false);
    const [openConfirmModal, setOpenConfirmModal] = useState(false);

    const router = useRouter();
    const { currentHash, setHash } = useHash();

    const { showAlert } = useContext(AnimatedAlertContext);
    const { state: { formSubmit, user }, confirmPassword, updatePassword } = useContext(AuthContext);

    const onKeyDown = (e) => {
        if (e.key == "Enter") {
            onConfirmChangePassword();
        }
    };

    const onConfirmChangePassword = () => {
        if (formValidated()) {
            confirmPassword({ password: oldPassword }, (data, error) => {
                if (data) {
                    setMessageData({ type: 'success', message: 'Old Password Confirmed' });
                    setOpenConfirmModal(true);
                } else {
                    setMessageData({ type: 'error', message: 'Invalid Old Password' });
                    resetFocus();
                    setOldPasswordHasFocus(true);
                }
            });
        }
    };

    const formValidated = () => {
        setMessageData(DEFAULT_MESSAGE_DATA);
        resetFocus();

        if (!(oldPassword?.length > 0)) {
            setMessageData({ type: 'error', message: 'Old Password Empty' });
            setOldPasswordHasFocus(true);
            return false;
        }
        if (!(newPassword?.length > 0)) {
            setMessageData({ type: 'error', message: 'New Password Empty' });
            setNewPasswordHasFocus(true);
            return false;
        }
        if (!(retypePassword?.length > 0)) {
            setMessageData({ type: 'error', message: 'Re-type Password Empty' });
            setRetypePasswordHasFocus(true);
            return false;
        }
        if (oldPassword == newPassword) {
            setMessageData({ type: 'error', message: 'Old & New Passwords Must Not Match' });
            setNewPasswordHasFocus(true);
            return false;
        }
        if (retypePassword != newPassword) {
            setMessageData({ type: 'error', message: 'Re-type Password Not Matched' });
            setRetypePasswordHasFocus(true);
            return false;
        }
        return true;
    };

    const resetFocus = () => {
        setOldPasswordHasFocus(false);
        setNewPasswordHasFocus(false);
        setRetypePasswordHasFocus(false);
    };

    const resetForm = () => {
        setMessageData(DEFAULT_MESSAGE_DATA);
        setOldPassword('');
        setNewPassword('');
        setRetypePassword('');
        setCanValidate(true);
    };

    const onCancelChangePassword = () => {
        resetForm();
        setHash('');
        setOpenChangePasswordModal(false);
    };

    useEffect(() => {
        if (canValidate) {
            setMessageData(DEFAULT_MESSAGE_DATA);
            if (!(oldPassword?.length > 0)) {
                setMessageData({ type: 'error', message: 'Old Password Empty' });
            }
        }
    }, [oldPassword]);

    useEffect(() => {
        if (canValidate) {
            setMessageData(DEFAULT_MESSAGE_DATA);
            if (!(newPassword?.length > 0)) {
                setMessageData({ type: 'error', message: 'New Password Empty' });
            }
        }
    }, [newPassword]);

    useEffect(() => {
        if (canValidate) {
            setMessageData(DEFAULT_MESSAGE_DATA);
            if (!(retypePassword?.length > 0)) {
                setMessageData({ type: 'error', message: 'Re-type Password Empty' });
            }
        }
    }, [retypePassword]);

    useEffect(() => {
        if (user && currentHash?.length > 0 && currentHash == "change-password") {
            resetForm();
            setOpenChangePasswordModal(true);
        }
    }, [currentHash, user]);


    return (
        <CommonModal
            title={<>Change Password</>}
            subTitle={<>Are you sure you want to change your password?<br />This can not be undone.</>}
            openModal={openChangePasswordModal}
            setOpenModal={setOpenChangePasswordModal}
            onCancel={onCancelChangePassword}
            onConfirm={onConfirmChangePassword}
            autoDismiss={false}
            className="relative"
            innerClassName="max-w-max!"
        >
            <div className="flex flex-col max-sm:gap-[0.867rem] gap-[0.711rem] md:gap-[0.867rem] xl:gap-[0.949rem] 2xl:gap-[1rem] 3xl:gap-[1.333rem] 4xl:gap-[1.778rem]">
                <div className="">
                    <div className="font-bold leading-none max-sm:text-[0.759rem] text-[0.622rem] md:text-[0.759rem] xl:text-[0.83rem] 2xl:text-[0.875rem] 3xl:text-[1.167rem] 4xl:text-[1.556rem]">
                        Old Password
                        <span className="text-red-500">*</span>
                    </div>
                    <PasswordInput input={oldPassword} setInput={setOldPassword} onKeyDown={(e) => onKeyDown(e)} hasFocus={oldPasswordHasFocus} />
                </div>
                <div className="">
                    <div className="font-bold leading-none max-sm:text-[0.759rem] text-[0.622rem] md:text-[0.759rem] xl:text-[0.83rem] 2xl:text-[0.875rem] 3xl:text-[1.167rem] 4xl:text-[1.556rem]">
                        New Password
                        <span className="text-red-500">*</span>
                    </div>
                    <PasswordInput input={newPassword} setInput={setNewPassword} onKeyDown={(e) => onKeyDown(e)} hasFocus={newPasswordHasFocus} />
                </div>
                <div className="">
                    <div className="font-bold leading-none max-sm:text-[0.759rem] text-[0.622rem] md:text-[0.759rem] xl:text-[0.83rem] 2xl:text-[0.875rem] 3xl:text-[1.167rem] 4xl:text-[1.556rem]">
                        Re-type Password
                        <span className="text-red-500">*</span>
                    </div>
                    <PasswordInput input={retypePassword} setInput={setRetypePassword} onKeyDown={(e) => onKeyDown(e)} hasFocus={retypePasswordHasFocus} />
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
                title="Confirm Change Password?"
                message="Are you sure you want to change your password?"
                onConfirm={() => {
                    updatePassword({
                        old_password: oldPassword,
                        password: newPassword,
                        password_confirmation: retypePassword
                    }, () => {
                        showAlert(<>Password Changed Successfully<br />You'll be redirected to login again.</>, () => {
                            resetForm();
                            setHash('');
                            setOpenChangePasswordModal(false);
                            router.push("/sign-out");
                        });
                    });
                }}
                innerClassName='w-[100%]!'
            />
        </CommonModal>
    );
};
export default ChangePasswordModal;