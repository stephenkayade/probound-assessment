import React, { useEffect, useState, useContext, CSSProperties } from "react"
import { IBadge } from "../../../utils/interfaces.util";
import useSize from "../../../hooks/useSize";
import { Link } from "react-router-dom";
import Icon from "../icons/Icon";

const Badge = (props: IBadge) => {

    const {
        type,
        label,
        display = 'status',
        upper = false,
        className = '',
        style = {},
        size = 'sm',
        close = false,
        padding = { y: 3, x: 12  },
        font = {
            weight: 'medium',
            size: 11,
        },
        onClose = (e: any) => { }
    } = props;

    useEffect(() => {

    }, [])

    const csc = () => {

        let label = `font-sora${font.weight !== 'regular' ? `-${font.weight}` : ''}`;
        let style: CSSProperties = {};
        let result = `inline-flex items-center border justify-center rounded-full gap-x-[8px]`;
        result = upper ? result + ' uppercase' : result;

        if (className) {
            result = result + ` ${className}`
        }

        switch (type) {
            case 'info':
            case 'blue':
                result = result + ` bg-pab-25 bdr-pab-200`;
                label = label + ` pab-700`
                // style = { borderColor: '#A4C8FF' }
                break;
            case 'success':
            case 'green':
                result = result + ` bg-pagr-25 bdr-pagr-200`;
                label = label + ` pagr-700`
                // style = { borderColor: '#93E7A2' }
                break;
            case 'error':
            case 'red':
                result = result + ` bg-prbr-25 bdr-prbr-200`;
                label = label + ` prbr-600`
                // style = { borderColor: '#FFCBCB' }
                break;
            case 'warning':
            case 'yellow':
                result = result + ` bg-pay-25 bdr-pay-200`;
                label = label + ` pay-600`
                // style = { borderColor: '#FFE79D' }
                break;
            case 'warning-2':
            case 'orange':
                result = result + ` bg-pao-25 bdr-pao-200`;
                label = label + ` pao-600`
                // style = { borderColor: '#FFDAB0' }
                break;
            case 'ongoing':
            case 'purple':
                result = result + ` bg-pap-25 bdr-pap-200`;
                label = label + ` pap-600`
                // style = { borderColor: '#E2CAFF' }
                break;
            case 'pink':
                result = result + ` bg-prk-25 bdr-prk-200`;
                label = label + ` prk-600`
                // style = { borderColor: '#F2CCEC' }
                break;
            case 'default':
            case 'normal':
                result = result + ` bg-prg-25 bdr-prg-100`;
                label = label + ` prg-600`
                style = { borderColor: '#DEE1F3' }
                break;
            default:
                result = result + ` bg-prg-25`;
                label = label + ` prg-900`
                style = { borderColor: '#DEE1F3' }
                break;
        }

        return { badge: result, label, style };
    }

    const cbc = () => {

        let label = `font-sora${font.weight !== 'regular' ? `-${font.weight}` : ''}`;
        let style: CSSProperties = {};
        let result = `inline-flex items-center border justify-center rounded-full gap-x-[8px]`;
        result = upper ? result + ' uppercase' : result;

        if (className) {
            result = result + ` ${className}`
        }

        switch (type) {
            case 'info':
            case 'blue':
                result = result + ` bg-pab-25 bdr-pab-200`;
                label = label + ` pab-900`
                // style = { borderColor: '#C1D6EF' }
                break;
            case 'success':
            case 'green':
                result = result + ` bg-pagr-25 bdr-pagr-200`;
                label = label + ` pagr-900`
                // style = { borderColor: '#D0F4D2' }
                break;
            case 'error':
            case 'red':
                result = result + ` bg-prbr-25 bdr-prbr-200`;
                label = label + ` prbr-800`
                // style = { borderColor: '#FBD6D6' }
                break;
            case 'warning':
            case 'yellow':
                result = result + ` bg-pay-25 bdr-pay-200`;
                label = label + ` pay-700`
                // style = { borderColor: '#F4DEB6' }
                break;
            case 'warning-2':
            case 'orange':
                result = result + ` bg-pao-25 bdr-pao-200`;
                label = label + ` pao-700`
                // style = { borderColor: '#FFDAB0' }
                break;
            case 'ongoing':
            case 'purple':
                result = result + ` bg-pap-25 bdr-pap-200`;
                label = label + ` pap-900`
                // style = { borderColor: '#E3D5F4' }
                break;
            case 'pink':
                result = result + ` bg-prk-25 bdr-prk-200`;
                label = label + ` prk-800`
                // style = { borderColor: '#F2CCEC' }
                break;
            case 'default':
            case 'normal':
                result = result + ` bg-prg-25 bdr-prg-100`;
                label = label + ` prg-800`
                style = { borderColor: '#DEE1F3' }
                break;
            default:
                result = result + ` bg-prg-25`;
                label = label + ` prg-900`
                style = { borderColor: '#DEE1F3' }
                break;
        }

        return { badge: result, label, style };
    }

    const apply = () => {
        let bd = display === 'status' ? csc().badge : cbc().badge
        let st = display === 'status' ? csc().style : cbc().style
        let lb = display === 'status' ? csc().label : cbc().label
        return { bd, st, lb }
    }

    return (
        <>
            <div className={apply().bd} style={{ ...apply().st, ...style, padding: `${padding.y}px ${padding.x}px` }}>
                <span className={apply().lb} style={{ fontSize: font.size ? `${font.size}px` : '11px' }}>{label}</span>
                {
                    close &&
                    <Icon
                        name="x"
                        type="feather"
                        clickable={true}
                        className="prbr-600"
                        size={12}
                        onClick={(e) => {
                            onClose(e)
                        }}
                    />
                }
            </div>
        </>
    )
};

export default Badge;
