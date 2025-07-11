'use client';

import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { IoClose } from 'react-icons/io5';
import CallToActionButton from './CallToActionButton';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

export default function CommonModal({ title = null, subTitle = null, children, className = '', innerClassName = '', openModal = false, setOpenModal = (value) => { }, onConfirm = () => { }, onCancel = () => { }, autoDismiss = true }) {
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('4xl');

    const handleConfirm = () => {
        onConfirm();
        autoDismiss && setOpenModal(false);
    };

    const handleClose = () => {
        onCancel();
        autoDismiss && setOpenModal(false);
    };

    return openModal && (
        <div className="fixed left-0 top-0 flex flex-row justify-center items-center min-w-screen min-h-screen z-999998">
            <div className="fixed left-0 top-0 flex flex-row justify-center items-center w-screen h-screen z-0 bg-gray/30 backdrop-blur-[5px]"></div>
            <Dialog
                open={openModal}
                onClose={handleClose}
                TransitionComponent={Transition}
                keepMounted
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                className='z-999998!'
            >
                <div className={[
                    "relative max-sm:w-full w-[50%] mx-auto bg-black text-white border border-gray-400",
                    "max-sm:p-[0.976rem] p-[0.8rem] md:p-[0.976rem] xl:p-[1.067rem] 2xl:p-[1.125rem] 3xl:p-[1.5rem] 4xl:p-[2rem]",
                    "max-sm:border-[0.135rem] border-[0.111rem] md:border-[0.135rem] xl:border-[0.148rem] 2xl:border-[0.156rem] 3xl:border-[0.208rem] 4xl:border-[0.277rem]",
                    "max-sm:rounded-[1.735rem] rounded-[1.422rem] md:rounded-[1.735rem] xl:rounded-[1.897rem] 2xl:rounded-[2rem] 3xl:rounded-[2.667rem] 4xl:rounded-[3.556rem]",
                    "max-sm:my-[7.806rem] my-[6.4rem] md:my-[7.806rem] xl:my-[8.538rem] 2xl:my-[9rem] 3xl:my-[12rem] 4xl:my-[16rem]",
                    innerClassName || '',
                ].join(' ')}
                >
                    <button
                        onClick={handleClose}
                        className={[
                            "absolute text-current hover:text-primary",
                            "max-sm:text-[1.25rem] text-[1.6rem] md:text-[1.952rem] xl:text-[2.134rem] 2xl:text-[2.25rem] 3xl:text-[3rem] 4xl:text-[4rem]",
                            "max-sm:top-[0.867rem] top-[0.711rem] md:top-[0.867rem] xl:top-[0.949rem] 2xl:top-[1rem] 3xl:top-[1.333rem] 4xl:top-[1.778rem]",
                            "max-sm:right-[0.867rem] right-[0.711rem] md:right-[0.867rem] xl:right-[0.949rem] 2xl:right-[1rem] 3xl:right-[1.333rem] 4xl:right-[1.778rem]",
                        ].join(' ')}
                        aria-label="Close"
                    >
                        <IoClose />
                    </button>
                    <div className="inner flex flex-col max-sm:gap-[1.735rem] gap-[1.422rem] md:gap-[1.735rem] xl:gap-[1.897rem] 2xl:gap-[2rem] 3xl:gap-[2.667rem] 4xl:gap-[3.556rem]">
                        <div className="flex flex-col max-sm:gap-[0.434rem] gap-[0.356rem] md:gap-[0.434rem] xl:gap-[0.474rem] 2xl:gap-[0.5rem] 3xl:gap-[0.667rem] 4xl:gap-[0.889rem]">
                            <div className="text-center text-primary font-bold max-sm:text-[1.067rem] text-[1.067rem] md:text-[1.301rem] xl:text-[1.423rem] 2xl:text-[1.5rem] 3xl:text-[2rem] 4xl:text-[2.667rem] max-sm:mt-[0.867rem]! mt-[0.711rem]! md:mt-[0.867rem]! xl:mt-[0.949rem]! 2xl:mt-[1rem]! 3xl:mt-[1.333rem]! 4xl:mt-[1.778rem]!">
                                {title || "Confirm?"}
                            </div>
                            {((subTitle ?? null)) && (
                                <div className="leading-[1.33em] text-center text-white max-sm:text-[0.759rem] text-[0.622rem] md:text-[0.759rem] xl:text-[0.83rem] 2xl:text-[0.875rem] 3xl:text-[1.167rem] 4xl:text-[1.556rem]">
                                    {subTitle}
                                </div>
                            )}
                        </div>
                        <div className="font-bold max-sm:text-[0.759rem] text-[0.8rem] md:text-[0.976rem] xl:text-[1.067rem] 2xl:text-[1.125rem] 3xl:text-[1.5rem] 4xl:text-[2rem]">
                            {children}
                        </div>
                        <div className="flex justify-end max-sm:gap-[0.867rem] gap-[0.711rem] md:gap-[0.867rem] xl:gap-[0.949rem] 2xl:gap-[1rem] 3xl:gap-[1.333rem] 4xl:gap-[1.778rem] max-sm:pt-[0.244rem] pt-[0.2rem] md:pt-[0.244rem] xl:pt-[0.267rem] 2xl:pt-[0.281rem] 3xl:pt-[0.375rem] 4xl:pt-[0.5rem]">
                            <CallToActionButton
                                className={[
                                    "uppercase font-bold outline-white! hover:outline-primary! text-white! hover:text-primary! max-w-max! ",
                                    "max-sm:px-[3.036rem]! px-[2.489rem]! md:px-[3.036rem]! xl:px-[3.32rem]! 2xl:px-[3.5rem]! 3xl:px-[4.667rem]! 4xl:px-[6.222rem]!",
                                    "max-sm:py-[0.759rem] py-[0.622rem] md:py-[0.759rem] xl:py-[0.83rem] 2xl:py-[0.875rem] 3xl:py-[1.167rem] 4xl:py-[1.556rem]",
                                    "max-sm:text-[0.5rem]! text-[0.444rem]! md:text-[0.542rem]! xl:text-[0.593rem]! 2xl:text-[0.625rem]! 3xl:text-[0.833rem]! 4xl:text-[1.111rem]!",
                                    "max-sm:outline-[0.133rem]! outline-[0.133rem]! md:outline-[0.133rem]! xl:outline-[0.133rem]! 2xl:outline-[0.141rem]! 3xl:outline-[0.188rem]! 4xl:outline-[0.25rem]!",
                                    "max-sm:rounded-[6.072rem]! rounded-[4.978rem]! md:rounded-[6.072rem]! xl:rounded-[6.64rem]! 2xl:rounded-[7rem]! 3xl:rounded-[9.333rem]! 4xl:rounded-[12.444rem]!",
                                ].join(' ')}
                                onClick={handleClose}
                            >
                                Cancel
                            </CallToActionButton>
                            <CallToActionButton
                                className={[
                                    "uppercase font-bold outline-white! hover:outline-primary! text-white! hover:text-primary! max-w-max! ",
                                    "max-sm:px-[3.036rem]! px-[2.489rem]! md:px-[3.036rem]! xl:px-[3.32rem]! 2xl:px-[3.5rem]! 3xl:px-[4.667rem]! 4xl:px-[6.222rem]!",
                                    "max-sm:py-[0.759rem] py-[0.622rem] md:py-[0.759rem] xl:py-[0.83rem] 2xl:py-[0.875rem] 3xl:py-[1.167rem] 4xl:py-[1.556rem]",
                                    "max-sm:text-[0.5rem]! text-[0.444rem]! md:text-[0.542rem]! xl:text-[0.593rem]! 2xl:text-[0.625rem]! 3xl:text-[0.833rem]! 4xl:text-[1.111rem]!",
                                    "max-sm:outline-[0.133rem]! outline-[0.133rem]! md:outline-[0.133rem]! xl:outline-[0.133rem]! 2xl:outline-[0.141rem]! 3xl:outline-[0.188rem]! 4xl:outline-[0.25rem]!",
                                    "max-sm:rounded-[6.072rem]! rounded-[4.978rem]! md:rounded-[6.072rem]! xl:rounded-[6.64rem]! 2xl:rounded-[7rem]! 3xl:rounded-[9.333rem]! 4xl:rounded-[12.444rem]!",
                                ].join(' ')}
                                onClick={handleConfirm}
                            >
                                Confirm
                            </CallToActionButton>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}