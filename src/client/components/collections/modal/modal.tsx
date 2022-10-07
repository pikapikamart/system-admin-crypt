import { 
  useEffect, 
  useRef } from "react"
import { 
  BaseModalWrapper, 
  ModalExit } from "./modal.styled"


type ModalProps = {
  children: React.ReactNode,
  exit: () => void
}

const Modal = ( { children, exit }: ModalProps ) => {
  const modalRef = useRef<HTMLParagraphElement | null>(null)

  useEffect(() =>{
    if ( modalRef.current ) {
      modalRef.current.focus()
    }
  }, [ ])

  return (
    <BaseModalWrapper
      role="dialog"
      tabIndex={ -1 }
      ref={ modalRef }
      aria-labelledby="modal-heading">
        <ModalExit onClick={ exit } />
        <div role="document">
          { children }
        </div>
    </BaseModalWrapper>
  )
}


export default Modal