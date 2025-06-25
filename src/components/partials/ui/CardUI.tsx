import React, { useEffect, useState, useContext, ReactNode } from "react"

interface ICardUI {
    children: ReactNode,
    className?: string,
    flat?: boolean,
    padding?: {
        x: number,
        y: number
    }
    noBorder?: boolean
}

const CardUI = (props: ICardUI) => {

    const {
        children,
        className = '',
        flat = false,
        noBorder = false,
        padding = {
            x: 1,
            y: 1
        }
    } = props;

    useEffect(() => {

    }, [])

    const cc = () => {
        let result = `card w-full rounded-[0.6rem]`

        if (noBorder) {
            result = result
        } else {
            result = result + ` border bdr-prg-100`
        }

        if (className) {
            result = result + ` ${className}`
        }
        return result;
    }

    return (
        <>
            <div id="card" className={cc()} style={{ padding: !flat ? `${padding.y}rem ${padding.x}rem` : '0' }}>
                {children}
            </div>
        </>
    )
};

export default CardUI;
