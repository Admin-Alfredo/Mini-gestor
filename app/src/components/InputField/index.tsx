import { Container, Control, ControlWrapper } from "./styles";
import { ChangeEvent, FC } from 'react'

interface IProps {
	type: 'text' | 'number' | 'email' | 'password';
	label?: string | null;
	width?: (number | string | null);
	value?: string | number;
	placeholder?: string;
	error?: boolean;
	name?: string;
	disabled?: boolean;
	register?: any;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
	onFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export default function InputField(props: IProps) {
	console.log("REGISTER: ", props.register)
	return (
		<Container style={{ width: (props.width && typeof props.width == 'number' ? props.width + 'px' : props.width)! }}>
			{props.label && <span>{props.label}</span>}
			<ControlWrapper>
				<Control
					type={props.type}
					value={props.value}
					name={props.name}
					placeholder={props.placeholder}
					disabled={props.disabled}

					onChange={props.onChange}
					onBlur={props.onBlur}
					onFocus={props.onFocus}
					{...props.register}
				/>
			</ControlWrapper>
		</Container>
	)
}