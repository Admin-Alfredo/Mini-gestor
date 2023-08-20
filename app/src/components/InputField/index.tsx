import { Container, Control } from "./styles";


interface IProps {
    label?: string
}
function InputField(props: IProps) {
    return (
        <Container>
            {props.label && <span>{props.label}</span>}
            <Control>
                
            </Control>
        </Container>
    )
}


export default InputField;