import React, { useEffect, useState, useContext } from "react"
import { ICellHead } from "../../../utils/interfaces.util";

const CellHead = (props: ICellHead) => {

    const {
        fontSize = 11,
        label,
        style,
        className = "text-left"
    } = props;

    useEffect(() => {

    }, [])

    const cc = () => {

        let result = `prg-900 py-[0.5rem] px-[0.5rem] uppercase tracking-[0.03rem] align-middle whitespace-nowrap`

        if(className){
            result = result + ` ${className}`
            if(!className.includes('text-left') && !className.includes('text-center')){
                result = result + ` text-left`
            }
        }

        return result;

    }

    return (
        <>
            <th className={cc()} style={{ ...style, fontSize: `${fontSize}px` }}>{label}</th>
        </>
    )
};

export default CellHead;
