import './styles.css'
import TimesIconImg from '../../assetes/times.svg'

interface Props {

}
export function modal(props: Props): HTMLDialogElement {
  const TemplateModal: HTMLDialogElement = document.createElement('dialog')
  TemplateModal.innerHTML = `
   <div class="modal-header"> 
      <h3>Modal</h3>
      <button class="button icon-close" data-close>
        <img src="${TimesIconImg}" width="18"/>
      </button>
   </div>
   <div class="modal-body">
      
      <div class="wrapper-cards">
        <div class="card">
          <span class="card-value">45.000 AKZ</span>
          <span class="card-label">Preço de compra</span>
        </div>
        <div class="card">
          <span class="card-value">20.000 AKZ</span>
          <span class="card-label">Margen de lucro</span>
        </div>
        <div class="card">
          <span class="card-value">20.000 AKZ</span>
          <span class="card-label">Margen de lucro</span>
        </div>
        <div class="card">
          <span class="card-value">20.000 AKZ</span>
          <span class="card-label">Margen de lucro</span>
        </div>
      </div>
   </div>
  `
  return TemplateModal
}
