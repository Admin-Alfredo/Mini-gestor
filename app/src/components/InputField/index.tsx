import { UseFormRegister } from "react-hook-form";
import { Container, ControlWrapper } from "./styles";
import { ComponentProps } from 'react'


export type IProps = ComponentProps<"input"> & {
	type: 'text' | 'number' | 'email' | 'password';
	value?: string | number;
	placeholder?: string;
	error?: boolean;
	name?: string;
	disabled?: boolean;
	register?: any
}

export type IPropsField = ComponentProps<"div"> & {
	width?: (number | string | null);
	children: JSX.Element | JSX.Element[]
}

// <FieldControl width='100%'>
// 	<>
// 		<LabelField _for='nome_de_produto' text='Nome do produto' />
// 		<InputField type="text" />
// 	</>
// </FieldControl>

// <FieldControl width={100}>
// 		<LabelField  text='Preço de compra'>
// 			<InputField type="text" register={register('preco_de_compra')}/>
// 		</LabelField>
// </FieldControl>

export type IPropsLabel = ComponentProps<"label"> & {
	_for?: string;
	text: string;
	children?: JSX.Element;
}
export const LabelField = (props: IPropsLabel) => {
	const { _for, text, children } = props;
	return (
		<label htmlFor={_for && _for}>
			{text && text}
			{children && children}
		</label>
	)
}
export const FieldControl = (props: IPropsField) => {
	const { children } = props
	return (
		<Container {...props} >
			{children}
		</Container>
	)
}
export default function InputField(props: IProps) {
	const {register} = props
	return (
		<>
			< ControlWrapper>
				<input  {...props}  {...register}/>
			</ControlWrapper >
		</>
	)
}