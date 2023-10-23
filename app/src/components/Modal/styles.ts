import styled from "styled-components";

export const ModalRoot = styled.dialog`
  border: none;
  background-color: #FFF;
  color: #242424;
  margin: 0;
  border-radius: 5px;
  width:500px;
  z-index:  99999;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
export const ModalHeader = styled.div`
  border-bottom: 1px solid #e8e8e8;
  padding: 7px 15px;
  display: flex;
  justify-content:  space-between;
  align-items: center;
  & button {
    /* margin-top: -15px; */
    margin-left: -15px;
  }

`
export const ModalContent = styled.div`

`