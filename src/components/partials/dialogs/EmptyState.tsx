import React, { useEffect, useState, useContext, CSSProperties } from "react"

interface IEmptyState {
    children: any,
    bgColor?: string,
    className?: string,
    style?: CSSProperties,
    noBound?: boolean
}

const EmptyState = (props: IEmptyState) => {

    const {
        children,
        bgColor = 'bg-prg-25',
        className = 'min-h-[200px]',
        style = {},
        noBound = false
    } = props;

    useEffect(() => {

    }, [])

    return (
        <>
            <div className={`${noBound ? '' : 'px-4 py-4'}`}>
                <div style={style} className={`w-full rounded-[10px] flex flex-col justify-center items-center ${className} ${bgColor.includes('bg') ? bgColor : ''}`}>
                    {children}
                </div>
            </div>

        </>
    )
};

export default EmptyState;
