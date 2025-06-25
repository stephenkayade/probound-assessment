import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useInView, useAnimation } from 'framer-motion'

export interface IHoverProps {
    children: any,
    className?: string
}

const Hover = ({ children, className }: IHoverProps) => {

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg'])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg'])

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)

    }

    const handleMouseMove = (e: any) => {

        const rect = e.target.getBoundingClientRect()

        const width = rect.width
        const height = rect.height

        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5

        x.set(xPct)
        y.set(yPct)

    }

    return (
        <>
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={className}
                style={{ transformStyle: 'preserve-3d', rotateX, rotateY }}

            >
                {children}
            </motion.div>
        </>
    )
}

export default Hover