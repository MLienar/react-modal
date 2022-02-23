import React, { useState } from 'react'
import "./Modal.css"

interface Props {
    children: React.ReactNode
}

export default function Modal(props: Props) {
    const [visible, setVisible] = useState(true)

    const toggleVisible = () => {
        setVisible(!visible)
    }

    const noPropag = (e: any) => {
        e.stopPropagation()
    }

    if (visible) {
        return (
            <div onClick={toggleVisible} className="modal-window">
                <div onClick={noPropag} className="modal-container">
                    <span onClick={toggleVisible} className="modal-closer"></span>
                    {props.children}
                </div>
            </div>
        )
    } else {
        return null
    }
}
