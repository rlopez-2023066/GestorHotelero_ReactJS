import { 
  usernameValidationMessage,
  emailValidationMessage,
  validateEmail,
  validatePassword,
  validateUsername,
  passwordValidationMessage
 } from '../../shared/validators/validator.js';
import { Input } from '../Input.jsx'
import { useState } from 'react';
import { useLogin } from '../../shared/hooks/useLogin.jsx'

export const Login = ({switchAuthHandler}) => {
  const { login } = useLogin()
  const [formData, setFormData] = useState(
    {
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
    }
  );
  const isSubmitButtonDisable = !formData.username.isValid ||
                                !formData.password.isValid

  const onValueChange = (value, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: {
        ...prevData[field],
        value
      }
    }))
  }

  const handleValidationOnBlur = (value, field) => {
    let isValid = false
    switch(field) {
      case 'username':
        isValid = validateUsername(value)
        break
      case 'password':
        isValid = validatePassword(value)
        break
      default:
        break
    }
    setFormData((prevData) => ({
      ...prevData,
      [field]: {
        ...prevData[field],
        isValid,
        showError: !isValid
      }
    }))
  }

  const handleLogin = (e) => {
    e.preventDefault()
    login(
      formData.username.value,
      formData.password.value
    )
  }
  
  return (
    <div className="login-container">
      <div className="login-title-container">
        <h2 className="login-title">Login</h2>
        <h3 className="login-subtitle">Void - Vibes</h3>
      </div>
      <form 
        name='form1'
        className="auth-form"
        onSubmit={handleLogin}
      >
        <Input 
          field='username'
          label='Username'
          value={formData.username.value}
          onChangeHandler={onValueChange}
          type='text'
          onBlurHandler={handleValidationOnBlur}
          showErrorMessage={formData.username.showError}
          validationMessage={usernameValidationMessage}
        />

        <Input 
          field='password'
          label='Password'
          value={formData.password.value}
          onChangeHandler={onValueChange}
          type='password'
          onBlurHandler={handleValidationOnBlur}
          showErrorMessage={formData.password.showError}
          validationMessage={passwordValidationMessage}
        />
        <button disabled={isSubmitButtonDisable}>
          LogIn
        </button>
      </form>
      <span onClick={switchAuthHandler} className="auth-form-switch-label">
        ¿Aún no tienes una cuenta? ¡Registrate...!
      </span>
    </div>
  )
}