import { useContext } from 'react'
import { Resolver, useForm } from 'react-hook-form';

import { Container, View } from './styles';
import InputField, { FieldControl, LabelField } from '../InputField';
import { TProduto } from '../../entities/Produto';
import ProdutoContext from '../../context';

export interface IProps {

}
export default function FormViewProduto({ }: IProps) {
  const { dispatch } = useContext(ProdutoContext)!;

  const resolver: Resolver<TProduto> = async (values) => (
    {
      values: {
        ...values,
        qtd: Number(values.qtd),
        preco: Number(values.preco)
      },
      errors: values.nome.length < 6 ? {
        nome: { type: 'Insuficiente', message: 'nome muito curto!' }
      } : {}
    })

  const { register, handleSubmit, formState: { errors } } = useForm<TProduto>({ resolver, delayError: 1000 })


  const hendlerCreateProduto = (data: TProduto) => {
    dispatch({ tipo: 'CREATE_PRODUTO', payload: data })
  }

  return (
    <Container onSubmit={handleSubmit(hendlerCreateProduto)}>
      <View>
        <FieldControl style={{ width: 270 }}>
          <LabelField text='Produto de venda'>
            <InputField type="text" register={register('nome')} />
          </LabelField>
          <p>{errors.nome && errors.nome.message}</p>
        </FieldControl>

        <FieldControl style={{ width: 125 }}>
          <LabelField text='Preço de venda'>
            <InputField type="number" register={register('preco')} />
          </LabelField>
        </FieldControl>


        <FieldControl style={{ width: 125 }}>
          <LabelField text='Qtd de venda'>
            <InputField type="number" register={register('qtd')} />
          </LabelField>
        </FieldControl>

        <FieldControl style={{ width: 270 }}>
          <LabelField text='Cliente'>
            <InputField type="text" register={register('cliente')} />
          </LabelField>
        </FieldControl>
        <button type="submit">registrar</button>
      </View>
    </Container>
  )
}