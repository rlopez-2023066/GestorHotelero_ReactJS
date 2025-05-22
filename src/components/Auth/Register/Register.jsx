import React, { useState } from 'react';
import styled from 'styled-components';
import { Mail, Lock, User, Phone } from 'lucide-react';
import imgLogin from './../../../img/Logo_img1.jpg';
import { useRegister } from '../../../Shared/hooks/useRegister';
import {
  validateName,
  validateSurName,
  validateEmail,
  validateUsername,
  validatePassword,
  validatePassConfirm,
  validatePhone,
  nameValidationMessage,
  surNameValidationMessage,
  emailValidationMessage,
  usernameValidationMessage,
  passwordValidationMessage,
  passConfirmValidationMessage,
  phoneValidationMessage
} from '../../../Shared/validations/validator';

export const Register = ({ switchAuthHandler }) => {
  const initialForm = {
    name: {
      value: '',
      isValid: false,
      showError: false
    },
    surname: {
      value: '',
      isValid: false,
      showError: false
    },
    email: {
      value: '',
      isValid: false,
      showError: false
    },
    username: {
      value: '',
      isValid: false,
      showError: false
    },
    password: {
      value: '',
      isValid: false,
      showError: false
    },
    passwordConfirm: {
      value: '',
      isValid: false,
      showError: false
    },
    phone: {
      value: '',
      isValid: false,
      showError: false
    }
  };

  const [formData, setFormData] = useState(initialForm);
  const { register } = useRegister();

  const isSubmitButtonDisabled = !formData.name.isValid ||
                                !formData.surname.isValid ||
                                !formData.email.isValid ||
                                !formData.username.isValid ||
                                !formData.password.isValid ||
                                !formData.passwordConfirm.isValid ||
                                !formData.phone.isValid;

  const handleSubmit = (event) => {
    event.preventDefault();
    register(
      formData.name.value,
      formData.surname.value,
      formData.email.value,
      formData.username.value,
      formData.password.value,
      formData.phone.value
    );
  };

  const handleValidationOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case 'name':
        isValid = validateName(value);
        break;
      case 'surname':
        isValid = validateSurName(value);
        break;
      case 'email':
        isValid = validateEmail(value);
        break;
      case 'username':
        isValid = validateUsername(value);
        break;
      case 'password':
        isValid = validatePassword(value);
        break;
      case 'passwordConfirm':
        isValid = validatePassConfirm(formData.password.value, value);
        break;
      case 'phone':
        isValid = validatePhone(value);
        break;
      default:
        break;
    }
    setFormData(prevData => ({
      ...prevData,
      [field]: {
        ...prevData[field],
        isValid,
        showError: !isValid
      }
    }));
  };

  const handleValueChange = (value, field) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: {
        ...prevData[field],
        value
      }
    }));
  };

  return (
    <StyledWrapper>
      <form className="form" onSubmit={handleSubmit}>
        <img src={imgLogin} alt="Logo de la aplicación" className="login-logo" />
        
        {/* Nombre */}
        <div className="flex-column">
          <label>Nombre</label>
        </div>
        <div className={`inputForm ${formData.name.showError ? 'input-error' : ''}`}>
          <User />
          <input
            type="text"
            className="input"
            placeholder="Ingrese su Nombre"
            value={formData.name.value}
            onChange={(e) => handleValueChange(e.target.value, 'name')}
            onBlur={(e) => handleValidationOnBlur(e.target.value, 'name')}
          />
        </div>
        {formData.name.showError && (
          <div className="error-message">{nameValidationMessage}</div>
        )}

        {/* Apellido */}
        <div className="flex-column">
          <label>Apellido</label>
        </div>
        <div className={`inputForm ${formData.surname.showError ? 'input-error' : ''}`}>
          <User />
          <input
            type="text"
            className="input"
            placeholder="Ingrese su Apellido"
            value={formData.surname.value}
            onChange={(e) => handleValueChange(e.target.value, 'surname')}
            onBlur={(e) => handleValidationOnBlur(e.target.value, 'surname')}
          />
        </div>
        {formData.surname.showError && (
          <div className="error-message">{surNameValidationMessage}</div>
        )}

        {/* Email */}
        <div className="flex-column">
          <label>Correo Electrónico</label>
        </div>
        <div className={`inputForm ${formData.email.showError ? 'input-error' : ''}`}>
          <Mail />
          <input
            type="email"
            className="input"
            placeholder="Ingrese su Correo Electrónico"
            value={formData.email.value}
            onChange={(e) => handleValueChange(e.target.value, 'email')}
            onBlur={(e) => handleValidationOnBlur(e.target.value, 'email')}
          />
        </div>
        {formData.email.showError && (
          <div className="error-message">{emailValidationMessage}</div>
        )}

        {/* Username */}
        <div className="flex-column">
          <label>Nombre de Usuario</label>
        </div>
        <div className={`inputForm ${formData.username.showError ? 'input-error' : ''}`}>
          <User />
          <input
            type="text"
            className="input"
            placeholder="Ingrese su Nombre de Usuario"
            value={formData.username.value}
            onChange={(e) => handleValueChange(e.target.value, 'username')}
            onBlur={(e) => handleValidationOnBlur(e.target.value, 'username')}
          />
        </div>
        {formData.username.showError && (
          <div className="error-message">{usernameValidationMessage}</div>
        )}

        {/* Contraseña */}
        <div className="flex-column">
          <label>Contraseña</label>
        </div>
        <div className={`inputForm ${formData.password.showError ? 'input-error' : ''}`}>
          <Lock />
          <input
            type="password"
            className="input"
            placeholder="Ingrese su Contraseña"
            value={formData.password.value}
            onChange={(e) => handleValueChange(e.target.value, 'password')}
            onBlur={(e) => handleValidationOnBlur(e.target.value, 'password')}
          />
        </div>
        {formData.password.showError && (
          <div className="error-message">{passwordValidationMessage}</div>
        )}

        {/* Confirmar Contraseña */}
        <div className="flex-column">
          <label>Confirmar Contraseña</label>
        </div>
        <div className={`inputForm ${formData.passwordConfirm.showError ? 'input-error' : ''}`}>
          <Lock />
          <input
            type="password"
            className="input"
            placeholder="Confirme su Contraseña"
            value={formData.passwordConfirm.value}
            onChange={(e) => handleValueChange(e.target.value, 'passwordConfirm')}
            onBlur={(e) => handleValidationOnBlur(e.target.value, 'passwordConfirm')}
          />
        </div>
        {formData.passwordConfirm.showError && (
          <div className="error-message">{passConfirmValidationMessage}</div>
        )}

        {/* Teléfono */}
        <div className="flex-column">
          <label>Teléfono</label>
        </div>
        <div className={`inputForm ${formData.phone.showError ? 'input-error' : ''}`}>
          <Phone />
          <input
            type="text"
            className="input"
            placeholder="Ingrese su Teléfono"
            value={formData.phone.value}
            onChange={(e) => handleValueChange(e.target.value, 'phone')}
            onBlur={(e) => handleValidationOnBlur(e.target.value, 'phone')}
          />
        </div>
        {formData.phone.showError && (
          <div className="error-message">{phoneValidationMessage}</div>
        )}

        <button 
          className="button-submit" 
          type="submit"
          disabled={isSubmitButtonDisabled}
        >
          Registrarse
        </button>
        
        <p className="p">
          ¿Ya tienes una cuenta?{' '}
          <span className="span" onClick={switchAuthHandler}>
            Inicia Sesión
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
    gap: 15px;
    background-color: #ffffff;
    padding: 30px;
    width: 450px;
    border-radius: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, 
                Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .login-logo {
    width: 150px;
    height: auto;
    margin: 0 auto 20px;
    display: block;
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

  .inputForm.input-error {
    border-color: #ff4d4f;
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

  .error-message {
    color: #ff4d4f;
    font-size: 12px;
    margin-top: -10px;
    margin-bottom: 5px;
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
    transition: background-color 0.2s;

    &:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
  }

  .button-submit:hover:not(:disabled) {
    background-color: #252727;
  }

  .p {
    text-align: center;
    color: black;
    font-size: 14px;
    margin: 5px 0;
  }
`;

