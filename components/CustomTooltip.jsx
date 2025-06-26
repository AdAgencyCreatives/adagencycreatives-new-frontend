'use client';

import React from 'react';
import { Tooltip } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';

// Styled arrow component with larger size
const StyledArrow = styled('span')(({ theme }) => ({
    fontSize: '1.5em',
    width: '1.5em',
    height: '1.5em',
    '&::before': {
        border: '1px solid #6E6E6E',
        transform: 'rotate(45deg) scale(1.2)',
        backgroundColor: '#6E6E6E',
        boxSizing: 'border-box',
    },
}));

const CustomTooltip = ({ title, className = '', ...props }) => {

    const theme = useTheme();

    return (
        <Tooltip
            title={
                <div
                    className={[
                        'text-white font-bold leading-[1.33em] max-sm:p-[0.178rem] p-[0.178rem] md:p-[0.217rem] xl:p-[0.237rem] 2xl:p-[0.25rem] 3xl:p-[0.333rem] 4xl:p-[0.444rem] max-sm:text-[0.444rem] text-[0.444rem] md:text-[0.542rem] xl:text-[0.593rem] 2xl:text-[0.625rem] 3xl:text-[0.833rem] 4xl:text-[1.111rem]',
                        className,
                    ].join(' ')}
                >{title}</div>
            }
            {...props}
            slotProps={{
                popper: {
                    modifiers: [
                        {
                            name: 'arrow',
                            enabled: true,
                            options: {
                                padding: 12, // Space for larger arrow
                            },
                        },
                    ],
                },
                tooltip: {
                    style: {
                        backgroundColor: '#000000',
                        color: '#ffffff',
                        border: '0.125rem solid #6E6E6E',
                        borderRadius: '0.5rem',
                        boxShadow: theme.shadows[1],
                        fontSize: '1em',
                    }
                },
                arrow: {
                    element: <StyledArrow />,
                }
            }}
        />
    );
};

export default CustomTooltip;