import React, { useEffect, useState, useContext, ReactNode } from "react"

interface ITable {
    children: ReactNode,
    className?: string
}

const Table = ({ children, className = '' }: ITable) => {
    useEffect(() => {

    }, [])
    return (
        <>
            <table className={`table w-[100%] ${className}`}>

                {children}

            </table>
        </>
    )
};

export default Table;
