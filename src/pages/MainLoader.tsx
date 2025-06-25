import React, { useEffect, useState, useContext } from "react"

const MainLoader = ({ }) => {
    useEffect(() => {

    }, [])
    return (
        <>
            <section className="w-[100%] h-[100vh] flex flex-col items-center justify-center">

                <span className={`loader lg accent`}></span>

            </section>
        </>
    )
};

export default MainLoader;
