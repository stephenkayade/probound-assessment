import React, { useEffect, useState, useContext } from "react"
import { IToast } from "../../../utils/interfaces.util";
import { Link } from "react-router-dom";

const Toast = (props: IToast) => {

    const {
        position,
        show,
        title,
        message,
        type,
        close
    } = props;

    useEffect(() => {

    }, [])

    const cc = () => {
        let result = `fixed z-[5000] w-[300px] min-h-[68px] py-[0.55rem] px-[0.95rem] rounded-[8px] shadow-toast top-0 mr-[2rem] ml-[2rem] leading-[20px]`

        result = result + ` ${cp()}`

        if (show) {
            result = result
        } else {
            result = result + ` hidden`
        }

        return result;
    }

    const ccl = (type: any) => {

        let result = {
            bg: 'bg-color-black',
            color: 'color-white'
        }

        if (type === 'success') {
            result = {
                bg: 'bg-color-green',
                color: 'color-white'
            }
        }

        if (type === 'error') {
            result = {
                bg: 'bg-color-red',
                color: 'color-white'
            }
        }

        if (type === 'info') {
            result = {
                bg: 'bg-color-blue',
                color: 'color-white'
            }
        }

        if (type === 'warning') {
            result = {
                bg: 'bg-color-orange',
                color: 'color-white'
            }
        }

        return result;

    }

    const cp = () => {

        let result = `top-0 mt-[3rem] right-0`

        switch (position) {
            case 'top-left':
                result = `top-0 mt-[3rem] left-0`
                break;
            case 'top-right':
                result = `top-0 mt-[3rem] right-0`
                break;
            case 'top-center':
                result = `top-0 mt-[3rem] ml-[28%]`
                break;
            case 'bottom-left':
                result = `bottom-0 mt-[-3rem] left-0`
                break;
            case 'bottom-right':
                result = `bottom-0 mt-[-3rem] right-0`
                break;
            case 'bottom-center':
                result = `bottom-0 mt-[-3rem] ml-[28%]`
                break;
            default:
                result = `top-0 mt-[3rem] right-0`
                break;
        }

        return result
    }

    const handleClose = (e: any) => {
        if (e) { e.preventDefault() };
        close(e);
    }



    return (
        <>
            <div className={`toast ${cc()} ${ccl(type).bg}`}>

                <div className="flex items-center">
                    <h3 className="font-sora-medium text-[14px] color-white">{title ? title : 'Notification'}</h3>
                    <Link to="" className="ml-auto" onClick={(e) => handleClose(e)}><span className="fe fe-x text-[15px] color-white"></span></Link>
                </div>

                <span className={`font-sora text-[13px] ${ccl(type).color} mb-0`}>
                    {message ? message : 'No message'}
                </span>

            </div>
        </>
    )
};

export default Toast;
