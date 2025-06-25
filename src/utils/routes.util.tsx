import routes from '../routes/routes';
import { IInRoute, IRoute, IRouteItem, IRouteParam, IRoutil } from './interfaces.util';

const DASHBOARD_ROUTE = import.meta.env.VITE_DASHBOARD_ROUTE || '/dashboard';

const computeAppRoute = (route: IRoute): string => {

    let result: string = '';

    if (route.params && route.params.length > 0) {

        const resolved = resolveRouteParams(route.params, 'app')
        result = `${route.url}${resolved}`

    } else {
        result = route.url;
    }

    return result;
}

const computePath = (route: string): string => {

    if (route === '/dashboard') {
        return route;
    } else {
        return DASHBOARD_ROUTE + route
    }

}

const computeSubPath = (route: IRoute, subroute: IRouteItem): string => {

    // PRODUCE => '/dashboard/{route}/{subroute}/path/:url?query=value'

    let result = DASHBOARD_ROUTE;
    const resolved = resolveRouteParams(subroute.params ? subroute.params : [], 'app');

    if(result === route.url){
        result = result + subroute.url + resolved;
    } else {
        result = result + route.url + subroute.url + resolved;
    }

    return result;


}

const computeInPath = (inroute: IInRoute): string => {

    let result: string = DASHBOARD_ROUTE;
    const resolved = resolveRouteParams(inroute.params ? inroute.params : [], 'app');
    const route = routes.find((x) => x.name === inroute.route);

    if (route && route.subroutes && route.subroutes.length > 0) {

        // PRODUCE => '/dashboard/{route}/{subroute}/${inroute}/path/:url?query=value'

        const subroute = route.subroutes.find((m) => m.name === inroute.parent);

        if (subroute) {
            const merged = subroute.url === inroute.url ? subroute.url : subroute.url + inroute.url;
            result = result + route.url + merged + resolved;
        }

    } else if (route && (!route.subroutes || route.subroutes.length === 0) && route.inroutes && route.inroutes.length > 0) {

        // PRODUCE => '/dashboard/{route}/${inroute}/path/:url?query=value'

        result = result + route.url + inroute.url + resolved;

    }

    // console.log('IN',result)

    return result;

}

const resolveRouteParams = (params: Array<IRouteParam>, stickTo: 'app' | 'page'): string => {

    // PRODUCE =>  '/topics/path/path1/:url/:url2?type=success'
    let path: string = '', urlParam: string = '', queryParam: string = '?';
    let result: string = '';

    for (let i = 0; i < params.length; i++) {

        let param = params[i];

        if (param.type === 'path') {
            path = path + `/${param.value ? param.value : param.name}`;
        }

        if (param.type === 'url' && stickTo === 'app') {
            urlParam = urlParam + `/:${param.name}`;
        }

        if (param.type === 'url' && stickTo === 'page') {
            urlParam = urlParam + `/${param.value}`;
        }

        if (param.type === 'query' && param.value && stickTo === 'page') {
            queryParam = queryParam + `${param.name}=${param.value}`;
        }

    }

    if (queryParam === '?') {
        result = path + urlParam;
    } else {
        result = path + urlParam + queryParam;
    }

    return result;

}

const inRoute = (payload: { route: string, name: string, params?: Array<IRouteParam> }): string => {

    const { route, name, params } = payload;

    let result = DASHBOARD_ROUTE;
    const resolved = resolveRouteParams(params ? params : [], 'page');
    const _route = routes.find((x) => x.name === route);

    if (_route && _route.inroutes && _route.inroutes.length > 0) {

        const inroute = _route.inroutes.find((m) => m.name === name);

        if (inroute && _route.subroutes && _route.subroutes.length > 0) {

            const subroute = _route.subroutes.find((z) => z.name === inroute.parent);

            if (subroute) {

                const merged = subroute.url === inroute.url ? subroute.url : subroute.url + inroute.url;
                result = result + _route.url + merged + resolved;

            }

        }

        if (inroute && (!_route.subroutes || _route.subroutes.length === 0)) {
            result = result + _route.url + inroute.url + resolved;
        }

    } else if (_route && _route.subroutes && _route.subroutes.length > 0) {

        const subroute = _route.subroutes.find((z) => z.name === name);

        if (subroute) {
            const merged = subroute.url
            result = result + merged + resolved;
        }

    }

    return result;

}

const routil: IRoutil = {
    computePath: computePath,
    computeSubPath: computeSubPath,
    computeInPath: computeInPath,
    computeAppRoute: computeAppRoute,
    inRoute: inRoute,
    resolveRouteParams: resolveRouteParams
}

export default routil;