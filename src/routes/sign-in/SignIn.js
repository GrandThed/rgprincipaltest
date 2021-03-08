import React, { useContext } from "react";
import CenteredContainer from "../../components/centered-container/CenteredContainer";
import { AccountManagmentContext } from "../../context/accountManagmentContext";
import "./signIn.css";

const SignIn = () => {
  const { state, changeFieldSignIn } = useContext(AccountManagmentContext);
  const { username, email, password, country } = state.signInData;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(state);
  };
  return (
    <CenteredContainer>
      <form onSubmit={handleSubmit} action="" className="login-form flex-columns">
        <label className="login-label flex-columns">
          Nombre
          {/* value y name tienen que ser iguales */}
          <input className="login-input" type="text" value={username} name="username" onChange={changeFieldSignIn} />
        </label>
        <label className="login-label flex-columns">
          Email
          {/* El parametro "name" del input determina el campo al que se va a dirigir la funcion changeFieldLogIn (field). */}
          <input className="login-input" type="email" value={email} name="email" onChange={changeFieldSignIn} />
        </label>
        <label className="login-label flex-columns">
          Contraseña
          <input className="login-input" type="password" value={password} name="password" onChange={changeFieldSignIn} />
        </label>
        <label className="login-label flex-columns">
          Pais
          <select className="login-input" value={country} name="country" onChange={changeFieldSignIn}>
            <option value="Argentina">Argentina</option>
            <option selected value="Chile">Chile</option>
            <option value="Colombia">Colombia</option>
            <option value="Perú">Perú</option>
          </select>
        </label>
        <input className="login-submit" type="submit" value="Entrar" />
      </form>
    </CenteredContainer>
  );
};

export default SignIn;
