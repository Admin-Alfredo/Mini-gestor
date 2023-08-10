import ChevronDown from '../../assetes/angle-down.svg'
import { Stylesheet } from '../../css-in-js'
import {
  addFieldItem,
  dropdownWorkspace,
  editHeaderText,
  inputFieldActions
} from '.'


import './styles.css'

declare interface PropsWorkspace {
  children?: Array<Function | string>
  title: string
}


export function workspace(props: PropsWorkspace): HTMLDivElement {
  const styles = Stylesheet.create({ title: { 'font-size': '1.2rem' } })

  const wrapperWorkspace: HTMLDivElement = document.createElement('div')
  wrapperWorkspace.classList.add('ws-container')
  const wsId = Date.now() + '_' + Math.floor(Math.random() * 10000)
  wrapperWorkspace.setAttribute('id', wsId)

  wrapperWorkspace.innerHTML = `
    <div  class="ws-header">
      <div class="ws-header-left">
          <h2 style="${styles.title}">${props.title}</h2>
      </div>
      <div class="ws-header-right" >
          <img src="${ChevronDown}" width="15" />
      </div>
    </div>
    <div class="ws-body">
      <div class="wrapper-field-items">
        <div class="field-item">
            <div class="field">
              <span>Preço</span>
              <div class="field-control-container" style="width: 100px">
                <input type="number" class="field-control" data-preco/>
              </div>
            </div> 
            <div class="field">
              <span>Quantidade</span>
              <div class="field-control-container" style="width: 100px">
                <input type="number" class="field-control" data-qnt/>
              </div>
            </div> 
            <div class="field">
              <span>Total</span>
              <div class="field-control-container" style="width: 100px">
                <input  class="field-control" disabled style="background:#efefef" data-result/>
              </div>
            </div> 
        </div>
      </div>
    </div>
  `

  dropdownWorkspace(wrapperWorkspace as HTMLDivElement)
  addFieldItem(wrapperWorkspace.querySelector<HTMLDivElement>('.wrapper-field-items')!)
  editHeaderText(wrapperWorkspace.querySelector<HTMLDivElement>('.ws-header-left')!)
  inputFieldActions(wrapperWorkspace as HTMLDivElement)

  return wrapperWorkspace
}