import React, { useEffect, useState, useContext } from "react"

interface IDivider {
    show?: boolean,
    bg?: string,
    padding?: {
        enable?: boolean,
        top?: string,
        bottom?: string
    }
}

const Divider = (props: IDivider) => {

    const {
        show = true,
        bg = 'bg-prg-100',
        padding = {
            enable: true,
            top: 'pt-[1.2rem]',
            bottom: 'pb-[1.2rem]'
        }
    } = props

    useEffect(() => {

    }, [])

    const cc = () => {
        let result = `divider h-auto`
        if (padding && padding.enable && padding.top && padding.bottom) {
            result = result + ` ${padding.top ? `${padding.top}` : ''} ${padding.bottom ? `${padding.bottom}` : ''}`
        } else {
            result = result + ` ${padding.enable ? 'py-[1.2rem]' : ''}`
        }
        return result;
    }

    return (
        <>
            <div className={cc()}>
                {show && <div className={`${bg ? bg : 'bg-prg-100'} w-[100%] h-[1px]`}></div>}
            </div>
        </>
    )
};

export default Divider;
