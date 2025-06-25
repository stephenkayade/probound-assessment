import React, { useContext, useEffect, useState } from 'react'
import { IUserContext } from '../utils/interfaces.util'
import UserContext from '../context/user/userContext'
import useContextType from './useContextType'

const useToast = () => {

    const { userContext } = useContextType()
    const {
        toast,
        setToast,
        clearToast
    } = userContext

    useEffect(() => {

    }, [])

    return {
        toast,
        setToast,
        clearToast
    }
}

export default useToast