import React, { useEffect, useState, useContext } from "react"
import { INavItem } from "../../../utils/interfaces.util";
import { Link } from "react-router-dom";
import Icon from "../icons/Icon";

const NavItem = (props: INavItem) => {

    const {
        type,
        active = false,
        icon = {
            enable: true,
            name: 'layout-left',
            className: ''
        },
        label,
        path = '',
        onClick
    } = props;

    useEffect(() => {

    }, [])

    const nc = (z?: { la: boolean }) => {

        let ni = `nav-item block w-[100%] p-0 my-[0.5rem] mx-0`
        let nl = `nav-link transition-all duration-[0.25s] flex items-center gap-x-[1rem] w-[100%] py-[0.5rem] px-[0.75rem] rounded-[5px] prg-950`

        if(z && z.la){
            nl = nl + ` pab-900 bg-pab-100 bgh-pab-100`
        } else {
            nl = nl + ` pabh-900`
        }

        return { ni, nl }

    }

    return (
        <>
            {
                type === 'sidebar' &&
                <>
                    <li className={`nav-item ${nc().ni}`}>
                        <Link onClick={(e) => onClick(e)} to="" className={`nav-link ${nc({ la: active }).nl}`}>
                            {
                                icon.enable &&
                                <Icon
                                    type="polio"
                                    clickable={false}
                                    name={icon.name}
                                    size={16}
                                    className={`nav-icon ui-relative ${icon.className ? icon.className : ''}`}
                                    style={{
                                        top: '0px'
                                    }}
                                />

                            }
                            <span className={`nav-text ${active ? 'pab-900' : 'prg-900 pabh-900'} font-sora text-[13px]`}>{label}</span>
                        </Link>
                    </li>
                </>
            }

            {
                type === 'topbar' &&
                <>
                    <Link to={path} className={`nav-item flex items-center gap-x-[1rem] py-[0.25rem] ${nc().ni}`}>
                        {
                            icon.enable &&
                            <Icon
                                type="polio"
                                clickable={false}
                                name={icon.name}
                                size={16}
                                className={`nav-icon ui-relative ${icon.className ? icon.className : ''}`}
                                style={{
                                    top: '0px'
                                }}
                            />

                        }
                        <span className={`nav-text ${active ? 'pab-900' : 'prg-900 pabh-900'} font-sora text-[14px]`}>{label}</span>
                    </Link>
                </>
            }
        </>
    )
};

export default NavItem;
