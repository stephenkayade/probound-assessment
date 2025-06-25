import React, { useEffect, useState } from 'react'
import pop from '../utils/loader.util'
import { SizeType } from '../utils/types.util'

interface IUseSize{
    size: SizeType,
    type?: 'input' | 'filter' | 'button' | 'checkbox' | 'input-icon' | 'modal'
}

const useSize = (props: IUseSize) => {

    const {
        size,
        type = 'input'
    } = props;

    const [h, setH] = useState<string>('')
    const [w, setW] = useState<string>('')
    const [sz, setSz] = useState<string>('')
    const [pos, setPos] = useState<string>('')

    useEffect(() => {

        if(type === 'input'){
            setH(setInputHeight())
        }

        if(type === 'filter'){
            setH(setFilterHeight())
        }

        if(type === 'button'){
            setH(setButtonHeight())
        }

        if(type === 'checkbox'){
            setSz(setCheckSize())
        }

        if(type === 'input-icon'){
            setPos(setIconPosition())
        }

        if(type === 'modal'){
            setW(setModalWidth())
        }

    }, [size, type])

    const setInputHeight = () => {

        let result: string = `h-[45px]`;

        switch (size) {
            case 'xmini':
                result = 'h-[20px]'
                break;
            case 'mini':
                result = 'h-[25px]'
                break;
            case 'xxsm':
                result = 'h-[30px]'
                break;
            case 'xsm':
                result = 'h-[35px]'
                break;
            case 'sm':
                result = 'h-[40px]'
                break;
            case 'rg':
                result = 'h-[45px]'
                break;
            case 'default':
                result = 'h-[45px]'
                break;
            case 'md':
                result = 'h-[50px]'
                break;
            case 'lg':
                result = 'h-[56px]'
                break;
            case 'xlg':
                result = 'h-[60px]'
                break;
            case 'xxlg':
                result = 'h-[68px]'
                break;
            default:
                result = 'h-[45px]'
                break;
        }

        return result;

    }

    const setFilterHeight = () => {

        let result: string = `h-[45px]`;

        switch (size) {
            case 'xmini':
                result = 'h-[18px]'
                break;
            case 'mini':
                result = 'h-[23px]'
                break;
            case 'xxsm':
                result = 'h-[28px]'
                break;
            case 'xsm':
                result = 'h-[33px]'
                break;
            case 'sm':
                result = 'h-[38px]'
                break;
            case 'rg':
                result = 'h-[42px]'
                break;
            case 'default':
                result = 'h-[43px]'
                break;
            case 'md':
                result = 'h-[48px]'
                break;
            case 'lg':
                result = 'h-[54px]'
                break;
            case 'xlg':
                result = 'h-[58px]'
                break;
            case 'xxlg':
                result = 'h-[66px]'
                break;
            default:
                result = 'h-[43px]'
                break;
        }

        return result;

    }

    const setButtonHeight = () => {

        let result: string = "min-h-[45px] h-[45px]";

        switch (size) {
            case 'mini':
                result = "min-h-[25px] h-[25px]"
                break;
            case 'xxsm':
                result = "min-h-[30px] h-[30px]"
                break;
            case 'xsm':
                result = "min-h-[35px] h-[35px]"
                break;
            case 'sm':
                result = "min-h-[40px] h-[40px]"
                break;
            case 'rg':
                result = "min-h-[45px] h-[45px]"
                break;
            case 'md':
                result = "min-h-[50px] h-[50px]"
                break;
            case 'lg':
                result = "min-h-[56px] h-[56px]"
                break;
            case 'xlg':
                result = "min-h-[60px] h-[60px]"
                break;
            case 'xxlg':
                result = "min-h-[68px] h-[68px]"
                break;
            default:
                result = "min-h-[45px] h-[45px]"
                break;
        }

        return result;

    }

    const setCheckSize = () => {

        let result: string = `h-[45px]`;

        switch (size) {
            case 'mini':
                result = 'min-w-[8px] min-h-[8px]'
                break;
            case 'xxsm':
                result = 'min-w-[10px] min-h-[10px]'
                break;
            case 'xsm':
                result = 'min-w-[14px] min-h-[14px]'
                break;
            case 'sm':
                result = 'min-w-[18px] min-h-[18px]'
                break;
            case 'rg':
                result = 'min-w-[22px] min-h-[22px]'
                break;
            case 'default':
                result = 'min-w-[22px] min-h-[22px]'
                break;
            case 'md':
                result = 'min-w-[26px] min-h-[26px]'
                break;
            case 'lg':
                result = 'min-w-[30px] min-h-[30px]'
                break;
            case 'xlg':
                result = 'min-w-[35px] min-h-[35px]'
                break;
            case 'xxlg':
                result = 'min-w-[40px] min-h-[40px]'
                break;
            default:
                result = 'min-w-[22px] min-h-[22px]'
                break;
        }

        return result;

    }

    const setIconPosition = () => {

        let result: string = ` top-[28%]`;

        switch (size) {
            case 'mini':
                result = ' top-[3%]'
                break;
            case 'xxsm':
                result = ' top-[12%]'
                break;
            case 'xsm':
                result = ' top-[19%]'
                break;
            case 'sm':
                result = ' top-[24%]'
                break;
            case 'rg':
                result = ' top-[28%]'
                break;
            case 'default':
                result = ' top-[32%]'
                break;
            case 'md':
                result = ' top-[30%]'
                break;
            case 'lg':
                result = ' top-[32%]'
                break;
            case 'xlg':
                result = ' top-[34%]'
                break;
            case 'xxlg':
                result = ' top-[37%]'
                break;
            default:
                result = ' top-[28%]'
                break;
        }

        return result;

    }

    const setModalWidth = () => {

        let result: string = 'w-[350px]';

        switch (size) {
            case 'xsm':
                result = 'w-[200px]'
                break;
            case 'sm':
                result = 'w-[300px]'
                break;
            case 'rg':
                result = 'w-[350px]'
                break;
            case 'default':
                result = 'w-[350px]'
                break;
            case 'md':
                result = 'w-[450px]'
                break;
            case 'lg':
                result = 'w-[550px]'
                break;
            case 'xlg':
                result = 'w-[650px]'
                break;
            case 'xxlg':
                result = 'w-[750px]'
                break;
            default:
                result = 'w-[350px]'
                break;
        }

        return result;

    }

    return { w, h, sz, pos }

}

export default useSize