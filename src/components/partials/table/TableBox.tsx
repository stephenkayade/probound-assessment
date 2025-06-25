import React, { useEffect, useState, useContext, ReactNode } from "react"

interface ITableBox{
    children: ReactNode,
    className?: string
}

const TableBox = ({ children, className = '' }: ITableBox) => {

    useEffect(() => {

    }, [])

    const cc = () => {
        let result = `tablebox responsive w-full`
        if(className){
            result = result + ` ${className}`
        }
        return result;
    }

    return (
        <>
            <div id="tablebox" className={cc()}>
                { children }
            </div>
        </>
    )
};

export default TableBox;
