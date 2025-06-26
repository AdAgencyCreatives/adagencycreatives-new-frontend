const DashboardRoundedContainer = ({className='', children=<></>}) => {
    return (
        <div className={[
            'flex flex-col w-full outline outline-[#1F242F]',
            'max-sm:p-[0.889rem] p-[0.889rem] md:p-[1.084rem] xl:p-[1.186rem] 2xl:p-[1.25rem] 3xl:p-[1.667rem] 4xl:p-[2.222rem]',
            'max-sm:gap-[0.533rem] gap-[0.533rem] md:gap-[0.651rem] xl:gap-[0.711rem] 2xl:gap-[0.75rem] 3xl:gap-[1rem] 4xl:gap-[1.333rem]',
            'max-sm:rounded-[0.533rem] rounded-[0.533rem] md:rounded-[0.651rem] xl:rounded-[0.711rem] 2xl:rounded-[0.75rem] 3xl:rounded-[1rem] 4xl:rounded-[1.333rem]',
            'max-sm:outline-[0.112rem] outline-[0.112rem] md:outline-[0.112rem] xl:outline-[0.112rem] 2xl:outline-[0.112rem] 3xl:outline-[0.112rem] 4xl:outline-[0.112rem]',
            className,
        ].join(' ')}>{children}</div>
    );
};
export default DashboardRoundedContainer;