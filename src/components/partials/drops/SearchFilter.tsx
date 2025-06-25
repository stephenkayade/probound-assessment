import React, { useEffect, useState, forwardRef, useImperativeHandle, ForwardedRef, useRef, MouseEvent, Fragment } from "react"
import { IFilter, IFilterItem, ISearchFilter, ISearchFilterItem } from "../../../utils/interfaces.util";
import Icon from "../icons/Icon";
import AvatarUI from "../ui/AvatarUI";
import TextInput from "../inputs/TextInput";
import { Link } from "react-router-dom";
import UserAvatar from "../ui/UserAvatar";
import useSize from "../../../hooks/useSize";
import useRandom from "../../../hooks/useRandom";
import { SemanticType } from "../../../utils/types.util";
import Badge from "../badges/Badge";

const SearchFilter = forwardRef((props: ISearchFilter, ref: ForwardedRef<any>) => {

    const {
        id = '',
        readonly = false,
        disabled = false,
        noFilter = true,
        name = 'filter-box',
        defaultValue = '',
        size = 'md',
        className = '',
        placeholder = 'Filter',
        showFocus = true,
        isError = false,
        position = 'bottom',
        multiple = false,
        control = {
            showImage: true,
            display: 'default',
        },
        menu = {
            style: {},
            search: true,
            className: 'min-w-[13rem] max-w-[16rem]',
            fullWidth: false,
            limitHeight: 'sm'
        },
        icon = {
            name: 'calendar',
            type: 'feather',
            style: {},
            child: <Icon type="feather" name="chevron-down" size={16} className="ml-auto w-[16px] h-[16px] prg-600 relative top-[1px]" />
        },
        items,
        onChange,
        onSelect
    } = props;

    const menuRef = useRef<any>(null);
    const searchRef = useRef<any>(null);

    const ch = useSize({ size, type: 'filter' })
    const { randomizeSemantics, semantics } = useRandom()

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selected, setSelected] = useState<ISearchFilterItem>()
    const [selectedList, setSelectedList] = useState<Array<IFilterItem>>([])
    const [selectedValues, setSelectedValues] = useState<Array<string>>([])
    const [item, setItem] = useState<ISearchFilterItem>()
    const [badgeType, setBadgeType] = useState<SemanticType>();
    const [search, setSearch] = useState<Array<ISearchFilterItem>>([]);

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
    }, [defaultValue])

    useEffect(() => {
        setBadgeType(control.badgeType ? control.badgeType : randomizeSemantics())
    }, [control])

    const cc = () => {

        let result: string = `filter search border bdr-prg-200 ${isError ? 'bdr-prbr-600 color-red' : ''} text-[13px] ${showFocus ? 'bdrf-prcb-400 bdrh-prcb-600' : ''} ${disabled ? 'disabled-light' : ''}`;

        if (menu.fullWidth) {
            result = result + ` full-width`
        }

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

        if (defaultValue && !multiple) {
            const item = items.find((x) => x.value === defaultValue);
            if (item) {
                setSelected(item)
            }
        }

        if (defaultValue && multiple) {

            const values = defaultValue.split(',');
            let currentList = selectedList;
            let currentValues = selectedValues;

            values.forEach((v) => {
                const item = items.find((x) => x.value === v);
                if (item && !currentValues.includes(item.value)) {
                    currentList.push(item)
                    currentValues.push(item.value)
                }
            })

            setSelectedList(currentList)
            setSelectedValues(currentValues)

        }

    }

    const selectItem = (e: MouseEvent<HTMLAnchorElement>, value: any, subvalue?: string) => {
        e.preventDefault()

        const item = items.find((x) => x.value === value);

        if (item) {

            if (multiple) {

                let currentList = selectedList;
                let currentValues = selectedValues;

                if (!currentValues.includes(item.value)) {
                    currentList.push(item)
                    currentValues.push(item.value)
                } else {
                    currentList = currentList.filter((x) => x.value !== item.value)
                    currentValues = currentValues.filter((x) => x !== item.value)
                }

                setSelectedList(currentList)
                setSelectedValues(currentValues)

                if (onSelect) {
                    onSelect(currentList)
                }

            } else {
                setSelected(item)
                onChange(item);
            }

            setIsOpen(false)
            setSearch([])
            if (searchRef.current) {
                searchRef.current.clear()
            }

        } else {

            setSelected(undefined)
            setSelectedList([])
            setSelectedValues([])
            setIsOpen(false)
            setSearch([])
            if (searchRef.current) {
                searchRef.current.clear()
            }
        }

    }

    const handleFocus = (e: any) => {
        if (e) { e.preventDefault() }

        if (!selected) {
            setIsOpen(true);
            if (searchRef.current) {
                searchRef.current.focus()
            }
        }

    }

    const handleClear = (e: any) => {
        if (e) { e.preventDefault() }
        setIsOpen(false)
        setItem(undefined)
        setSelected(undefined)
        setSearch([])
        setSelectedList([])
        setSelectedValues([])
    }

    const clearSelected = (e: any) => {
        if (e) { e.preventDefault() }
        handleClear(e);
        setIsOpen(true);
        setTimeout(() => {
            if (searchRef.current) {
                searchRef.current.focus()
            }
        }, 50)
    }

    const handleReset = (e: any) => {
        if (e) { e.preventDefault() }
        setIsOpen(false)
        setItem(undefined)
        setSelected(undefined)
        setSelectedList([])
        setSelectedValues([])
        setSearch([])
    }

    const handleSearch = (value: string) => {

        let currentList = items;
        let newList: Array<ISearchFilterItem> = [];

        if (value !== '') {

            newList = currentList.filter((item: ISearchFilterItem) => {
                const n = item.label.toLowerCase();
                const v = value.toLowerCase();
                return n.includes(v)
            });

        } else {
            newList = [];
        }

        setSearch(newList)

    }

    // expose child component functions to parent component
    useImperativeHandle(ref, () => ({
        clear: handleClear,
        reset: handleReset,
        isOpen: isOpen
    }))

    // inner components
    const renderDefault = () => {
        return (
            <>
                {
                    !multiple && selected &&
                    <>
                        {selected.image && <> <AvatarUI url={selected.image} /> <span className="pl-[0.5rem]"></span> </>}
                        <span className="text-[13px] font-sora prg-600 relative pr-[0.5rem] truncate top-[0px]">{selected.display ? selected.display : selected.label}</span>
                    </>
                }
                {
                    multiple && selectedList.length > 0 &&
                    selectedList.map((item, index) =>
                        <Fragment key={item.value + index}>
                            {item.image && <> <AvatarUI url={item.image} /> <span className="pl-[0.5rem]"></span> </>}
                            <span className="text-[13px] font-sora prg-600 relative pr-[0.5rem] truncate top-[0px]">{item.display ? item.display : item.label}</span>
                        </Fragment>
                    )
                }
            </>
        )
    }

    const renderBadge = () => {
        return (
            <>
                {
                    !multiple && selected &&
                    <>
                        <Badge
                            type={badgeType!}
                            size="sm"
                            display="badge"
                            label={selected.display ? selected.display : selected.label}
                            padding={{ y: 3, x: 12 }}
                            font={{
                                weight: 'regular',
                                size: 10
                            }}
                            upper={true}
                            close={false}
                        />
                    </>
                }
                {
                    multiple && selectedList.length > 0 &&
                    selectedList.map((item, index) =>
                        <Fragment key={item.value + index}>
                            <Badge
                                type={semantics[index]}
                                size="sm"
                                display="badge"
                                label={item.display ? item.display : item.label}
                                padding={{ y: 3, x: 12 }}
                                font={{
                                    weight: 'regular',
                                    size: 10
                                }}
                                upper={true}
                                close={false}
                            />
                        </Fragment>
                    )
                }
            </>
        )
    }

    return (
        <>
            <div className={cc()}>

                <div onClick={(e) => handleFocus(e)} className={`filter-input relative cursor-text ${selected ? 'item-selected' : ''} ${ch.h}`}>

                    {
                        (selected || selectedList.length > 0) &&
                        <div className={`flex items-center w-[95%] ${multiple ? 'gap-x-[0.5rem]' : ''}`}>
                            {control.display === 'default' && renderDefault()}
                            {control.display === 'badge' && renderBadge()}
                        </div>
                    }

                    {
                        !selected &&
                        <TextInput
                            ref={searchRef}
                            type="text"
                            size={size}
                            className="bdr-none w-full"
                            placeholder={placeholder}
                            icon={{
                                enable: true,
                                position: 'right',
                                child: <Icon name="search" className="prcb-800 top-[2px]" type="polio" size={16} />
                            }}
                            onFocus={(e) => {

                            }}
                            onChange={(e) => {
                                handleSearch(e.target.value);
                            }}
                        />
                    }

                </div>

                <div ref={menuRef} className={`menu sm menu-list ${isOpen ? 'open' : 'close'} ${position}`} style={menu.style}>

                    {
                        items.length === 0 &&
                        <div className="empty">
                            <span className="text-[14px] font-sora prg-600">No Items</span>
                        </div>
                    }
                    {
                        items.length > 0 &&
                        <>

                            <div className={`inner ${cmh()}`}>

                                {
                                    search.length === 0 &&
                                    <div className="empty">
                                        <span className="text-[14px] font-sora prg-600">No Results</span>
                                    </div>
                                }

                                {
                                    search.length > 0 &&
                                    search.map((item, index) =>
                                        <Fragment key={`${item.value}-${index + 1}`}>
                                            <Link onClick={(e) => selectItem(e, item.value)} to="" className={`filter-item ${menu.fullWidth ? '' : menu.className}`}>
                                                {
                                                    item.image &&
                                                    <>
                                                        <UserAvatar
                                                            avatar={item.image}
                                                            name={item.label}
                                                            size="min-w-[1.2rem] min-h-[1.2rem]"
                                                        />
                                                        <span className="pl-[0.5rem]"></span>
                                                    </>
                                                }
                                                <span className="text-[13px] font-sora prg-900">{item.label}</span>

                                                {
                                                    !multiple && selected && selected.value === item.value &&
                                                    <Icon name="check" className="prcb-800 ml-auto" type="feather" size={16} />
                                                }
                                                {
                                                    multiple && selectedValues.includes(item.value) &&
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

export default SearchFilter;
