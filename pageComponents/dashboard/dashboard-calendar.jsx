'use client';

import Calendar from "react-calendar";

const DashboardCalendar = () => {

    return (
        <div className="max-sm:rounded-[1.5rem] rounded-[1.422rem] md:rounded-[1.735rem] xl:rounded-[1.897rem] 2xl:rounded-[2rem] 3xl:rounded-[2.667rem] 4xl:rounded-[3.556rem] border-(--ad-gray) border shadow-(--ad-box-shadow)">
            <div className="flex flex-col max-sm:p-[1.067rem] p-[1.067rem] md:p-[1.301rem] xl:p-[1.423rem] 2xl:p-[1.5rem] 3xl:p-[2rem] 4xl:p-[2.667rem] max-sm:gap-[0.889rem] gap-[0.889rem] md:gap-[1.084rem] xl:gap-[1.186rem] 2xl:gap-[1.25rem] 3xl:gap-[1.667rem] 4xl:gap-[2.222rem]">
                <div className='font-bold leading-[1.33em] max-sm:text-[0.75rem] text-[0.622rem] md:text-[0.759rem] xl:text-[0.83rem] 2xl:text-[0.875rem] 3xl:text-[1.167rem] 4xl:text-[1.556rem]'>
                    Calendar
                </div>
                <div className="">
                    <Calendar
                        className={'max-sm:text-[0.867rem] text-[0.711rem] md:text-[0.867rem] xl:text-[0.949rem] 2xl:text-[1rem] 3xl:text-[1.333rem] 4xl:text-[1.778rem]'}
                        tileClassName={[
                            'aspect-square',
                            'max-sm:text-[0.542rem] text-[0.444rem] md:text-[0.542rem] xl:text-[0.593rem] 2xl:text-[0.625rem] 3xl:text-[0.833rem] 4xl:text-[1.111rem]',
                        ].join(' ')}
                    />
                </div>
            </div>
        </div>
    );
};

export default DashboardCalendar;