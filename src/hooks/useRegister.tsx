import { MouseEvent, useEffect, useState } from "react"
import useGoTo from "./useGoTo"
import { onboardType } from "../utils/enums.util"

const useRegister = () => {

    const { goTo } = useGoTo()

    const [step, setStep] = useState(0)
    const [stage, setStage] = useState<string>(onboardType.INFO)


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
    return {
        step, stage, setStep,
        handleStage, handleNextStep
    }
}

export default useRegister