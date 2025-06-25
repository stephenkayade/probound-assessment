import React, { useEffect, useState, useContext } from "react"
import Button from "../buttons/Button";
import Icon from "../icons/Icon";

interface IMessage {
    type: "success" | "error"
    title: string,
    message: string,
    button?: {
        enable: boolean,
        text?: string,
        onClick?(e: any): void
    }
}

const Message = (props: IMessage) => {

    const {
        type,
        title,
        message,
        button = {
            enable: true,
            text: "Continue",
            onClick: () => { }
        }
    } = props;

    useEffect(() => {

    }, [])

    const handleClick = (e: any) => {
        if (e) { e.preventDefault() }
        if (button && button.enable && button.onClick) {
            button.onClick(e)
        }
    }

    return (
        <>
            <div className="full-bg w-full min-h-[60vh] px-[2rem] py-[1.5rem] rounded-[22px] flex flex-col items-center justify-center space-y-[2rem]"
                style={{ backgroundImage: `url("../../../images/assets/bg@grad_01.webp")` }}>

                <div className="inline-flex min-w-[100px] min-h-[100px] bg-white justify-center items-center rounded-full">
                    {type === 'success' && <Icon name="check" type="polio" className="pagr-600" size={40} />}
                    {type === 'error' && <Icon name="cancel" type="polio" className="prbr-600" size={40} />}
                </div>

                <div className="w-full text-center">
                    <h2 className="font-sora-bold text-[25px] prs-950">{title}</h2>

                    <p className="font-sora text-[15px] prs-950 text-center max-w-[70%] mx-auto">
                        {message}
                    </p>
                </div>

                {
                    button.enable &&
                    <Button
                        type="primary"
                        size="md"
                        loading={false}
                        disabled={false}
                        block={false}
                        className="form-button min-w-[150px]"
                        text={{
                            label: button.text ? button.text : "Continue",
                            size: 13,
                            weight: 'medium'
                        }}
                        icon={{
                            enable: true,
                            child: <></>
                        }}
                        onClick={(e) => handleClick(e)}
                    />
                }



            </div>
        </>
    )
};

export default Message;
