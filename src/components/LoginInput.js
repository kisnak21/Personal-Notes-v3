import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function LoginInput({ login }) {
  const [email, onEmailHandler] = useInput("");
  const [password, onPasswordHandler] = useInput("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    login({ email, password });
  };

  return (
    <form className='input-login' onSubmit={onSubmitHandler}>
      <input
        id='email'
        type='email'
        value={email}
        onChange={onEmailHandler}
        required
      />
      <input
        type='password'
        value={password}
        onChange={onPasswordHandler}
        required
      />
      <button>Login</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
