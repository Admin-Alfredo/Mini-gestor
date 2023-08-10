import * as Template from './template'

export function renderModal(wrapper: HTMLDivElement) {
    const TemplateModal: HTMLDialogElement = Template.modal({});

    wrapper.append(TemplateModal)
}
export function defineFnShowModal(modal: HTMLDialogElement, triggers: NodeList): void {
    const fnShowModal = () => modal.showModal();
    triggers.forEach((t) =>  t.addEventListener('click', fnShowModal))
   
}
export function defineFnCloseModal(modal: HTMLDialogElement): void {
    const fnCloseModal = () => modal.close()
    modal.querySelectorAll('[data-close]')?.forEach(t => t.addEventListener('click', fnCloseModal))
}