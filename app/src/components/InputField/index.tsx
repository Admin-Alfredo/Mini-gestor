import { Container, Control, ControlWrapper } from "./styles";


interface IProps {
    label?: string | null,
    width?: (number | string | null),
}
function InputField(props: IProps) {
    return (
        <Container  style={{width: (props.width && typeof props.width == 'number' ? props.width + 'px' : props.width )!}}>
            {props.label && <span>{props.label}</span>}
            <ControlWrapper>
                <Control {... () => {
                    props.width = null;
                    props.label = null;
                    return props;
                }}/>
            </ControlWrapper>
        </Container>
    )
 }
//  <div class="field">
//               <span style="${styles.label}">Preço</span>
//               <div class="field-control-container" style="width: 100px">
//                 <input type="number" class="field-control" data-preco/>
//               </div>
//             </div> 
//             .field-control-container {
//                 height: 40px;
//                 display: flex;
//                 border: 1px solid #919192e1;
//               }
              
//               .field-control-container>.field-control {
//                 border: none;
//                 height: 38px;
//                 outline: none;
//                 background: #ffffff;
//                 width: 100%;
//                 font-weight: 600;
//                 color: #1f1e1e;
//                 font-size: 1.4rem;
//                 outline: none;
//                 padding: 0 9px;
//               }
              
//               .field-control-container>.field-control:focus {
//                 outline: 3px solid #4f84f8;
//               }
              
//               .field-control-container>.field-control-icon {
//                 height: 40px;
//                 width: 40px;
//                 display: flex;
//                 justify-content: center;
//                 align-items: center;
//               }
              
//               .field-control-container>input.field-control:focus+.field-control-icon {
//                 display: none;
//               }

export default InputField;