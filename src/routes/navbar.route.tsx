import React from "react";
import { IRoute } from "../utils/interfaces.util";

const navbarRoutes: Array<IRoute> = [
    {
        name: 'home',
        url: '/',
        isAuth: false,
        params: [],
        content: {}
    },
    {
        name: 'home',
        url: '/home',
        isAuth: false,
        params: [],
        content: {}
    },
    {
        name: 'not-found',
        url: '/not-found',
        isAuth: false,
        params: [],
        content: {}
    },
    {
        name: 'about',
        url: '/about',
        isAuth: false,
        params: [],
        content: {}
    },
    {
        name: 'contact',
        url: '/contact',
        isAuth: false,
        params: [],
        content: {}
    }
]

export default navbarRoutes;