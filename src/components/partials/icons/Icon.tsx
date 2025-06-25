import React, { useEffect, MouseEvent } from "react"
import { IICon } from "../../../utils/interfaces.util";
import { Link } from "react-router-dom";
import useGoTo from "../../../hooks/useGoTo";

const Icon = (props: IICon) => {

    const {
        name,
        type,
        position = 'relative',
        clickable = false,
        className = '',
        url = '',
        style = {},
        size = 14,
        height = 20,
        onClick
    } = props;

    const { goTo } = useGoTo()

    useEffect(() => {

    }, [])

    const fireOnClick = (e: MouseEvent<HTMLAnchorElement>) => {

        e.preventDefault()

        if (onClick) {
            onClick(e)
        } else if (url) {
            goTo(url)
        }

    }

    const cc = (): string => {

        let cl = type === 'feather' ? 'fe' : type === 'polio' ? 'po' : '';

        let result: string = `icon transition-all duration-250 ${cl} ${cl}-${name} ${position}`;

        if (!clickable) {
            result = result + ` ${className ? className : ''}`
        }

        return result;

    }

    const cic = () => {

        let cl = type === 'feather' ? 'fe' : type === 'polio' ? 'po' : '';

        let icon: string = `icon transition-all duration-250 ${cl} ${cl}-${name}`;
        let link: string = `icon-link transition-all duration-250 inline-flex items-center ${position}`;

        if (clickable) {
            link = link + ` ${className ? className : ''}`
        }

        return { icon, link };

    }

    return (
        <>

            {
                clickable &&
                <>
                    <Link
                        to={''}
                        className={cic().link}
                        style={style}
                        onClick={(e) => fireOnClick(e)}
                    >
                        <span style={{ fontSize: `${size}px` }} className={cic().icon} />
                    </Link>
                </>
            }

            {
                !clickable &&
                <>
                    <span
                        className={cc()}
                        style={{
                            ...style,
                            fontSize: `${size}px`
                        }} />
                </>
            }

        </>
    )
};

export default Icon;
