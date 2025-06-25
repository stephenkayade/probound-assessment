import React, { useEffect, useState, useContext, ReactNode } from "react"
import CardUI from "./CardUI";

interface IListBox {
    children: ReactNode,
    className?: string
}

const ListBox = ({ children, className = '' }: IListBox) => {

    useEffect(() => {

    }, [])

    return (
        <>
            <CardUI>

                <div id="listbox" className={`listbox ${className}`}>
                    {children}
                </div>

            </CardUI>
        </>
    )
};

export default ListBox;
