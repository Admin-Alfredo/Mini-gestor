import './style.css';
import MiniGestorImg from './assetes/store-manager.png';
import SearchIconImg from './assetes/search.svg';
import PlusIconImg from './assetes/plus.svg';
import CloneIconImg from './assetes/clone.svg';

import { addWorkspace } from './setups/workspace/index.ts'
import { defineFnCloseModal, renderModal } from './setups/modalResult/index.ts';
import { defineFnShowModal } from './setups/modalResult';

const App = document.querySelector('#app')
App!.innerHTML = `
  <div class="container">
    <header></header>
    <div class="hero">
      <div> 
        <img src="${MiniGestorImg}" width="200" />
      </div>
      <div>
        <h1>Gere o seu negócio com<br/> Mini Gestor</h1>      
        <div id="wrapper-fields"></div>
        
      </div>
    </div>
   
    <main>
      <div class="wrapper-modal"></div>
      <div class="wrapper-search-area">
        <input id="searchfieldWorkspace" type="text" placeholder="pesquisar workspace"/>
        <div class="search-area-icon">
          <img src="${SearchIconImg}" width="20"/> 
        </div>
      </div>
      <div class="wrapper-actions">
        <button  class="button link" data-add-workspace> Adicionar item</button>
        <button  class="button link" data-show-modal>calcular</button>
      </div>
      <div class="wrapper-actions-fixed">
        <button  class="button rounded-full link" data-add-workspace title="adicionar item"> 
        <img src="${PlusIconImg}" width="20"/>
        </button>
        <button  class="button rounded-full link" data-show-modal title="mostrar resultados">
          <img src="${CloneIconImg}" width="20"/>  
        </button>
      </div>
      <div id="wrapperWrokspace"></div>
      
    </main>
  </div>
`

addWorkspace(
  App?.querySelectorAll('[data-add-workspace]')! as NodeList,
  App?.querySelector<HTMLDivElement>('#wrapperWrokspace')!
)
renderModal(App?.querySelector('.wrapper-modal')!)
defineFnShowModal(
  App?.querySelector('.wrapper-modal')!.querySelector('dialog')!,
  App?.querySelectorAll('[data-show-modal]')! as NodeList
)
defineFnCloseModal(App?.querySelector('.wrapper-modal')!.querySelector('dialog')!)