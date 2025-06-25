import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import routil from '../utils/routes.util';
import routes from '../routes/routes';
import useContextType from './useContextType';
import storage from '../utils/storage.util';
import { IInRoute, IRouteItem } from '../utils/interfaces.util';
import { RouteActionType } from '../utils/types.util';

interface IToDetails {
    id?: string,
    route: string,
    name: string,
    subroute?: string,
}

const useGoTo = () => {

    const DASHBOARD_ROUTE = import.meta.env.VITE_DASHBOARD_ROUTE || '/dashboard';

    const navigate = useNavigate();
    const location = useLocation()
    const { userContext } = useContextType();

    const {
        setSidebar
    } = userContext;

    const goTo = (url: string) => {
        if (url) {
            navigate(url)
        }
    }

    const toMainRoute = (e: any, name: string) => {

        if (e) { e.preventDefault(); }

        const route = routes.find((x) => x.name === name);

        if (route) {

            navigate(computePath(route.url))

            setSidebar({
                route: route,
                subroutes: route.subroutes ? route.subroutes : [],
                inroutes: route.inroutes ? route.inroutes : [],
                collapsed: false,
                isOpen: true
            })

            storage.keep('route.name', route.name);

        }

    }

    const toDetailRoute = (e: any, options: IToDetails) => {

        e.preventDefault();

        const route = routil.inRoute({
            route: options.route,
            name: options.name,
            params: options.id ? [{ type: 'url', name: 'details', value: options.id }] : []
        });

        if(options.subroute){
            storage.keep('route.subroute', options.subroute);
        }

        goTo(route);

    }

    const computePath = (route: string) => {

        if (route === DASHBOARD_ROUTE) {
            return route;
        } else {
            return DASHBOARD_ROUTE + route
        }

    }

    const getSubroutes = (name: string): Array<IRouteItem> => {

        let result: Array<IRouteItem> = [];

        const route = routes.find((x) => x.name === name);

        if (route && route.subroutes && route.subroutes.length > 0) {
            result = route.subroutes;
        }

        return result;

    }

    const getInRoutes = (name: string): Array<IInRoute> => {

        let result: Array<IInRoute> = [];

        const route = routes.find((x) => x.name === name);

        if (route && route.inroutes && route.inroutes.length > 0) {
            result = route.inroutes;
        }

        return result;

    }

    const getRoute = (name: string, subroute?: string): IRouteItem => {

        let result: any;
        const route = routes.find((x) => x.name === name);

        if (subroute && route && route.subroutes && route.subroutes.length > 0) {

            const sub = route.subroutes.find((m) => m.name === subroute);

            if (sub) {
                result = sub;
            }

        } else if (route) {
            result = route
        }

        return result;

    }

    const getRouteAction = (action?: RouteActionType) => {
            let result: string = action ? action : 'navigate';
            return result;
        }

    return {

        goTo,
        navigate,
        computePath,
        toDetailRoute,
        toMainRoute,
        getSubroutes,
        getInRoutes,
        getRoute,
        getRouteAction,

        location,
    }

}

export default useGoTo