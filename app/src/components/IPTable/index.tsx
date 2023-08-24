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
					{props.header.map(att => <th> {att} </th>)}
				</tr>
			</thead>
			<tbody>
				{props.data.map((item: any, key) => {
					return (
						<tr>
							{props.hasIndex && <th scope="row">{(key + 1)}</th>}
							{props.attr.map(att =>
								<td>{typeof item[att] == 'function' ? item[att]() : item[att]}</td>
							)}
						</tr>
					)
				})}
			</tbody>
		</Container>
	)
}