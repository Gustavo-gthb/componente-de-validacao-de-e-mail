import styled from "styled-components";

export const ContainerSendEmail = styled.div`
  width: 100%;
  height: 100%;
`;

export const SendForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  p {
    display: flex;
  }
`;

export const SendInput = styled.input`
  width: 300px;
  height: 40px;
  padding-left: 20px;
  border-radius: 5%;
  background-color: hsl(0, 0%, 100%);
  color: hsl(234, 29%, 20%);
`;

export const SendButton = styled.button`
  width: 325px;
  height: 40px;
  border-color: hsl(234, 29%, 20%);
  border-radius: 5%;
  background-color: hsl(234, 29%, 20%);
  color: hsl(0, 0%, 100%);
  margin-top: 20px;
`;  
