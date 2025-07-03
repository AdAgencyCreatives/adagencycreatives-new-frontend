'use client';

import HelpIcon from "icons/HelpIcon";
import { IoCloseCircleOutline } from "react-icons/io5";

const SearchInput = ({ className = '', input = '', setInput = (value) => { }, placeholder = '', onKeyDown = (e) => { }, name = '', id = '', ref = null, onClearClick = (e) => { }, onHelpClick = (e) => { } }) => {
    return (
        <div className={[
            'flex w-full relative',
        ].join(' ')}
        >
            <input
                type="text"
                name={name}
                id={id}
                ref={ref}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={placeholder}
                className={[
                    'flex w-full border-b-1 border-white outline-none',
                    'max-sm:text-[0.759rem] text-[0.622rem] md:text-[0.759rem] xl:text-[0.83rem] 2xl:text-[0.875rem] 3xl:text-[1.167rem] 4xl:text-[1.556rem]',
                    'max-sm:py-[0.434rem] py-[0.356rem] md:py-[0.434rem] xl:py-[0.474rem] 2xl:py-[0.5rem] 3xl:py-[0.667rem] 4xl:py-[0.889rem]',
                ].join(' ')}
                onKeyDown={onKeyDown}
            />
            <div className="absolute right-0 bottom-0 flex justify-center items-center max-sm:gap-[0.217rem] gap-[0.178rem] md:gap-[0.217rem] xl:gap-[0.237rem] 2xl:gap-[0.25rem] 3xl:gap-[0.333rem] 4xl:gap-[0.444rem]">
                {input?.length > 0 && (
                    <div className="cursor-pointer" onClick={(e) => onClearClick(e)}>
                        <IoCloseCircleOutline
                            className={[
                                'text-white hover:text-primary',
                                "max-sm:w-[1.301rem] w-[1.067rem] md:w-[1.301rem] xl:w-[1.423rem] 2xl:w-[1.5rem] 3xl:w-[2rem] 4xl:w-[2.667rem]",
                                "max-sm:h-[1.301rem] h-[1.067rem] md:h-[1.301rem] xl:h-[1.423rem] 2xl:h-[1.5rem] 3xl:h-[2rem] 4xl:h-[2.667rem]",
                                "max-sm:mb-[0.217rem] mb-[0.178rem] md:mb-[0.217rem] xl:mb-[0.237rem] 2xl:mb-[0.25rem] 3xl:mb-[0.333rem] 4xl:mb-[0.444rem]",
                            ].join(' ')} />
                    </div>
                )}
                <div className="cursor-pointer" onClick={(e) => onHelpClick(e)}>
                    <HelpIcon className='text-white hover:text-primary' />
                </div>
            </div>
        </div>
    );
}

export default SearchInput;