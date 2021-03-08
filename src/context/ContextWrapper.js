import React from "react";
import AccountManagmentState from "./accountManagmentContext";

const ContextWrapper = ({ children }) => {
  // Componente para mantener los contextos ordenados en un solo lugar.
  return (
    <>
      <AccountManagmentState>{children}</AccountManagmentState>
    </>
  );
};

export default ContextWrapper;
