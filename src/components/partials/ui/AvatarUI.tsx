import React from "react"

interface IAvatarUI{
    url: string,
    width?: string,
    height?: string
}

const AvatarUI = (props: IAvatarUI) => {

    const {
        url,
        width = 'min-w-[1.2rem]',
        height = 'min-h-[1.2rem]'
    } = props;

    return (
        <>
            <div
                className={`${width} ${height} bg-prg-100 inline-flex rounded-full full-bg bg-center ring ring-transparent`}
                style={{ backgroundImage: `url("${url}")` }}>
            </div>
        </>
    )
};

export default AvatarUI;
