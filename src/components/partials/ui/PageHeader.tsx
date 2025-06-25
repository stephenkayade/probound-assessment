import React, { useEffect, useState, useContext, ReactNode } from "react"

interface IPageHeader{
    title: string,
    description?: string
    children?: ReactNode
}

const PageHeader = (props: IPageHeader) => {

    const {
        title,
        description = '',
        children = null
    } = props;

    useEffect(() => {

    }, [])
    return (
        <>
            <div className="page-header w-full flex items-center">

                <div className="space-y-[0.2rem]">
                    <h2 className="font-sora text-[16px] prg-700">{ title }</h2>
                    <p className="font-sora-light text-[14px] prg-400">{ description }</p>
                </div>

                {
                    children &&
                    <div className="ml-auto">
                        {children}
                    </div>
                }

            </div>
        </>
    )
};

export default PageHeader;
