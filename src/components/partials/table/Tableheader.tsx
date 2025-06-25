import React, { useEffect, useState, useContext, Fragment } from "react"
import { ITableHead } from "../../../utils/interfaces.util";
import CellHead from "./Cellhead";
import TableRow from "./TableRow";

const TableHeader = (props: ITableHead) => {

    const {
        className = '',
        items
    } = props;

    useEffect(() => {

    }, [])

    return (
        <>
            <thead className={`table-head border-b bdr-prg-200 ${className}`}>
                <TableRow isHeader={true} className="head-row w-[100%]">
                    {
                        items.length > 0 &&
                        items.map((cell, index) =>
                            <Fragment key={`${cell.label}-${index + 1}`}>
                                <CellHead
                                    key={`${cell.label}-${index + 1}`}
                                    label={cell.label}
                                    className={cell.className}
                                    fontSize={cell.fontSize}
                                    style={cell.style}
                                />
                            </Fragment>
                        )
                    }
                </TableRow>
            </thead>
        </>
    )
};

export default TableHeader;
