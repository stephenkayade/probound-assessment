import React, { useEffect, useState, forwardRef, useImperativeHandle, ForwardedRef, useRef, MouseEvent, Fragment } from "react"
import { IFilter, IFilterItem, IPopout } from "../../../utils/interfaces.util";
import Icon from "../icons/Icon";
import AvatarUI from "../ui/AvatarUI";
import TextInput from "../inputs/TextInput";
import { Link } from "react-router-dom";
import useSize from "../../../hooks/useSize";

const Popout = forwardRef((props: IPopout, ref: ForwardedRef<any>) => {

    const {
        disabled = false,
        noFilter = true,
        defaultValue = '',
        className = '',
        showFocus = true,
        isError = false,
        position = 'bottom',
        menu = {
            style: {},
            search: true,
            className: 'min-w-[13rem] max-w-[16rem]',
            fullWidth: false,
            limitHeight: 'sm'
        },
        items,
    } = props;

    const menuRef = useRef<any>(null);
    const searchRef = useRef<any>(null);

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selected, setSelected] = useState<IFilterItem>()
    const [item, setItem] = useState<IFilterItem>()
    const [step, setStep] = useState<number>(0);
    const [search, setSearch] = useState<Array<IFilterItem>>([]);

    useEffect(() => {

        const dropBarOut = (e: any) => {
            if (!menuRef.current) {
                return;
            }

            if (!menuRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }

        window.addEventListener('mousedown', dropBarOut, true)

        return () => {
            window.removeEventListener('mousedown', dropBarOut)
        }

    }, [])

    useEffect(() => {
        handleAutoSelect()
    }, [])

    const cc = () => {

        let result: string = `filter inline-flex min-w-[40px] max-w-[40px] ${isError ? 'bdr-prbr-600 color-red' : ''} text-[13px] ${showFocus ? 'bdrf-prcb-400 bdrh-prcb-600' : ''} ${disabled ? 'disabled-light' : ''}`;

        if (className) {
            result = result + ` ${className}`
        }

        return result;

    }

    const cmh = () => {
        let result = 'max-h-[170px] overflow-y-scroll scrollbar-hide';

        if (menu.limitHeight) {

            switch (menu.limitHeight) {
                case 'sm':
                    result = 'max-h-[130px] overflow-y-scroll scrollbar-hide'
                    break;
                case 'rg':
                case 'md':
                    result = 'max-h-[220px] overflow-y-scroll scrollbar-hide'
                    break;
                default:
                    result = 'max-h-[170px] overflow-y-scroll scrollbar-hide'
                    break;
            }

        }

        return result;
    }

    const handleAutoSelect = () => {

        if (defaultValue) {
            const item = items.find((x) => x.value === defaultValue);
            if (item) {
                setSelected(item)
            }
        }

    }

    const selectItem = (e: MouseEvent<HTMLAnchorElement>, value: any, subvalue?: string) => {
        e.preventDefault()

        const item = items.find((x) => x.value === value);

        if (item) {

            setSelected(item)
            item.onClick(e, item)
            setIsOpen(false)
            setSearch([])
            if (searchRef.current) {
                searchRef.current.clear()
            }
        } else {
            setSelected(undefined)
            setIsOpen(false)
            setSearch([])
        }

    }

    const toggleMenu = (e: any) => {
        if (e) { e.preventDefault() }
        setIsOpen(!isOpen)
        setStep(0)
    }

    const handleClear = (e: any) => {
        if (e) { e.preventDefault() }
        setIsOpen(false)
        setItem(undefined)
        setSelected(undefined)
        setStep(0)
        setSearch([])
    }

    const handleReset = (e: any) => {
        if (e) { e.preventDefault() }
        setItem(undefined)
        setSelected(undefined)
        setStep(0)
    }

    const handleSearch = (value: string) => {

        let currentList = items;
        let newList = [];

        if (value !== '') {

            newList = currentList.filter((item: IFilterItem) => {
                const n = item.label.toLowerCase();
                const v = value.toLowerCase();
                return n.includes(v)
            });

        } else {
            newList = currentList;
        }

        setSearch(newList)

    }

    // expose child component functions to parent component
    useImperativeHandle(ref, () => ({
        clear: handleClear,
        reset: handleReset,
        isOpen: isOpen
    }))

    return (
        <>
            <div className={cc()}>

                <Link to="" onClick={(e) => toggleMenu(e)} className="w-full flex items-center justify-center">
                    <Icon type="feather" name="more-horizontal" size={16} className="w-[16px] h-[16px] prg-600 relative top-[0px]" />
                </Link>

                <div ref={menuRef} className={`menu menu-list ${isOpen ? 'open' : 'close'} ${position}`} style={menu.style}>

                    {
                        items.length === 0 &&
                        <div className="empty">
                            <span className="text-[14px] font-sora prg-600">No Items</span>
                        </div>
                    }
                    {
                        items.length > 0 &&
                        <>

                            {
                                menu.search &&
                                <div className="pb-[1rem]">
                                    <TextInput
                                        ref={searchRef}
                                        type="text"
                                        size="xsm"
                                        icon={{
                                            enable: true,
                                            position: 'right',
                                            child: <Icon name="search" className="prg-600 top-[2px]" type="feather" size={16} />
                                        }}
                                        onChange={(e) => handleSearch(e.target.value)}
                                    />
                                </div>
                            }

                            <div className={`inner ${cmh()}`}>

                                {
                                    noFilter &&
                                    <Link onClick={(e) => selectItem(e, 'no-filter')} to="" className="filter-item">
                                        <span className="text-[13px] font-sora prg-600">No Filter</span>
                                    </Link>
                                }

                                {
                                    search.length > 0 &&
                                    search.map((item, index) =>
                                        <Fragment key={`${item.value}-${index + 1}`}>
                                            <Link onClick={(e) => selectItem(e, item.value)} to="" className={`filter-item ${menu.fullWidth ? '' : menu.className}`}>
                                                {
                                                    item.image &&
                                                    <>
                                                        <AvatarUI url={item.image} />
                                                        <span className="pl-[0.5rem]"></span>
                                                    </>
                                                }
                                                <span className="text-[13px] font-sora prg-600">{item.label}</span>

                                                {
                                                    selected && selected.value === item.value &&
                                                    <Icon name="check" className="prcb-800 ml-auto" type="feather" size={16} />
                                                }
                                            </Link>
                                        </Fragment>
                                    )
                                }

                                {
                                    search.length === 0 &&
                                    items.map((item, index) =>
                                        <Fragment key={`${item.value}-${index + 1}`}>
                                            <Link onClick={(e) => selectItem(e, item.value)} to="" className={`filter-item ${menu.fullWidth ? '' : menu.className}`}>
                                                {
                                                    item.image &&
                                                    <>
                                                        <AvatarUI url={item.image} />
                                                        <span className="pl-[0.5rem]"></span>
                                                    </>
                                                }
                                                <span className="text-[13px] font-sora prg-600">{item.label}</span>
                                                {
                                                    selected && selected.value === item.value &&
                                                    <Icon name="check" className="prcb-800 ml-auto" type="feather" size={16} />
                                                }
                                            </Link>
                                        </Fragment>
                                    )
                                }

                            </div>

                        </>

                    }
                </div>

            </div>
        </>
    )
});

export default Popout;
