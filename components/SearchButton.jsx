'use client';

import ActionLinkDiv from "./ActionLinkDiv";

const SearchButton = ({ href = '', onClick = (e) => { }, disabled = false, className = '', children }) => {
    return (
        <ActionLinkDiv
            prevent={true}
            className={[
                'inline-block font-bold leading-none cursor-pointer nowrap bg-black hover:bg-primary text-center text-white hover:text-white! outline outline-white hover:outline-primary ',
                'max-sm:text-[0.569rem] text-[0.466rem] md:text-[0.569rem] xl:text-[0.622rem] 2xl:text-[0.656rem] 3xl:text-[0.875rem] 4xl:text-[1.166rem]',
                'max-sm:outline-[0.108rem] outline-[0.089rem] md:outline-[0.108rem] xl:outline-[0.119rem] 2xl:outline-[0.125rem] 3xl:outline-[0.167rem] 4xl:outline-[0.222rem]',
                'max-sm:px-[2.4rem] px-[2.4rem] md:px-[2.927rem] xl:px-[3.202rem] 2xl:px-[3.375rem] 3xl:px-[4.5rem] 4xl:px-[6rem]',
                'max-sm:py-[0.525rem] py-[0.525rem] md:py-[0.641rem] xl:py-[0.701rem] 2xl:py-[0.739rem] 3xl:py-[0.985rem] 4xl:py-[1.313rem]',
                'max-sm:rounded-[1.8rem] rounded-[1.8rem] md:rounded-[2.196rem] xl:rounded-[2.401rem] 2xl:rounded-[2.531rem] 3xl:rounded-[3.375rem] 4xl:rounded-[4.5rem]',
                className,
            ].join(' ')}
            onClick={onClick}
        >
            {children}
        </ActionLinkDiv>
    );
}

export default SearchButton;