import React, { useEffect, useState, useRef, useImperativeHandle, forwardRef, ForwardedRef } from "react"
import { ITextInput } from "../../../utils/interfaces.util";
import helper from "../../../utils/helper.util";
import useSize from "../../../hooks/useSize";

const TextInput = forwardRef((props: ITextInput, ref: ForwardedRef<any>) => {

    const {
        id,
        name,
        defaultValue,
        type,
        placeholder,
        autoComplete,
        className,
        label,
        readonly,
        icon = {
            enable: false,
            position: 'right',
            child: <></>
        },
        isError = false,
        size = 'rg',
        showFocus = true,
        onChange,
        onKeyUp,
        onFocus
    } = props

    const ch = useSize({ size })
    const { pos } = useSize({ size, type: 'input-icon' })

    const [inputId, setInputId] = useState<string>(helper.random(8, true))
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {

    }, [])

    const lfs = () => {

        let result: string = 'text-[12px]';

        if (label && label.fontSize) {
            result = `text-[${label.fontSize.toString()}px]`
        }

        return result;
    }

    const cc = () => {

        let result: string = `rounded-lg outline-none transition-all duration-250 w-full font-sora text-sm border border-[1.8px] placeholder:text-base placeholder-[#9D9BA3] ${ch.h}`;

        // colors, borders and focus
        if (isError) {
            result = result + ` prbr-700 bdr-prbr-700`
        } else {
            result = result + ` color-black bdr-prg-200 ${showFocus ? 'bdrf-prcb-400 bdrh-prcb-200' : ''}`
        }

        // padding
        if (icon && icon.enable) {

            if (icon.position && icon.position === 'left') {
                result = result + ` py-[0.5rem] pl-[2.5rem] pr-[1rem]`
            } else if (icon.position && icon.position === 'right') {
                result = result + ` py-[0.5rem] pr-[2.5rem] pl-[1rem]`
            }

        } else {
            result = result + ` py-[0.5rem] px-[1rem]`
        }

        if (className) {
            result = result + ` ${className}`
        }

        return result;

    }

    const cic = () => {

        let result: string = `absolute`;

        if (icon && icon.enable) {

            if (icon.position === 'right') {
                result = result + `${pos} right-[0.7rem]`
            }

            if (icon.position === 'left') {
                result = result + `${pos} left-[0.7rem]`
            }

        }

        return result;
    }

    const handleClear = () => {
        if(inputRef.current){
            inputRef.current.value = ''
        }
    }

    const handleFocus = () => {
        if(inputRef.current){
            inputRef.current.focus()
        }
    }

    // expose child component functions to parent component
    useImperativeHandle(ref, () => ({
        clear: handleClear,
        focus: handleFocus
    }))

    return (
        <>

            {
                label &&
                <label htmlFor={id ? id : inputId} className={`mrgb0 ${label.className ? label.className : ''}`}>
                    <span className={`font-sora prg-900`} style={{ fontSize: `${label.fontSize}px` }}>{label.title}</span>
                    {label.required ? <span className="color-red font-sora-medium relative text-sm top-[5px] left-[3px]">*</span> : ''}
                </label>
            }

            <div className="w-full relative">

                {
                    icon && icon.enable &&
                    <span className={cic()}>{icon.child}</span>
                }

                <input
                    ref={inputRef}
                    id={id ? id : inputId}
                    name={name ? name : ''}
                    defaultValue={defaultValue ? defaultValue : ''}
                    type={type ? type : 'text'}
                    className={cc()}
                    placeholder={placeholder ? placeholder : ''}
                    autoComplete={autoComplete ? 'on' : 'off'}
                    readOnly={readonly ? readonly : false}
                    onChange={(e) => onChange(e)}
                    onKeyUp={(e) => onKeyUp ? onKeyUp(e) : {}}
                    onFocus={(e) => onFocus ? onFocus(e) : {}}
                />
            </div>

        </>
    )

})

export default TextInput;
