import { Button } from "@material-ui/core";
import React from "react";
import logo from "../../assets/logo.jpg";
import { useLocalContext } from "../../context/context";
import "./style.css";
const Login = () => {
  const { login, loggedInUser } = useLocalContext();

  console.log(loggedInUser);
  return (
    <div className="login">
      <img className="login__logo" src={logo} alt="Classroom" />
      <div className="login__flex">
      <Button variant="contained" color="default" onClick={() => login()}>
        Student Login!
      </Button>
      <Button variant="contained" color="default" onClick={() => login()}>
        Teachers Login!
      </Button>
      </div>
    </div>
  );
};

export default Login;
