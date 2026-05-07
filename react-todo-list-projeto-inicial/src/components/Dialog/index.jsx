import { useRef } from "react"
import './dialog.styles.css'

export function Dialog() {
    const dialogRef = useRef(null)

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
            <button onClick={openDialog}>Show the dialog</button>
            <dialog ref={dialogRef}>
                <p>This is the dialog content.</p>
                <button onClick={closeDialog}>Close</button>
            </dialog>
        </>
    )
}