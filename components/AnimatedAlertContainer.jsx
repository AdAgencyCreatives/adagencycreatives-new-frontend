import { useState, useEffect, useContext, use } from "react";
import { Context as SiteContext } from "contexts/SiteContext";
import { IoClose } from "react-icons/io5";

const AnimatedAlertContainer = ({ open = false, setOpen = (value) => { }, title, onClose = () => { }, children }) => {
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);

    const baseClasses = [
        "bg-black text-white",
        "max-sm:w-[75%] md:min-w-[500px] md:max-w-[40%] flex items-start p-4 transition-opacity duration-300 outline outline-[#6E6E6E] rounded-[36px]",
        "max-sm:rounded-[0.5rem] rounded-[0.8rem] md:rounded-[0.976rem] xl:rounded-[1.067rem] 2xl:rounded-[1.125rem] 3xl:rounded-[1.5rem] 4xl:rounded-[2rem]",
        "max-sm:p-[0.25rem] p-[0.45rem] md:p-[0.549rem] xl:p-[0.6rem] 2xl:p-[0.633rem] 3xl:p-[0.844rem] 4xl:p-[1.125rem]"
    ].join(' ');

    const handleDismiss = () => {

        setTimeout(() => {
            onClose();
            setOpen(false);
        }, 300);
    };

    useEffect(() => {
        setIsAnimatingOut(false);
    }, [open]);

    if (!open) return <></>;

    return (
        <div className="fixed left-0 top-0 flex flex-row justify-center items-center min-w-screen min-h-screen z-999999">
            <div className="fixed left-0 top-0 flex flex-row justify-center items-center w-screen h-screen z-0 bg-gray/30 backdrop-blur-[5px]"></div>
            <div className="flex flex-row justify-center items-start w-screen h-screen z-1">
                <div
                    className={`relative ${baseClasses} ${isAnimatingOut ? "opacity-0" : "opacity-100"
                        }`}
                    role="alert"
                >
                    <div className="flex-grow max-sm:mt-[1.067rem] mt-[1.067rem] md:mt-[1.301rem] xl:mt-[1.423rem] 2xl:mt-[1.5rem] 3xl:mt-[2rem] 4xl:mt-[2.667rem] max-sm:mb-[1.067rem] mb-[1.067rem] md:mb-[1.301rem] xl:mb-[1.423rem] 2xl:mb-[1.5rem] 3xl:mb-[2rem] 4xl:mb-[2.667rem]">
                        {title && <div className="text-center text-primary font-bold max-sm:text-[1.067rem] text-[1.067rem] md:text-[1.301rem] xl:text-[1.423rem] 2xl:text-[1.5rem] 3xl:text-[2rem] 4xl:text-[2.667rem] max-sm:mb-[1.25rem] mb-[1.422rem] md:mb-[1.735rem] xl:mb-[1.897rem] 2xl:mb-[2rem] 3xl:mb-[2.667rem] 4xl:mb-[3.556rem]">{title}</div>}
                        <div className="flex w-full font-bold max-sm:text-[0.759rem] text-[0.8rem] md:text-[0.976rem] xl:text-[1.067rem] 2xl:text-[1.125rem] 3xl:text-[1.5rem] 4xl:text-[2rem]">
                            {children}
                        </div>
                    </div>
                    <button
                        onClick={handleDismiss}
                        className="absolute max-sm:right-[0.434rem] right-[0.356rem] md:right-[0.434rem] xl:right-[0.474rem] 2xl:right-[0.5rem] 3xl:right-[0.667rem] 4xl:right-[0.889rem] max-sm:top-[0.434rem] top-[0.356rem] md:top-[0.434rem] xl:top-[0.474rem] 2xl:top-[0.5rem] 3xl:top-[0.667rem] 4xl:top-[0.889rem] text-current hover:text-primary max-sm:text-[1.25rem] text-[1.6rem] md:text-[1.952rem] xl:text-[2.134rem] 2xl:text-[2.25rem] 3xl:text-[3rem] 4xl:text-[4rem]"
                        aria-label="Close"
                    >
                        <IoClose />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AnimatedAlertContainer;
