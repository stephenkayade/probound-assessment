import React, { useEffect, useState, useContext } from "react"
import { StatusEnum } from "../../../utils/enums.util";

interface IProgress {
    value: string | number,
    width?: string,
    status: string
}

const Progress = ({ value, status, width = 'w-[100%]' }: IProgress) => {

    useEffect(() => {

    }, [])

    const cpr = () => {

        let result = { width: 0, background: '' }

        const perce = parseFloat(value ? value.toString() : '0');

        if (perce === 100) {
            result.width = perce;
            result.background = 'bg-pagr-600';
        } else if (perce > 1 && perce < 100 && status !== StatusEnum.ABANDONED) {
            result.width = perce;
            result.background = 'bg-pap-500';
        } else if (perce > 1 && perce < 100 && status === StatusEnum.ABANDONED) {
            result.width = perce;
            result.background = 'bg-pao-500';
        } else if (perce <= 1) {
            result.width = perce;
            result.background = 'bg-pay-500';
        }


        return result;
    }

    return (
        <>
            <div className={`flex items-center gap-x-[2.5rem] ${width ? width : 'w-[100%]'}`}>
                <div className="h-[0.4rem] grow rounded-[0px] bg-prg-50">
                    <div className={`${cpr().background} h-[0.4rem]`} style={{ width: `${cpr().width}%` }} />
                </div>
                {value && parseFloat(value.toString()) >= 0 && <span className="text-[13px] font-sora gog-700">{value}%</span>}
            </div>
        </>
    )
};

export default Progress;
