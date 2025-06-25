import React, { FC, ReactNode, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useInView, useAnimation } from 'framer-motion'

interface IRevealProps {
    children: ReactNode,
    className?: string,
    delay?: any
}


const Reveal:FC<IRevealProps> = ({ children, className, delay }) => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }

    }, [isInView])
    return (
        <>
            <motion.div
                className={className}
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}

                initial='hidden'
                animate={mainControls}
                transition={{ duration: 0.65, delay: delay ? delay : 0.2 }}
            >
                {children}
            </motion.div>
        </>
    )
}

export default Reveal