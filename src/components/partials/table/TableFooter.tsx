import React, { useEffect, useState, useContext, useRef } from "react"
import IconButton from "../buttons/IconButton";
import Button from "../buttons/Button";
import Icon from "../icons/Icon";
import Filter from "../drops/Filter";
import { limits } from "../../../_data/seed";
import { ListUIType, ResourceType } from "../../../utils/types.util";
import { ICollection, IListQuery } from "../../../utils/interfaces.util";
import useSearch from "../../../hooks/app/useSearch";
import helper from "../../../utils/helper.util";

interface ITableFooter {
    title: string,
    type: ListUIType,
    resource: ResourceType,
    resourceId?: string,
    source: ICollection,
    limit?: number,
    onChange(data: IListQuery): Promise<void>,
}

const TableFooter = (props: ITableFooter) => {

    // props
    const {
        title,
        type,
        resource,
        resourceId,
        source,
        limit,
        onChange
    } = props;

    // refs
    const limRef = useRef<any>(null)

    const { search, pageSearch, searchResource, filterResource } = useSearch({})

    const [LIMIT, setLimit] = useState<number>(limit ? limit : 25)

    useEffect(() => {

    }, [])

    const displayCount = () => {

        let result = `Displaying ${source.count} ${title} on page ${helper.getCurrentPage(source.pagination)}`;

        if (search.data.length > 0) {
            result = `Displaying ${search.count} ${title} on page ${helper.getCurrentPage(search.pagination)}`;
        }

        return result;

    }

    const isEnabled = (type: string) => {

        let result: boolean = false;

        if (type === 'prev') {

            if (source.data.length === source.total) {
                result = false;
            } else {
                if (search.data.length > 0) {
                    if (search.pagination.prev && search.pagination.prev.limit) {
                        result = true
                    }
                } else {
                    if (source.pagination.prev && source.pagination.prev.limit) {
                        result = true
                    }
                }
            }


        }

        if (type === 'next') {
            if (source.data.length === source.total) {
                result = false;
            } else {

                if (search.data.length > 0) {
                    if (search.pagination.next && search.pagination.next.limit) {
                        result = true
                    }
                } else {
                    if (source.pagination.next && source.pagination.next.limit) {
                        result = true
                    }
                }

            }

        }

        return result;

    }

    const handleNext = async (e: any) => {

        if (e) { e.preventDefault() }

        if (pageSearch.hasResult && search.data.length > 0) {

            const { next } = search.pagination;

            if (pageSearch.refine && pageSearch.refine === 'search') {

                searchResource({
                    resource: resource,
                    key: pageSearch.key,
                    limit: LIMIT ? LIMIT : next.limit,
                    payload: search.payload,
                    page: next.page,
                    order: 'desc'
                })

            }

            if (pageSearch.refine && pageSearch.refine === 'filter') {

                filterResource({
                    resource: resource,
                    key: pageSearch.key,
                    limit: LIMIT ? LIMIT : next.limit,
                    payload: search.payload,
                    page: next.page,
                    order: 'desc'
                })

            }


        } else {

            const { next } = source.pagination;

            if (type === 'self') {
                await onChange({ limit: LIMIT ? LIMIT : next.limit, page: next.page, order: 'desc' })
            }

            if ((type === 'resource' || type === 'details') && resourceId) {
                await onChange({ limit: LIMIT ? LIMIT : next.limit, page: next.page, order: 'desc', resource, resourceId })
            }

        }


        helper.scrollToTop()
    }

    const handlePrev = async (e: any) => {
        if (e) { e.preventDefault() }

        if (pageSearch.hasResult && search.data.length > 0) {

            const { prev } = search.pagination;

            if (pageSearch.refine && pageSearch.refine === 'search') {

                searchResource({
                    resource: resource,
                    key: pageSearch.key,
                    limit: LIMIT ? LIMIT : prev.limit,
                    payload: search.payload,
                    page: prev.page,
                    order: 'desc'
                })

            }

            if (pageSearch.refine && pageSearch.refine === 'filter') {

                filterResource({
                    resource: resource,
                    key: pageSearch.key,
                    limit: LIMIT ? LIMIT : prev.limit,
                    payload: search.payload,
                    page: prev.page,
                    order: 'desc'
                })

            }

        } else {

            const { prev } = source.pagination;

            if (type === 'self') {
                await onChange({ limit: LIMIT ? LIMIT : prev.limit, page: prev.page, order: 'desc' })
            }

            if ((type === 'resource' || type === 'details') && resourceId) {
                await onChange({ limit: LIMIT ? LIMIT : prev.limit, page: prev.page, order: 'desc', resource, resourceId })
            }

        }


        helper.scrollToTop()
    }

    const handleInit = (limit: number) => {

        if (type === 'self') {
            onChange({ limit, page: 1, order: 'desc' })
        }

        if ((type === 'resource' || type === 'details') && resource && resourceId) {
            onChange({
                limit, page: 1,
                order: 'desc',
                resource,
                resourceId,
                paginate: type === 'details' ? 'relative' : 'absolute'
            })
        }

    }

    return (
        <>
            <div className="table-footer w-full py-[0.5rem]">

                <div className="pagination flex items-center">

                    <div className="grow flex items-center gap-x-[0.6rem]">

                        <div className="w-[8%]">
                            <Filter
                                ref={limRef}
                                size='xxsm'
                                className='la-filter'
                                placeholder="Limit"
                                position="top"
                                defaultValue={LIMIT.toString()}
                                menu={{
                                    style: {},
                                    search: false,
                                    fullWidth: true,
                                    limitHeight: 'sm'
                                }}
                                items={
                                    limits.map((x) => {
                                        return {
                                            label: x.label,
                                            value: x.value.toString()
                                        }
                                    })
                                }
                                noFilter={false}
                                onChange={async (data) => {
                                    setLimit(parseInt(data.value))
                                    handleInit(parseInt(data.value))
                                }}
                            />
                        </div>

                        <span className="font-sora text-[13px] prg-700">{displayCount()}</span>

                    </div>

                    <div className="flex items-center gap-x-[0.55rem] ml-auto">

                        <Button
                            type="ghost"
                            semantic="default"
                            size="xxsm"
                            className="form-button"
                            disabled={isEnabled('prev') ? false : true}
                            style={{ paddingLeft: '0.5rem', paddingRight: '0.7rem' }}
                            text={{
                                label: "Prev",
                                size: 11,
                                weight: 'regular'
                            }}
                            reverse="row"
                            icon={{
                                enable: true,
                                child: <Icon type="polio" name="arrow-left" size={16} />
                            }}
                            onClick={(e) => handlePrev(e)}
                        />
                        <Button
                            type="ghost"
                            semantic="default"
                            size="xxsm"
                            className="form-button"
                            disabled={isEnabled('next') ? false : true}
                            style={{ paddingLeft: '0.5rem', paddingRight: '0.7rem' }}
                            text={{
                                label: "Next",
                                size: 11,
                                weight: 'regular'
                            }}
                            reverse="row"
                            icon={{
                                enable: true,
                                child: <Icon type="polio" name="arrow-right" size={16} />
                            }}
                            onClick={(e) => handleNext(e)}
                        />
                    </div>

                </div>

            </div>
        </>
    )
};

export default TableFooter;
