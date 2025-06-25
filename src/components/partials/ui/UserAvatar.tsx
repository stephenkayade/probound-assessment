
import { CSSProperties, useEffect } from "react"
import helper from "../../../utils/helper.util";

interface IUserAvatar {
    name: string,
    avatar: string,
    width?: string,
    height?: string,
    ring?: boolean,
    style?: CSSProperties,
    size?: string,
    className?: string
}
const UserAvatar = (props: IUserAvatar) => {

    const { 
        name, 
        avatar,
        ring = false,
        width = 'min-w-[25px]',
        height = 'min-h-[25px]',
        size,
        className = '',
        style={}
    } = props

    useEffect(() => {

    }, [])

    const cc = () => {

        let result = `flex ${size ? size : `${height} ${width}`} items-center justify-center rounded-full bg-gray-100 full-bg bg-center`;

        if(ring){
            result = result + ` ring-[1px] ring-gray-200`;
        }

        if(className){
            result = result + ` ${className}`;
        }

        return result;

    }

    return (
        <>
            <div className={cc()} style={{ backgroundImage: `url("${avatar}")`, ...style }}>
                {
                    (!avatar || avatar === 'no-avatar.png' || avatar === '' || avatar.length === 2) &&
                    <span className="text-[13px] font-inter-medium gog-900">{ name.includes('+') ? name : helper.getInitials(name) }</span>
                }
            </div>
        </>
    )
};

export default UserAvatar;
