import React, { useEffect, useState, useContext } from "react"
import { SemanticType } from "../../../utils/types.util";
import Icon from "../icons/Icon";

interface IAlert {
    message?: string,
    show: boolean,
    type: SemanticType,
    className?: string,
    dismiss?: boolean,
}

const Alert = (props: IAlert) => {

    const {
        type,
        show,
        dismiss = true,
        message = 'Checkout this alert!',
        className
    } = props;

    useEffect(() => {

    }, [])

    const getAlertType = (type: SemanticType) => {

        let result: string = 'alert-primary';
        let icon: string = 'info-empty'

        switch (type) {
            case 'info':
                result = 'bg-pab-50 pab-800'
                icon = 'info-empty'
                break;
            case 'error':
                result = 'bg-prbr-50 prbr-800'
                icon = 'delete-circle'
                break;
            case 'success':
                result = 'bg-pagr-50 pagr-800'
                icon = 'check'
                break;
            case 'warning':
                result = 'bg-pay-50 pay-800'
                icon = 'warning-triangle'
                break;
            case 'ongoing':
                result = 'bg-pap-50 pap-800'
                icon = 'refresh-double'
                break;
            default:
                result = 'bg-prg-50 prg-800'
                icon = 'info-empty'
                break;
        }

        return { type: result, icon }

    }

    const cc = () => {

        const alert = getAlertType(type)

        let result: string = `alert flex items-center py-[0.5rem] px-[0.8rem] text-[13px] rounded-[6px] mb-[0.9rem] ${alert.type}`

        if (className) {
            result = result + ` ${className}`
        }

        return result;
    }

    return (
        <>
            {
                show &&
                <div className={cc()}>
                    <Icon
                        type="polio"
                        clickable={false}
                        name={getAlertType(type).icon}
                        size={20}
                        className="icon-alert"
                    />
                    <span className="text-[13px] gor-800 pl-[0.6rem]">
                        {message}
                    </span>
                </div>
            }
        </>
    )
};

export default Alert;
