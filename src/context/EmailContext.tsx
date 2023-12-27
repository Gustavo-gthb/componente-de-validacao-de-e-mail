import { ChangeEvent, createContext, useState } from "react";

export interface EmailProviderProps {
  value?: string;
  children?: React.ReactNode;
  e?: ChangeEvent<HTMLInputElement>;
}

export interface EmailContextProps {
  email: string;
  updateEmail: (e: string) => void;
}

export const EmailContext = createContext<EmailContextProps | undefined>(undefined);

export const EmailProvider: React.FC <EmailProviderProps> = ({children}) => {
  const [sendEmailData, setSendEmailData] = useState({
    email: "",
  });

  const updateEmail = (newEmail: string) => {
    setSendEmailData((prevData) => ({
      ...prevData,
      email: newEmail,
    }));

  }
  const contextValue: EmailContextProps = {
    email: sendEmailData.email,
    updateEmail,
  }

  return (
    <EmailContext.Provider value={contextValue}>{children}</EmailContext.Provider>
  );  
};
