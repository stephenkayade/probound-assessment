import { FC, ReactNode } from 'react'
import helper from '../../../utils/helper.util'
import { FontWeightType, SizeType } from '../../../utils/types.util'

interface IHeaderTextProps {
    title?: string,
    children?: ReactNode,
    weight?: FontWeightType,
    size?: SizeType,
    color?: string,
    className?: any
}

const HeaderText: FC<IHeaderTextProps> = ({ title, children, weight, size, color, className }) => {

    return (
        <h3 className={`tracking-[-1px] ${weight ? helper.formatWeight(weight) : ''} ${size ? helper.formatSize(size) : ''}  ${color ?? 'prs-950'} ${className ?? ''}`}>
            {children ? children : title}
        </h3>

    )
}

export default HeaderText