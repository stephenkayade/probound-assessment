import React, { useEffect, useState, useContext } from "react"

interface IDot {
    className?: string
}

const Dot = ({ className = '' }: IDot) => {

    useEffect(() => {

    }, [])

    return (
        <>
            <span className={`w-[5px] h-[5px] bg-prg-950 rounded-full ${className ? className : ''}`}></span>
        </>
    )
};

export default Dot;
