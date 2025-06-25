import React, { useEffect, useState, useContext } from "react"
import { INavDivider } from "../../../utils/interfaces.util";

const NavDivider = (props: INavDivider) => {

    const {
        type,
        show = true
    } = props;

    useEffect(() => {

    }, [])

    const nc = () => {
        let nd = `p-[1rem]`
        let ndl = `w-[100%] bg-prg-200 h-[1px]`

        return { nd, ndl }

    }

    return (
        <>
            {
                show &&
                <>
                
                    <div className={`nav-divider ${nc().nd}`}>
                        <div className={`line ${nc().ndl}`}></div>
                    </div>

                </>
            }
        </>
    )
};

export default NavDivider;
