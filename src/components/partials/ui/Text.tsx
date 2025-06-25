import React, { FC } from 'react'
import helper from '../../../utils/helper.util'
import { FontWeightType, SizeType } from '../../../utils/types.util'

interface ITextProps {
    title: string,
    weight?: FontWeightType,
    size?: SizeType,
    className?: string
    color?: string
}

const Text: FC<ITextProps> = ({ title, size, className, color, weight }) => {
    return (
        <p className={`
            ${weight ? helper.formatWeight(weight) : ''} 
            ${size ? helper.formatSize(size) : ''} 
            ${color ?? 'text-[#9D9BA3]'} 
            ${className ?? ''}`}
        >
            {title}
        </p>
    )
}

export default Text