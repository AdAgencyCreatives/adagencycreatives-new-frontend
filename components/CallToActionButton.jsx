import LinkOrDiv from "./LinkOrDiv";

const CallToActionButton = ({ href = '', onClick = (e) => { }, disabled = false, className = '', children }) => {
    return (
        <LinkOrDiv
            href={disabled ? '' : href}
            className={`inline-block font-bold leading-[1.33em] text-brand-yellow hover:text-white max-sm:text-[0.22rem] text-[0.6rem] md:text-[0.732rem] xl:text-[0.8rem] 2xl:text-[0.844rem] 3xl:text-[1.125rem] 4xl:text-[1.5rem] outline outline-brand-yellow max-sm:outline-[0.055rem] outline-[0.15rem] md:outline-[0.183rem] xl:outline-[0.2rem] 2xl:outline-[0.211rem] 3xl:outline-[0.281rem] 4xl:outline-[0.375rem] max-sm:px-[0.879rem] px-[2.4rem] md:px-[2.927rem] xl:px-[3.202rem] 2xl:px-[3.375rem] 3xl:px-[4.5rem] 4xl:px-[6rem] max-sm:py-[0.192rem] py-[0.525rem] md:py-[0.641rem] xl:py-[0.701rem] 2xl:py-[0.739rem] 3xl:py-[0.985rem] 4xl:py-[1.313rem] max-sm:rounded-[0.659rem] rounded-[1.8rem] md:rounded-[2.196rem] xl:rounded-[2.401rem] 2xl:rounded-[2.531rem] 3xl:rounded-[3.375rem] 4xl:rounded-[4.5rem] ${className}`}
            onClick={onClick}
        >
            {children}
        </LinkOrDiv>
    );
}

export default CallToActionButton;