import React, { useEffect, useState, useRef, useImperativeHandle, forwardRef, ForwardedRef } from "react"
import { ITextAreaInput } from "../../../utils/interfaces.util";
import helper from "../../../utils/helper.util";
import useSize from "../../../hooks/useSize";

const TextAreaInput = forwardRef((props: ITextAreaInput, ref: ForwardedRef<any>) => {

    const {
        id,
        name,
        defaultValue,
        placeholder,
        autoComplete,
        className,
        label,
        rows = 4,
        cols = 4,
        readonly,
        icon = {
            enable: false,
            position: 'right',
            child: <></>
        },
        isError = false,
        showFocus = true,
        onChange,
        onKeyUp,
        onFocus
    } = props

    const { pos } = useSize({ size: 'mini', type: 'input-icon' })
    const [inputId, setInputId] = useState<string>(helper.random(8, true))
    const inputRef = useRef<HTMLTextAreaElement>(null)

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

        let result: string = `form-control transition-all duration-250 w-full py-[0.5rem] px-[1rem] font-sora text-[13px] border`;

        // colors, borders and focus
        if (isError) {
            result = result + ` prbr-700 bdr-prbr-700`
        } else {
            result = result + ` color-black bdr-prg-200 ${showFocus ? 'bdrf-prcb-400 bdrh-prcb-200' : ''}`
        }

        if (className) {
            result = result + ` ${className}`
        }

        return result;

    }

    const cic = () => {

        let result: string = `absolute ${pos}`;

        if (icon && icon.enable) {

            if (icon.position === 'right') {
                result = result + ' right-[0.7rem]'
            }

            if (icon.position === 'left') {
                result = result + ' left-[0.7rem]'
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
                <label htmlFor={id ? id : inputId} className={`${label.className ? label.className : ''}`}>
                    <span className={`font-sora prg-900`} style={{ fontSize: `${label.fontSize}px` }}>{label.title}</span>
                    {label.required ? <span className="color-red font-sora-medium relative text-[16px] top-[5px] left-[3px]">*</span> : ''}
                </label>
            }

            <div className="w-full relative">


                {
                    icon && icon.enable &&
                    <span className={cic()}>{icon.child}</span>
                }

                <textarea
                    ref={inputRef}
                    id={id ? id : inputId}
                    name={name ? name : ''}
                    defaultValue={defaultValue ? defaultValue : ''}
                    rows={rows}
                    cols={cols}
                    className={cc()}
                    placeholder={placeholder ? placeholder : 'Type here'}
                    autoComplete={autoComplete ? 'on' : 'off'}
                    readOnly={readonly ? readonly : false}
                    onChange={(e) => onChange(e)}
                    onKeyUp={(e) => onKeyUp ? onKeyUp(e) : {}}
                    onFocus={(e) => onFocus ? onFocus(e) : {}}
                ></textarea>
            </div>

        </>
    )

})

export default TextAreaInput;
