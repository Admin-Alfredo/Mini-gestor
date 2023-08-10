import Entity from "../../classes/Entity";
import * as Template from "./template";


export function renderWorkspaces (){

}
export function addWorkspace(buttonsAddWorkspace: NodeList, wrapper: HTMLDivElement) {
    console.log(buttonsAddWorkspace)
    const workspaceList: HTMLDivElement[] = []
    
    const fnAddWorkspace = (e: any) => {

        const TemplateWorkspace: HTMLDivElement = Template.workspace({ title: 'novo item' })
        workspaceList.push(TemplateWorkspace)

        workspaceList.forEach((ws: HTMLDivElement) => wrapper.appendChild(ws))
    }
    buttonsAddWorkspace.forEach(btn => btn.addEventListener('click', fnAddWorkspace))
    
}

export function dropdownWorkspace(wrapper: HTMLDivElement) {}

export function addFieldItem(wrapperFieldItems: HTMLDivElement) {}

export function editHeaderText(wsHeaderLeft: HTMLDivElement) {
    const title = wsHeaderLeft.querySelector('h2')

    if (!title) return;
    const saveHeaderText = (e: any) => {
        title.innerText = e.target.value.trim() == "" ? "novo item" : e.target.value.trim()
        wsHeaderLeft.replaceChild(title, e.target)

        console.log("Salvando o texto...")
    }
    const fnEditHeaderText = (e: any) => {
        const textfield: HTMLInputElement = document.createElement('input')
        textfield.value = title.textContent!

        wsHeaderLeft.replaceChild(textfield, title)
        textfield.focus()

        textfield.addEventListener('blur', saveHeaderText)
        textfield.addEventListener('keypress', (e: any) => {
            if(e.keyCode != 13) return;
            textfield.blur();
            saveHeaderText(e)
        })
    }
    title.addEventListener('dblclick', fnEditHeaderText)
}

export function inputFieldActions(wrapperFieldItems: HTMLDivElement) {
    const preco = wrapperFieldItems.querySelector<HTMLInputElement>('input[data-preco]')
    const quantidade = wrapperFieldItems.querySelector<HTMLInputElement>('input[data-qnt]')
    const result = wrapperFieldItems.querySelector<HTMLInputElement>('input[data-result]')!
    
    const entity = new Entity(
        wrapperFieldItems.getAttribute('id')!,
        Number(preco?.value! && 0),
        Number(quantidade?.value! && 0)
    )
    result.value = String(0);

    preco?.addEventListener('input', (e: any) => {
        entity.setPreco(Number(e.target.value))
        entity.recalcular()
        result.value = String(entity.getResult())
        render()
    })
    quantidade?.addEventListener('input', (e: any) => {
        entity.setQuantidade(Number(e.target.value))
        entity.recalcular()
        result.value = String(entity.getResult())
        render()
    })
    function render() {
        console.log(entity)
    }

}