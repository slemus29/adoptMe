import { PropsWithChildren, useEffect, useRef,  } from "react";
import { createPortal } from "react-dom";

const Modal = ({children}: PropsWithChildren) => {
    const elRef = useRef<HTMLElement | null>(null)
    if(!elRef.current){
        elRef.current = document.createElement('div')
    }

    useEffect(()=> {
        const modalRoot = document.getElementById('modal')
        if(elRef.current){
            modalRoot?.appendChild(elRef.current)
        }

        return () => {
            if(elRef.current) {
                modalRoot?.removeChild(elRef.current)
            }
        }
    }, [])

    return createPortal(<div>{children}</div>, elRef.current)

}

export default Modal;