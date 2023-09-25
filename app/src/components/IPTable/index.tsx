import { ComponentProps, ReactNode } from 'react'
import Item from '../../entities/Item'
import Produto from '../../entities/Produto';
import { Container } from './styles'



export type IProps = ComponentProps<'table'> & {
  header: Array<string>;
  data: Array<Item | Produto>;
  hasIndex?: boolean;
  render: ((param: (Item | Produto), index?: number, items?: Array<(Item | Produto)>) => ReactNode);
}

export default function (props: IProps) {
  const {
    hasIndex,
    header,
    data,
    render
  } = props;

  return (
    <Container>
      <thead>
        <tr>
          {hasIndex && <th>#</th>}
          {header.map((att, key) => <th key={key}> {att} </th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((param: (Item | Produto), index) => render(param, index, data))}
      </tbody>
    </Container>
  )
}