import { TDocumentDefinitions, TFontDictionary } from "pdfmake/interfaces";
import { TContextProvider, TStateContext } from "../../context";
import PdfPrinter from "pdfmake/build/pdfmake.min";

export const handlerInputTextForSearchProduto = (e: any, context: TContextProvider) => {
  const inputSearch: HTMLInputElement = e.currentTarget
  if (inputSearch.value.trim() == "")
    context.dispatch({ tipo: 'INSERT_PRODUTO_SEARCED', payload: context.state.produtos })
  else {
    context.dispatch({
      tipo: 'INSERT_PRODUTO_SEARCED',
      payload: context.state.produtos.filter(produto => produto.getNome().includes(inputSearch.value))
    })
  }
}

export const handlerFocusInputSearchProduto = (e: any, context: TContextProvider, setIsSearch: React.Dispatch<React.SetStateAction<boolean>>) => {
  const inputSearch: HTMLInputElement = e.currentTarget
  if (inputSearch.value.trim() == "")
    context.dispatch({ tipo: 'INSERT_PRODUTO_SEARCED', payload: context.state.produtos })

  inputSearch.selectionStart = 0
  inputSearch.selectionEnd = inputSearch.value.length
  setIsSearch(true)
}
export const handlerBlurInputSearchProduto = (e: any, setIsSearch: React.Dispatch<React.SetStateAction<boolean>>) => {
  const inputSearch: HTMLInputElement = e.currentTarget
  if (inputSearch.value.trim() == "")
    setIsSearch(false)
}


export const handlerClickGeneratorPdf = (state: TStateContext) => {

  // const printer = new PdfPrinter({

  // })
  const pdfDefinations: TDocumentDefinitions = {
    defaultStyle:{ font: 'Times'},
    content: [],
    header: [{  text: "Produto gerando com successo!", margin: [20, 10, 10, 10] }],
  };
  const fontDic: TFontDictionary = {
    'Helvetica': {
      normal: 'Helvetica',
      bold: 'Helvetica-Bold',
      italics: 'Helvetica-Italic',
    },
    'Times':{
      normal: 'Times-Roman'
    }
  }
  // PdfPrinter.fonts()
  PdfPrinter.createPdf(pdfDefinations, undefined, fontDic).download('relatorio.pdf')
  // const pdfDoc = printer.createPdfKitDocument(pdfDefinations)  
  // pdfDoc.
  // console.log(pdfDoc)
  // pdfDoc.pipe(new WritableStream())
  // alert("PDF GENERATE!")
}