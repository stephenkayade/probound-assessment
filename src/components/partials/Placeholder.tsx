import React, { useEffect, useState } from 'react'
import { IPlaceholder } from '../../utils/interfaces.util'

const Placeholder = (props: Partial<IPlaceholder>) => {

    // https://jamesinkala.com/blog/make-animated-content-placeholders-with-html-and-css/
    const {
        height = "h-[10px] min-h-[10px]",
        width = 160,
        bgColor = 'bg-prg-100', 
        animate = true,
        className,
        block = false,
        radius = 'rounded-full'
    } = props

    useEffect(() => {

    }, [])

    const cc = () => {

        let result = `placeholder ${height} ${block ? 'block' : 'inline-block'} relative ${radius} overflow-x-hidden overflow-y-hidden ${bgColor}`

        if (width) {
            result = result + ` ${width}`
        } else {
            result = result + ` w-[100%] min-w-[100%]`
        }

        if (className) {
            result = result + ` ${className}`
        }

        return result;

    }

    return (
        <>

            <div className={cc()}>
                <div className={`activity ${animate ? 'flicker' : ''}`}></div>
            </div>

        </>
    )
}

export default Placeholder