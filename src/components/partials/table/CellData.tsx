import React, { useEffect, useState, useContext } from "react"
import { ICellData } from "../../../utils/interfaces.util";

const CellData = (props: ICellData) => {

    const {
        fontSize = 13,
        className = '',
        large = false,
        style = {},
        children,
        onClick
    } = props;

    useEffect(() => {

    }, [])

    const cc = () => {
        let result = `cell-data ${large ? 'px-[0.5rem] py-[1rem]' : 'px-[0.5rem] py-[0.5rem]'} h-[55px] align-middle border-b bdr-prg-100 prg-700`

        if (onClick) {
            result = result + ` cursor-pointer`
        }

        if (className) {
            result = result + ` ${className}`
        }

        return result;
    }

    const fireClick = (e: any) => {

        if (onClick) {
            onClick(e)
        }

    }


    return (
        <>
            <td onClick={(e) => fireClick(e)} style={{ ...style, fontSize: `${fontSize}px` }} className={cc()}>
                { children }
            </td>
        </>
    )
};

export default CellData;
