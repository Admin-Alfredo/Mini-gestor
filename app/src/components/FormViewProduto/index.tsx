import { useContext } from 'react'
import { Resolver, useForm } from 'react-hook-form';

import { Container, View } from './styles';
import InputField, { FieldControl, LabelField } from '../InputField';
import { TProduto } from '../../entities/Produto';
import ProdutoContext from '../../context';
import { Button } from 'reactstrap';

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
      errors:  {
        nome: values.nome.length > 6 ? { type: 'Insuficiente', message: 'nome muito curto!' }: null
      } 
    })

  const { register, handleSubmit, formState: { errors } } = useForm<TProduto>({ resolver, delayError: 1000 })


  const hendlerCreateProduto = (data: TProduto) => {
    dispatch({ tipo: 'CREATE_PRODUTO', payload: data })
  }

  return (
    <Container onSubmit={handleSubmit(hendlerCreateProduto)}>
      <View>
        <FieldControl style={{ width: '100%' }}>
          <LabelField text='Produto de venda'>
            <InputField type="text" register={register('nome')} />
          </LabelField>
          <p style={{ color: 'red' }}>{errors.nome && errors.nome.message}</p>
        </FieldControl>
        <div style={{ width: '100%', display: 'flex', gap: 15 }}>
          <FieldControl style={{ width: '50%' }}>
            <LabelField text='Preço de venda'>
              <InputField type="number" register={register('preco')} />
            </LabelField>
          </FieldControl>


          <FieldControl style={{ width: '50%' }}>
            <LabelField text='Qtd de venda'>
              <InputField type="number" register={register('qtd')} />
            </LabelField>
          </FieldControl>
        </div>

        <FieldControl style={{ width: '100%' }}>
          <LabelField text='Cliente'>
            <InputField type="text" register={register('cliente')} />
          </LabelField>
        </FieldControl>
        <div style={{ width: '100%', display: 'flex', gap: 15 }}>
          <Button style={{ borderRadius: 0 }}>registrar e fechar</Button>
          <Button style={{ borderRadius: 0 }} color='danger'>fechar</Button>
        </div>
      </View>
    </Container>
  )
}