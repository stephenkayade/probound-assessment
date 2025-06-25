import React, { useEffect, useState, useContext } from "react"
import { IIconButton } from "../../../utils/interfaces.util";
import { Link } from "react-router-dom";
import Icon from "../icons/Icon";

const IconButton = (props: IIconButton) => {

    const {
        icon = {
            name: 'edit2',
            type: 'feather',
            size: 16,
            className: '',
            child: null
        },
        label = null,
        url = '',
        active = false,
        size = 'min-w-[2.2rem] min-h-[2.2rem]',
        radius = 'full',
        className = '',
        onClick
    } = props;

    useEffect(() => {

    }, [])

    const cc = () => {

        let result = `rounded-${radius} inline-flex items-center justify-center ${size} transition-colors duration-[0.25s]`

        if (active) {
            result = result + ` bg-prcb-100 bgh-prcb-200 prcb-800 pacbh-900`
        } else {
            result = result + ` bgh-prg-50 pagh-800 prg-600`
        }

        if (className) {
            result = result + ` ${className}`
        }

        return result;

    }

    const handleClick = (e: any) => {

        if (e) { e.preventDefault() }

        if (url) {
            onClick(e);
            window.open(url, '_blank');

        } else {
            onClick(e)
        }

    }

    return (
        <>
            <Link to={''}
                onClick={(e) => handleClick(e)}
                className={`flex items-center gap-x-[0.5rem] ${className && className.includes('ml-auto') ? 'ml-auto' : ''}`}>
                <div className={cc()}>
                    {
                        icon.child &&
                        <>{icon.child}</>
                    }
                    {
                        !icon.child &&
                        <>
                            <Icon
                                type={icon.type}
                                name={icon.name}
                                className={icon.className}
                                size={icon.size}
                            />
                        </>
                    }



                </div>
                {
                    label &&
                    <>
                        <span style={{ fontSize: `${label.size ? label.size : '13'}px` }}
                            className={`prs-950 font-sora${label.weight && label.weight !== 'regular' ? '-' + label.weight : ''} ${label.className ? label.className : ''}`}>{label.text}</span>
                    </>
                }
            </Link>
        </>
    )
};

export default IconButton;
