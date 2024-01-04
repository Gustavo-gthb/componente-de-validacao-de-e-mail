import { useNavigate } from "react-router-dom";
import IconSucess from "../../assets/images/iconSucess";
import {
  DismissButton,
  DismissForm,
  IconContainer,
  LetterContainer,
  SucessContainer,
} from "./style";

interface SucessProps {
  sendEmailData: { email: string };
}

const Sucess: React.FC <SucessProps> = ({ sendEmailData }) => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate("/");
  };

  return (
    <>
      <SucessContainer>
        <IconContainer>
          <IconSucess />
        </IconContainer>
        <LetterContainer>
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirm email has been sent to {sendEmailData.email}. Please open it and click
            the button inside to confirm your subscripition.
          </p>
        </LetterContainer>
        <DismissForm onSubmit={handleSubmit}>
          <DismissButton type="submit">Dismiss message</DismissButton>
        </DismissForm>
      </SucessContainer>
    </>
  );
}

export default Sucess;
