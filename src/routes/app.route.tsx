import React from "react";
import { IRoute } from "../utils/interfaces.util";

const appRoutes: Array<IRoute> = [

    {
        name: '/',
        url: '/',
        isAuth: false,
        params: [],
        content: {}
    },

    {
        name: 'render',
        url: '/render',
        isAuth: false,
        params: [],
        content: {}
    },

    {
        name: 'login',
        url: '/login',
        isAuth: false,
        params: [],
        content: {}
    },

    {
        name: 'register',
        url: '/register',
        isAuth: false,
        params: [],
        content: {}
    },

    {
        name: 'verify',
        url: '/verify',
        isAuth: false,
        params: [],
        content: {}
    },

    {
        name: 'reset-password',
        url: '/reset-password',
        isAuth: false,
        params: [],
        content: {}
    },

    {
        name: 'forgot-password',
        url: '/forgot-password',
        isAuth: false,
        params: [],
        content: {}
    },

    {
        name: 'onboarding',
        url: '/onboarding',
        isAuth: false,
        params: [],
        content: {}
    },

]

export default appRoutes;