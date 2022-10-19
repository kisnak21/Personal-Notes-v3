import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function RegisterInput({ register }) {
  const [name, onNameHandler] = useInput("");
  const [email, onEmailHandler] = useInput("");
  const [password, onPasswordHandler] = useInput("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    register({ name, email, password });
  };

  return (
    <form className='input-register' onSubmit={onSubmitHandler}>
      <input
        id='nama'
        type='text'
        placeholder='Nama'
        value={name}
        onChange={onNameHandler}
      />

      <input
        id='email'
        type='email'
        placeholder='Email'
        value={email}
        onChange={onEmailHandler}
      />

      <input
        type='password'
        value={password}
        placeholder='Password'
        onChange={onPasswordHandler}
      />
      <button>Register</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
