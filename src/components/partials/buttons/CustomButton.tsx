import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    children: ReactNode

}

const CustomButton: FC<IButtonProps> = ({ children, className, ...rest }) => {
    return (
        <>
            <button
                {...rest}
                className={`h-12 w-[180px] rounded-lg bg-blue-400 ${className && className}`}
            >
                {children}
            </button>
        </>
    )
}

export default CustomButton