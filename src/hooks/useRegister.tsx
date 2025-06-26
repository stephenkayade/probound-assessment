import { MouseEvent, useEffect, useState } from "react"
import useGoTo from "./useGoTo"
import { onboardType } from "../utils/enums.util"
import { IAlert } from "../utils/interfaces.util"

const useRegister = () => {

    const { goTo } = useGoTo()

    const [step, setStep] = useState<number>(0)
    const [stage, setStage] = useState<string>(onboardType.INFO)
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneCode: '+234',
        phoneNumber: ''
    })
    const [loading, setLoading] = useState<boolean>(false);
    const [alert, setAlert] = useState<IAlert>({
        name: '',
        type: 'success',
        show: false,
        message: ''
    });


    useEffect(() => {
        setStep(0)
        setStage(onboardType.INFO)
    }, [])

    const handleNextStep = (e: MouseEvent<HTMLAnchorElement>, next: string) => {
        if (e) e.preventDefault()
        setStage(next)

        if (stage === onboardType.SUCCESS) {
            goTo('/login')
        }
    }

    const handleStage = (e: MouseEvent<HTMLAnchorElement>, stage: string) => {
        if (e) e.preventDefault()
        setStage(stage)
    }


    const handleRegister = async (e: any) => {

        if (e) { e.preventDefault(); }

        if (!form.firstName) {
            setAlert({ ...alert, type: 'error', show: true, name: 'firstName', message: 'first name is required' });
        }
        else if (!form.lastName) {
            setAlert({ ...alert, type: 'error', show: true, name: 'lastName', message: 'last name is required' });
        }
        else if (!form.email) {
            setAlert({ ...alert, type: 'error', show: true, name: 'email', message: 'email is required' });
        }
        else if (!form.phoneNumber) {
            setAlert({ ...alert, type: 'error', show: true, name: 'phone', message: 'phone number is required' });
        }
        else if (!form.password) {
            setAlert({ ...alert, type: 'error', show: true, name: 'password', message: 'password is required' });
        }
        else if (!form.confirmPassword) {
            setAlert({ ...alert, type: 'error', show: true, name: 'password', message: 'confirm password is required' });
        }
        else if (form.password !== form.confirmPassword) {
            setAlert({ ...alert, type: 'error', show: true, name: 'password', message: 'confirm password does not match password' });
        }
        else {
            setStep(1)
        }

        setTimeout(() => {
            setAlert({ ...alert, show: false, name: '' });
        }, 2000)

    }
    return {
        loading, form, alert, step, stage,
        setStep, setForm, handleStage, handleNextStep, handleRegister
    }
}

export default useRegister