import React, { useEffect, useState, useContext, ReactNode } from "react"

interface IFormField {
    children: ReactNode,
    className?: string
}

const FormField = (props: IFormField) => {

    const {
        children,
        className = ''
    } = props;

    useEffect(() => {

    }, [])
    return (
        <>
            <div className={`form-field w-full ${className}`}>
                { children }
            </div>
        </>
    )
};

export default FormField;
