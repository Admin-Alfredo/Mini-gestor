import { Container, Control, ControlWrapper } from "./styles";
import { ComponentProps } from 'react'
import { ChangeEvent, FocusEvent } from 'react'


export type IProps = ComponentProps<"input"> & {
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
	onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
}
export default function InputField(props: IProps) {
	
	// console.log("REGISTER: ", )
	return (
		<Container style={{ width: (props.width && typeof props.width == 'number' ? props.width + 'px' : props.width)! }}>
			{props.label && <span>{props.label}</span>}
			<ControlWrapper>
				<Control
					{...props}
					type={props.type}
					value={props.value}
					name={props.name}
					placeholder={props.placeholder}
					disabled={props.disabled}
					onChange={props.onChange}
					onBlur={props.onBlur}
					onFocus={props.onFocus}
					{...props.register} />
			</ControlWrapper>
		</Container>
	)
}