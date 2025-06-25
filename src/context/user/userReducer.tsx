import {
    SET_USERTYPE,
    SET_TOAST,
} from '../types';


const reducer = (state: any, action: any) => {

    switch (action.type) {
       
        case SET_TOAST:
            return {
                ...state,
                toast: action.payload
            }
       
        case SET_USERTYPE:
            return {
                ...state,
                userType: action.payload
            }

        default:
            return state;
    }

}

export default reducer;