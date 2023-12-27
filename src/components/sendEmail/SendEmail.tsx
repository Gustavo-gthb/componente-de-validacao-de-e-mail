import { ChangeEvent, useState } from "react";
import { ContainerSendEmail, SendButton, SendForm, SendInput } from "./style";
import { useNavigate } from "react-router-dom";

const SendEmailButton: React.FC = () => {
  const [sendEmailData, setSendEmailData] = useState({
    email: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSendEmailData((sendEmailData) => ({
      ...sendEmailData,
      [e.target.name]: e.target.value,
    }));
  }; 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(sendEmailData);
    navigate("/Sucess");
  };

  return (
    <ContainerSendEmail>
      <SendForm onSubmit={handleSubmit}> 
        <p>Email address</p>
        <SendInput
          type="email"
          placeholder="email@company.com"
          name="email"
          value={sendEmailData.email}
          onChange={handleChange}
        /> 
        <SendButton type="submit">Subscribe to monthly newsletter</SendButton>
      </SendForm>
    </ContainerSendEmail>
  );
};

export default SendEmailButton;
