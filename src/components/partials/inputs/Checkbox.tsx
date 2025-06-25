import React, { useEffect, useState, useRef, forwardRef, ForwardedRef, useImperativeHandle } from "react"
import { ICheckbox } from "../../../utils/interfaces.util";
import helper from "../../../utils/helper.util";
import useSize from "../../../hooks/useSize";

const Checkbox = forwardRef((props: ICheckbox, ref: ForwardedRef<any>) => {

    const {
        id,
        label,
        name = '',
        checked = false,
        className = '',
        wraper = {
            className: ''
        },
        readonly = false,
        size = 'md',
        style = {},
        onChange
    } = props

    const ch = useSize({ size, type: 'checkbox' })
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {

    }, [])

    const lfs = () => {

        let result: string = '[14px]';

        if (label && label.fontSize) {
            result = label.fontSize.toString()
        }

        return result;
    }

    const cc = () => {

        let result: string = `check-input cursor-pointer checkbox ${size} font-sora text-[13px] ${ch.sz}`;

        if (className) {
            result = result + ` ${className}`
        }

        return result;

    }

    // expose child component functions to parent component
    useImperativeHandle(ref, () => ({
        clear: () => { },
    }))

    return (
        <div className={`inline-flex items-center ${wraper && wraper.className ? wraper.className : ''}`} style={style}>

            <input
                ref={inputRef}
                id={id ? id : ''}
                name={name ? name : ''}
                defaultChecked={checked !== undefined ? checked : false}
                type={'checkbox'}
                className={cc()}
                readOnly={readonly ? readonly : false}
                onChange={(e) => onChange(e)}
            />

            {
                label &&
                <label htmlFor={id ? id : ''} className={`mb-0 pl-[0.65rem] relative top-[1px] ${label.className ? label.className : ''}`}>
                    <span className={`text-${lfs()} font-sora${label.fontWeight ? '-' + label.fontWeight : ''} color-black`}>{label.title}</span>
                </label>
            }

        </div>
    )

})

export default Checkbox;
