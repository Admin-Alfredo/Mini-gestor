import Item from '../../entities/Item'
import Produto from '../../entities/Produto';
import { Container } from './styles'
interface IProps {
  header: Array<string>;
  data: Array<Item | Produto>;
  hasIndex?: boolean;
  attr: Array<string>;
}

export default function (props: IProps) {
  return (
    <Container>
      <thead>
        <tr>
          {props.hasIndex && <th>#</th>}
          {props.header.map((att, key) => <th key={key}> {att} </th>)}
        </tr>
      </thead>
      <tbody>
        {props.data.map((item: any, k1) => {
          return (
            <tr key={k1}>
              {props.hasIndex && <th scope="row">{(k1 + 1)}</th>}
              {props.attr.map((att, k2) =>
                <td key={k2}>{typeof item[att] == 'function' ? item[att]() : item[att]}</td>
              )}
            </tr>
          )
        })}
      </tbody>
    </Container>
  )
}