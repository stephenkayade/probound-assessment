import React, { useEffect, ReactNode } from "react"

interface ITableRow{
    className?: string,
    children: ReactNode,
    isHeader?: boolean
}

const TableRow = (props: ITableRow) => {

    const {
        className = '',
        children,
        isHeader = false
    } = props;

    useEffect(() => {

    }, [])

    return (
        <>
            <tr className={`table-row w-[100%] ${isHeader ? '' : 'bgh-prg-25'} ${className}`}>
                {children}
            </tr>
        </>
    )
};

export default TableRow;
