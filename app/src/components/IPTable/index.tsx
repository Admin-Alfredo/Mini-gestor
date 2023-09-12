import { ComponentProps } from 'react'
import Item from '../../entities/Item'
import Produto from '../../entities/Produto';
import { Container } from './styles'
import { ChangeEvent } from 'react'
import IEntity from '../../entities/IEntidty';

export interface IDoubleClickCel {
  item: (Item | Produto),
  colName: string
  event: ChangeEvent<HTMLTableCellElement>
}
export type IProps = ComponentProps<'table'> & {
  header: Array<string>;
  data: Array<Item | Produto>;
  attr: Array<string>;
  hasIndex?: boolean;
  onDoubleClickCel?: (object: IDoubleClickCel) => void;
  onClickRow?: (rowData: IEntity, event: any) => void;
}

export default function (props: IProps) {
  const {
    hasIndex,
    header,
    onDoubleClickCel,
    attr,
    data,
    onClickRow,

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
        {data.map((item: any, k1) => {
          return (
            <tr key={k1} onClick={(e: any) => onClickRow && onClickRow(item, e)}>
              {hasIndex && <th scope="row">{(k1 + 1)}</th>}
              {attr.map((att, k2) =>
                <td
                  key={k2}
                  onDoubleClick={(e: any) => (onDoubleClickCel && onDoubleClickCel({ colName: att, item, event: e }))
                  }>
                  {typeof item[att] == 'function' ? item[att]() : item[att]}
                </td>
              )}
            </tr>
          )
        })}
      </tbody>
    </Container>
  )
}