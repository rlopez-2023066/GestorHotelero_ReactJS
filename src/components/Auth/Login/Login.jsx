import React, { useState } from 'react';
import styled from 'styled-components';
import { Mail, Lock } from 'lucide-react';
import imgLogin from './../../../img/Logo_img1.jpg';
import { useLogin } from '../../../shared/hooks/useLogin';
import {
  usernameValidationMessage,  
  validatePassword,
  validateUsername,
  passwordValidationMessage
} from '../../../shared/validations/validator';

export const Login = ({ switchAuthHandler }) => {
  const { login } = useLogin();
  const [formData, setFormData] = useState({
    username: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
      value: "",
      isValid: false,
      showError: false,
    },
  });

  const isSubmitButtonDisabled = !formData.username.isValid || !formData.password.isValid;

  const onValueChange = (value, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: {
        ...prevData[field],
        value
      }
    }));
  };

  const handleValidationOnBlur = (value, field) => {
    let isValid = false;
    switch(field) {
      case 'username':
        isValid = validateUsername(value);
        break;
      case 'password':
        isValid = validatePassword(value);
        break;
      default:
        break;
    }
    setFormData((prevData) => ({
      ...prevData,
      [field]: {
        ...prevData[field],
        isValid,
        showError: !isValid
      }
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(formData.username.value, formData.password.value);
  };

  return (
    <StyledWrapper>
      <form className="form" onSubmit={handleLogin}>
        <img src={imgLogin} alt="Logo de la aplicación" className="login-logo" />
        
        <div className="flex-column">
          <label>Username</label>
        </div>
        <div className={`inputForm ${formData.username.showError ? 'input-error' : ''}`}>
          <Mail />
          <input
            type="text"
            className="input"
            placeholder="Ingrese su Username"
            value={formData.username.value}
            onChange={(e) => onValueChange(e.target.value, 'username')}
            onBlur={(e) => handleValidationOnBlur(e.target.value, 'username')}
          />
        </div>
        {formData.username.showError && (
          <div className="text-red-600 font-bold">{usernameValidationMessage}</div>
        )}
        
        <div className="flex-column">
          <label>Password</label>
        </div>
        <div className={`inputForm ${formData.password.showError ? 'input-error' : ''}`}>
          <Lock />
          <input
            type="password"
            className="input"
            placeholder="Ingrese su Contraseña"
            value={formData.password.value}
            onChange={(e) => onValueChange(e.target.value, 'password')}
            onBlur={(e) => handleValidationOnBlur(e.target.value, 'password')}
          />
        </div>
        {formData.password.showError && (
          <div className="text-red-600 font-bold">{passwordValidationMessage}</div>
        )}
        
        <button 
          className="button-submit" 
          disabled={isSubmitButtonDisabled}
        >
          Iniciar Sesión
        </button>
        
        <p className="p">
          ¿Aún no tienes cuenta?{' '}
          <span className="span" onClick={switchAuthHandler}>
            Regístrate
          </span>
        </p>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
 
  
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color:rgb(255, 255, 255);
    padding: 30px;
    width: 450px;
    border-radius: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

  ::placeholder {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .form button {
    align-self: flex-end;
  }

  .flex-column > label {
    color: #151717;
    font-weight: 600;
  }

  .inputForm {
    border: 1.5px solid #ecedec;
    border-radius: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    transition: 0.2s ease-in-out;
  }

  .input {
    margin-left: 10px;
    border-radius: 10px;
    border: none;
    width: 85%;
    height: 100%;
  }

  .input:focus {
    outline: none;
  }

  .inputForm:focus-within {
    border: 1.5px solid #2d79f3;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
  }

  .flex-row > div > label {
    font-size: 14px;
    color: black;
    font-weight: 400;
  }

  .span {
    font-size: 14px;
    margin-left: 5px;
    color: #2d79f3;
    font-weight: 500;
    cursor: pointer;
  }

  .button-submit {
    margin: 20px 0 10px 0;
    background-color: #151717;
    border: none;
    color: white;
    font-size: 15px;
    font-weight: 500;
    border-radius: 10px;
    height: 50px;
    width: 100%;
    cursor: pointer;
  }

  .button-submit:hover {
    background-color: #252727;
  }

  .p {
    text-align: center;
    color: black;
    font-size: 14px;
    margin: 5px 0;
  }

  .btn {
    margin-top: 10px;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    gap: 10px;
    border: 1px solid #ededef;
    background-color: white;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  .btn:hover {
    border: 1px solid #2d79f3;
    ;
  }`;

