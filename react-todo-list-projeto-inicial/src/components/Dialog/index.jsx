import { useEffect, useRef } from "react"
import { IconClose } from "../icons/index"
import './dialog.styles.css'

export function Dialog({ isOpen, onClose, children }) {
    const dialogRef = useRef(null)

    useEffect(() => {
        if (isOpen) {
            openDialog()
        } else {
            closeDialog()
        }
    }, [isOpen])

    const openDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal()
        }
    }

    const closeDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.close()
        }
    }

    return (
        <>
            <dialog ref={dialogRef}>
                <div className="btn-close-wrapper">
                    <button className="btn-close" onClick={onClose}>
                        <IconClose />
                    </button>
                </div>
                <div className="body">
                    {children}
                </div>
            </dialog>
        </>
    )
}