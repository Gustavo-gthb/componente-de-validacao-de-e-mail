import { useState } from "react";
import "./App.css";
import { EmailProvider } from "./context/EmailContext";
import RouterController from "./routes";

function App() {
  return (
    <>
      <EmailProvider>
        <RouterController />
      </EmailProvider>
    </>
  );
}

export default App;
