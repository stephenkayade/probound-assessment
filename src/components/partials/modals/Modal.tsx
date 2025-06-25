import React, { useEffect, useState, useContext } from "react"
import { ICustomModal } from "../../../utils/interfaces.util";
import IconButton from "../buttons/IconButton";
import { motion } from 'framer-motion';
import useSize from "../../../hooks/useSize";

const Modal = (props: ICustomModal) => {

    const {
        show,
        size = 'rg',
        title,
        header = true,
        hideOnClose = true,
        flattened,
        className,
        children,
        child,
        backdrop = {
            bgColor: 'rgba(30, 30, 39, 0.71)'
        },
        closeModal
    } = props;

    const mw = useSize({ size, type: 'modal' })

    const cmcvar = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
        exit: { opacity: 0, y: 50, transition: { duration: 0.2 } }
    };

    const [animate, setAnimate] = useState<boolean>(false)

    useEffect(() => {

        if (show) {
            setTimeout(() => {
                setAnimate(true)
            }, 100)
        } else {
            setAnimate(false)
        }

    }, [show])

    const cbc = () => {

        let result: string = `modal-backdrop fixed top-0 w-full min-h-[100vh] left-0 z-10 overflow-hidden overflow-y-auto transition-all flex items-center justify-center`;

        if (!show) {
            result = result + ` hidden`
        }

        return result;

    }

    const cmc = () => {

        let result: string = `modal max-w-full max-h-full absolute rounded-[20px] z-20 bg-white ${mw.w}`;

        result = result + ` transform -translate-y-1/2 -translate-x-1/2`

        return result;

    }

    const clc = () => {

        let result: string = `l-halve w-[35%] min-h-[100%] rounded-tl-[20px] rounded-bl-[20px] px-[2rem] py-[1.3rem]`;

        return result;

    }

    const crc = () => {

        let result: string = `r-halve min-h-[100%] rounded-tr-[20px] rounded-br-[20px] px-[2rem] py-[1.5rem]`;

        if (flattened) {
            result = result + ` w-[100%]`
        } else {
            result = result + ` w-[65%]`
        }

        return result;

    }

    const closeX = (e: any) => {
        if (e) { e.preventDefault(); }
        closeModal(e)
    }

    const handleHide = (e: any) => {

        if (hideOnClose) {
            if (e.target.classList.contains('modal-backdrop')) {
                closeX(e)
            }
        }
    }

    return (
        <>
            <div onClick={(e) => handleHide(e)} className={cbc()} style={{ backgroundColor: backdrop.bgColor }}>

                {
                    animate &&
                    <motion.div
                        className={`${cmc()}`}
                        variants={cmcvar}
                        initial={'hidden'}
                        animate="visible"
                        exit={'exit'}
                    >

                        <div className="flex gap-x-0 min-h-[250px]">

                            {
                                !flattened &&
                                <div className={clc()}>
                                    {child && child}
                                </div>
                            }

                            <div className={crc()}>

                                {
                                    header &&
                                    <div className="modal-header flex items-center">

                                        <h2 className="fs-16 mrgb0 font-sora-medium lasb-950">{title}</h2>
                                        <IconButton
                                            size="min-w-[1.8rem] min-h-[1.8rem]"
                                            className="ml-auto bg-prg-100 bgh-prbr-200 parh-700"
                                            icon={{
                                                type: 'polio',
                                                name: 'cancel',
                                                size: 16,
                                            }}
                                            onClick={(e) => closeX(e)}
                                        />

                                    </div>
                                }


                                <div className="modal-body w-full">
                                    {children}
                                </div>

                                <div className="modal-footer w-full">

                                </div>

                            </div>

                        </div>

                    </motion.div>
                }


            </div>
        </>
    )
};

export default Modal;
