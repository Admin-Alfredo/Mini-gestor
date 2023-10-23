import React, { Children, useEffect, useState } from "react";
import { ModalRoot, ModalHeader, ModalContent } from "./styles";
import { getRandomId } from "../../util";

export type IProps = {
  children?: React.ReactNode
}

export type IPropsRoot = IProps & {
  isOpen?: boolean;
}
export type IPropsHeader = IProps & {
  title: string;
}

export function Root({ children, isOpen }: IPropsRoot) {
  const [modalId] = useState<string>(getRandomId())
  useEffect(() => {
    const modal = document.querySelector<HTMLDialogElement>(`#modal-${modalId}`)
    if (isOpen)
      modal?.showModal()
    else
      modal?.close()

  }, [modalId, isOpen])
  return (
    <ModalRoot id={`modal-${modalId}`}>{children}</ModalRoot>
  )
}
export function Header({ title }: IPropsHeader) {
  return (
    <ModalHeader>
      <strong>{title}</strong>
    </ModalHeader>
  )
}

export function Content(props: IProps) {
  return (
    <ModalContent {...props}>{props.children}</ModalContent>
  )
}