import { useContext } from 'react'
import { Resolver, useForm } from 'react-hook-form';
import { Container, View } from './styles';
import InputField, { FieldControl, LabelField } from '../InputField';
import { TItem } from '../../entities/Item';
import ProdutoContext from '../../context';

export interface IProps {

}
export default function FormViewItem({ }: IProps) {
  const resolver: Resolver<TItem> = async (values) => (
    {
      values: {
        ...values,
        qtd: Number(values.qtd),
        preco: Number(values.preco),
        unidade: Number(values.unidade),
        precoUnitario: 0
      }, errors: {}
    }
  )

  const { state, dispatch } = useContext(ProdutoContext)!;
  const { register, handleSubmit } = useForm<TItem>({ resolver })

  const hendlerCreateItem = (data: TItem) => {
    if (!state.produtoSelecionado) return;

    dispatch({
      tipo: 'INSERT_ITEM_PRODUTO',
      id: state.produtoSelecionado.getId(),
      payload: data
    })
  }

  return (
    <Container onSubmit={handleSubmit(hendlerCreateItem)}>
      <View>
        <FieldControl style={{ width: 270 }}>
          <LabelField text='Nome do produto'>
            <InputField type="text" register={register('nome')} />
          </LabelField>
        </FieldControl>

        <FieldControl style={{ width: 125 }}>
          <LabelField text='Preço de compra'>
            <InputField type="number" register={register('preco')} />
          </LabelField>
        </FieldControl>

        <FieldControl style={{ width: 125 }}>
          <LabelField text='Qtd de compra'>
            <InputField type="number" register={register('qtd')} />
          </LabelField>
        </FieldControl>


        <FieldControl style={{ width: 125 }}>
          <LabelField text='unidade'>
            <InputField type="number" register={register('unidade')} />
          </LabelField>
        </FieldControl>

        <FieldControl style={{ width: 125 }}>
          <LabelField text='Preço unitário'>
            <InputField type="number" register={register('precoUnitario')} />
          </LabelField>
        </FieldControl>

        <FieldControl style={{ width: '100%' }}>
          <LabelField text='Fornecedor'>
            <InputField type="text" register={register('fornecedor')} />
          </LabelField>
        </FieldControl>
        <button type="submit">registrar</button>
      </View>
    </Container>
  )
}