import { useReducer } from 'react'
import { IToast } from '../../utils/interfaces.util';
import { toast } from '../../_data/seed';

import UserContext from './userContext';
import UserReducer from './userReducer';

import { SET_USERTYPE, SET_TOAST } from '../types'

const UserState = (props: any) => {

    const initialState = {
        userType: '',
        toast: toast,
    }

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const setUserType = (type: string) => {

        dispatch({
            type: SET_USERTYPE,
            payload: type
        })

    }

    const setToast = (data: IToast) => {
        dispatch({
            type: SET_TOAST,
            payload: data
        })
    }

    const clearToast = () => {
        dispatch({
            type: SET_TOAST,
            payload: {
                type: 'success',
                show: false,
                message: '',
                title: 'Feedback',
                position: 'top-right',
            }
        })
    }

    return <UserContext.Provider
        value={{

            userType: state.userType,
            loading: state.loading,
            toast: state.toast,
            setToast: setToast,
            clearToast: clearToast,
            setUserType
        }}
    >
        {props.children}

    </UserContext.Provider>

}

export default UserState