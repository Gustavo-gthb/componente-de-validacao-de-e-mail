import styled from "styled-components";

export const SucessContainer = styled.div`
  border: 1px solid white;
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 5%;
  padding: 10px 25px;
`;

export const IconContainer = styled.div`
  padding: 5px 5px;
`;

export const LetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: right;

  h1 {
    padding-right: 120px;
  }
`;

export const DismissButton = styled.button`
  padding: 10px 120px;
  border: none  ;
  background-color: hsl(234, 29%, 20%);
`;

export const DismissForm = styled.form``;
