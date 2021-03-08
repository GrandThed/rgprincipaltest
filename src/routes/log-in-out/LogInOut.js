import React, { useContext } from "react";
import CenteredContainer from "../../components/centered-container/CenteredContainer";
import { AccountManagmentContext } from "../../context/accountManagmentContext";
import './logInOut.css'
import logo from '../../shortLogo.png'

const LogInOut = () => {
  const { state, changeFieldLogIn } = useContext(AccountManagmentContext);
  const { email, password } = state.logInData;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(state);
  };

  return (
    <CenteredContainer >
      <img src={logo} alt="RG Principal Logo" className="login-logo"/>
      <form onSubmit={handleSubmit} action="" className="login-form flex-columns">
        <label className="login-label flex-columns">
          Email
          {/* El parametro "name" del input determina el campo al que se va a dirigir la funcion changeFieldLogIn (field). */}
          <input className="login-input" required type="email" value={email} name="email" onChange={changeFieldLogIn} />
        </label>
        <label className="login-label flex-columns">
          Contraseña
          <input className="login-input" required type="password" value={password} name="password" onChange={changeFieldLogIn} />
        </label>
        <input className="login-submit" type="submit" value="Entrar" />
      </form>
    </CenteredContainer>
  );
};

export default LogInOut;
