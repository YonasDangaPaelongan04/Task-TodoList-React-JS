import React, { useState, useContext } from "react";
import { AuthContext } from "../context/Auth";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";
import Input from "../components/Input";
const baseUrl = "https://my-udemy-api.herokuapp.com/api/v1/";

const Auth = () => {
  const { isAuthenticated, loginSuccess, loginFailed } =
    useContext(AuthContext);
  const { login, setLogin } = useState(true);
  const { error, setError } = useState("");
  const { iserror, setIsError } = useState(false);
  const { isLoading, setIsLoading } = useState(false);
  const { name, setName } = useState("");
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");
  const isLogin = () => setLogin(!login);
  const userLogin = async () => {
    setIsLoading(true);
    const user = {
      email,
      password,
    };
    try {
      const res = await axios.post(`${baseUrl}/user/signin`, user);
      localStorage.setItem("token", res.data.token);
      setEmail("");
      setPassword("");
      setIsLoading("false");
      loginSuccess();
    } catch (err) {
      setIsError(true);
      setError(err.response.data.errors);
      setIsLoading("false");
      setEmail("");
      setPassword("");
      setTimeout(() => {
        setIsError(false);
        setError("");
        loginFailed();
      }, 2000);
    }
  };

  const userRegister = async () => {
    setIsLoading(true);
    const user = {
      email,
      password,
      name,
    };
    try {
      const res = await axios.post(`${baseUrl}/user/signup`, user);
      localStorage.setItem("token", res.data.token);
      setEmail("");
      setName("");
      setPassword("");
      loginSuccess();
      setIsLoading("false");
    } catch (err) {
      setIsError(true);
      setError(err.response.data.errors);
      setIsLoading("false");
      setEmail("");
      setName("");
      setPassword("");
      setTimeout(() => {
        setIsError(false);
        setError("");
        loginFailed();
      }, 2000);
    }
  };
  if (isAuthenticated) {
    return <Navigate replace to="/task" />;
  }
  return (
    <div className="box">
      <h3 className="head"> {login ? "Login" : "Register"} </h3>
      <div>
        {!login && (
          <Input
            placeholder="name"
            type="text"
            value={{ name }}
            change={(e) => setName(e.target.value)}
          />
        )}
        <Input
          type="email"
          value={{ email }}
          placeholder="email"
          change={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          value={{ password }}
          placeholder="Password"
          change={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="btn-grup">
        {iserror && (
          <div>
            {error &&
              error.map((item, index) => (
                <p key={index} className="error">
                  {item.msg}
                </p>
              ))}
          </div>
        )}
        <Button
          variant="primary"
          load={isLoading}
          text={login ? "Login" : "Register"}
          action={login ? userLogin : userRegister}
        />
      </div>
      {login ? (
        <div className="paragraph">
          <p>
            Sudah punya akun ? Silahkan
            <span onClick={isLogin} className="textBtn">
              Register
            </span>
          </p>
        </div>
      ) : (
        <div className="paragraph">
          <p>
            Sudah punya akun ? Silahkan
            <span className="textBtn" onClick={isLogin}>
              Login
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Auth;
