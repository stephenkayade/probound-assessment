import { useContext } from 'react'
import { IUserContext } from '../utils/interfaces.util'
import UserContext from '../context/user/userContext'

const useContextType = () => {

    const userContext = useContext<IUserContext>(UserContext)

    return {
        userContext,
    }
}

export default useContextType