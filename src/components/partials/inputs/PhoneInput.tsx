import React, { useEffect, useRef, useImperativeHandle, forwardRef, ForwardedRef } from "react"
import { IPhoneInput, } from "../../../utils/interfaces.util";
import helper from "../../../utils/helper.util";
import { Link } from "react-router-dom";
import FormField from "./FormField";
import Filter from "../drops/Filter";
import TextInput from "./TextInput";

const PhoneInput = forwardRef((props: IPhoneInput, ref: ForwardedRef<any>) => {

    const {
        textInput: ti,
        filter: fi,
        width,
        gap,
        label
    } = props

    useEffect(() => {

    }, [])

    // expose child component functions to parent component
    useImperativeHandle(ref, () => ({
        clear: () => { },
        focus: () => { }
    }))

    return (
        <>

            <FormField className="w-full">
                {
                    label &&
                    <label htmlFor={''} className={`mrgb0 ${label.className ? label.className : ''}`}>
                        <span className={`font-sora prg-900`} style={{ fontSize: `${label.fontSize}px` }}>{label.title}</span>
                        {label.required ? <span className="color-red font-sora-medium relative text-[16px] top-[5px] left-[3px]">*</span> : ''}
                    </label>
                }

                <div className={`flex items-center`}>
                    <div className={`flex-col ${width ? width : ''}`}>
                        <Filter
                            className="border-r-0"
                            {...fi}
                        />
                    </div>
                    <div className="flex-col grow">
                        <TextInput
                            {...ti}
                        />
                    </div>
                </div>
            </FormField>

        </>
    )

})

export default PhoneInput;
