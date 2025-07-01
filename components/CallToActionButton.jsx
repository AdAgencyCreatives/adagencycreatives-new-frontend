'use client';

import ActionLinkDiv from "./ActionLinkDiv";

const CallToActionButton = ({ href = '', onClick = (e) => { }, disabled = false, className = '', children }) => {
    return (
        <ActionLinkDiv
            href={disabled ? '' : href}
            className={`inline-block font-bold leading-none nowrap bg-black hover:bg-primary text-center text-primary hover:text-white! max-sm:text-[0.8rem] text-[0.8rem] md:text-[0.976rem] xl:text-[1.067rem] 2xl:text-[1.125rem] 3xl:text-[1.5rem] 4xl:text-[2rem] outline outline-primary hover:outline-white! max-sm:outline-[0.2rem] outline-[0.2rem] md:outline-[0.244rem] xl:outline-[0.267rem] 2xl:outline-[0.281rem] 3xl:outline-[0.375rem] 4xl:outline-[0.5rem] max-sm:px-[2.4rem] px-[2.4rem] md:px-[2.927rem] xl:px-[3.202rem] 2xl:px-[3.375rem] 3xl:px-[4.5rem] 4xl:px-[6rem] max-sm:py-[0.525rem] py-[0.525rem] md:py-[0.641rem] xl:py-[0.701rem] 2xl:py-[0.739rem] 3xl:py-[0.985rem] 4xl:py-[1.313rem] max-sm:rounded-[1.8rem] rounded-[1.8rem] md:rounded-[2.196rem] xl:rounded-[2.401rem] 2xl:rounded-[2.531rem] 3xl:rounded-[3.375rem] 4xl:rounded-[4.5rem] ${className}`}
            onClick={onClick}
        >
            {children}
        </ActionLinkDiv>
    );
}

export default CallToActionButton;