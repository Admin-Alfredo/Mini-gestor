import Item from '../../entities/Item'
import Produto from '../../entities/Produto';
import { Container } from './styles'
import React, { ChangeEvent, useState } from 'react'

export interface IDoubleClickCel {
  item: (Item | Produto),
  attCol: string
  event: ChangeEvent<HTMLTableCellElement>
}
interface IProps {
  header: Array<string>;
  data: Array<Item | Produto>;
  attr: Array<string>;
  hasIndex?: boolean;
  children?: JSX.Element;
  onDoubleClickCel?: (object: IDoubleClickCel) => void;
}

export default function ({
  hasIndex,
  header,
  onDoubleClickCel,
  attr,
  data,
  children

}: IProps) {
  // const [childCell, setChildCell] = useState<React.ReactElement | null>(null)

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
            <tr key={k1}>
              {hasIndex && <th scope="row">{(k1 + 1)}</th>}
              {attr.map((att, k2) =>
                <td
                  key={k2}
                  onDoubleClick={(e: any) => {
                    if (!!onDoubleClickCel)
                      onDoubleClickCel({ attCol: att, item, event: e })
                    // else 
                  }
                  }>
                  {typeof item[att] == 'function' ? item[att]() : item[att]}
                  {children}
                </td>
              )}
            </tr>
          )
        })}
      </tbody>
    </Container>
  )
}