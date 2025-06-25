import React, { useEffect, useImperativeHandle, forwardRef, useRef, ForwardedRef, useState, useContext } from "react"
import { IFileog, IFileUpload,  } from "../../../utils/interfaces.util";
import useToast from "../../../hooks/useToast";

const Fileog = forwardRef((props: IFileog, ref: ForwardedRef<any>) => {

    const {
        accept,
        type,
        sizeLimit = 5,
        onSelect
    } = props;

    const KILOBYTE = 1024;
    const fileRef = useRef<HTMLInputElement>(null);

    const { toast, setToast } = useToast()
    const [file, setFile] = useState<IFileUpload | null>(null);

    useEffect(() => {

    }, [])

    const openDialog = (e?: any) => {
        if(e) { e.preventDefault() }
        fileRef.current?.click();
    }

    const getSize = (size: number): { KB: number, MB: number } => {

        const KB = parseFloat((size / KILOBYTE).toString())
        const MB = parseFloat((KB / 1000).toFixed(2))

        return { KB, MB };

    }

    const browseFile = (e: any) => {

        if (e.target.files && e.target.files[0]) {

            const fileSize = getSize(e.target.files[0].size);

            if (fileSize.MB > sizeLimit) {

                setToast({
                    ...toast,
                    show: true,
                    type: 'error',
                    message: `file cannot be more than ${sizeLimit}MB in size`
                })

            } else {

                getFileSource(e.target.files[0]);

            }

        }

        setTimeout(() => {
            setToast({ ...toast, show: false })
        }, 3500)
    }

    const getFileSource = (data: any) => {

        if (type !== 'image') {

            const fileSize = getSize(data.size);
            const ext = fileSize.MB > 0 ? 'MB' : fileSize.KB > 0 ? 'KB' : 'NA';

            setFile({
                raw: data,
                name: data.name,
                size: data.size,
                type: data.type,
                base64: '',
                parsedSize: fileSize.MB > 0 ? fileSize.MB : fileSize.KB,
                sizeExt: ext,
                dur: 0
            });

            onSelect({
                raw: data,
                name: data.name,
                size: data.size,
                type: data.type,
                base64: '',
                parsedSize: fileSize.MB > 0 ? fileSize.MB : fileSize.KB,
                sizeExt: ext,
                dur: 0
            })

        } else {

            let reader = new FileReader();
            const fileSize = getSize(data.size);
            const ext = fileSize.MB > 0 ? 'MB' : fileSize.KB > 0 ? 'KB' : 'NA';

            // as base64
            reader.onloadend = (e: any) => {

                setFile({
                    raw: data,
                    name: data.name,
                    size: data.size,
                    type: data.type,
                    base64: e.target.result,
                    parsedSize: fileSize.MB > 0 ? fileSize.MB : fileSize.KB,
                    sizeExt: ext,
                    dur: 0
                });

                onSelect({
                    raw: data,
                    name: data.name,
                    size: data.size,
                    type: data.type,
                    base64: e.target.result,
                    parsedSize: fileSize.MB > 0 ? fileSize.MB : fileSize.KB,
                    sizeExt: ext,
                    dur: 0
                })

            };
            reader.readAsDataURL(data);

        }

    }

    // expose child component functions to parent component
    useImperativeHandle(ref, () => ({
        open: openDialog,
        browse: browseFile,
    }))

    return (
        <>
            <input onChange={(e) => browseFile(e)} ref={fileRef} type="file" accept={accept.join(',')} className="hidden" />
        </>
    )
})

export default Fileog;
