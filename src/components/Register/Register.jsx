import React, { useState } from 'react'
import { Input } from '../Input'
import { useRegister } from '../../shared/hooks/useRegister'
import { emailValidationMessage, 
    passConfirmValidationMessage, 
    passwordValidationMessage, 
    usernameValidationMessage, 
    validateEmail, 
    validatePassConfirm, 
    validatePassword, 
    validateUsername,
    nameValidationMessage,
    surNameValidationMessage,
    phoneValidatonMessage,
    roleValidationMessage,
    validateName,
    validateSurName,
    validatePhone,
    validateRole} from '../../shared/validators/validator'

export const Register = ({switchAuthAndler}) => {
    const form = {
        name:{
            value: '',
            isValid: false,
            showError: false
        },
        surname:{
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
        phone:{
            value: '',
            isValid: false,
            showError: false
        },
        role:{
            value: '',
            isValid: false,
            showError: false
        },
        hotel:{
            value: '',
            isValid: false,
            showError: false
        }
    }
    const [formData, setFormData] = useState(form)
    const { register } = useRegister()
    const isSubmitButtonDisabled =  !formData.name.isValid||
                                    !formData.surname.isValid||
                                    !formData.email.isValid ||
                                    !formData.username.isValid ||
                                    !formData.password.isValid ||
                                    !formData.passwordConfirm.isValid||
                                    !formData.phone.isValid||
                                    !formData.role.isValid

    const handleSubmit = (event)=>{
        event.preventDefault()
        register(
            formData.name.value,
            formData.surname.value,
            formData.email.value,
            formData.username.value,
            formData.password.value,
            formData.phone.value,
            formData.role.value
        )
    }

    const handleValidationOnBlur = (value, field)=>{
        let isValid = false
        switch (field) {
            case 'name':
                isValid = validateName(value)
                break;
            case 'surname':
                isValid = validateSurName(value)
                break;
            case 'email':
                isValid = validateEmail(value)
                break;
            case 'username':
                isValid = validateUsername(value)
                break
            case 'password':
                isValid = validatePassword(value)
                break
            case 'passwordConfirm':
                isValid = validatePassConfirm(formData.password.value, value)
                break
            case 'phone':
                isValid = validatePhone(value)
                break;
            case 'role':
                isValid = validateRole(value)
                break;   
            default:
                break;
        }
        setFormData((prevData)=> ({
            ...prevData,
            [field]: {
                ...prevData[field],
                isValid,
                showError: !isValid
            }
        }))
    }

    const handleValueChange = (value, field)=>{
        setFormData((prevData)=> ({
            ...prevData,
            [field]: {
                ...prevData[field],
                value
            }
        }))
    }

    return (
        <div className='register-container'>
            <div className="register-title-container">
                <h2 className="register-title">Register</h2>
                <h3 className="register-subtitle">KinalCast</h3>
            </div>
            <form 
                className='auth-form' 
                action=''
                onSubmit={handleSubmit}>
                <Input 
                    field='name'
                    label='Name' 
                    onChangeHandler={handleValueChange}
                    value={formData.name.value} 
                    placeholder='Name'
                    type='text'
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.name.showError}
                    validationMessage={nameValidationMessage}
                />
                <Input 
                    field='surname'
                    label='Surname' 
                    onChangeHandler={handleValueChange}
                    value={formData.surname.value} 
                    placeholder='surname'
                    type='text'
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.surname.showError}
                    validationMessage={surNameValidationMessage}
                />
                <Input 
                    field='email'
                    label='Email' 
                    value={formData.email.value}
                    onChangeHandler={handleValueChange}
                    placeholder={formData.email.value}
                    type='email'
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.email.showError}
                    validationMessage={emailValidationMessage}
                />
                <Input 
                    field='username'
                    label='Username' 
                    onChangeHandler={handleValueChange}
                    value={formData.username.value} 
                    placeholder={formData.username.value}
                    type='text'
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.username.showError}
                    validationMessage={usernameValidationMessage}
                />
                <Input 
                    field='password'
                    label='Password' 
                    onChangeHandler={handleValueChange}
                    value={formData.password.value} 
                    type='password'
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.password.showError}
                    validationMessage={passwordValidationMessage}
                />
                <Input 
                    field='passwordConfirm'
                    label='Password Confirmation' 
                    onChangeHandler={handleValueChange}
                    value={formData.passwordConfirm.value} 
                    type='password'
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.passwordConfirm.showError}
                    validationMessage={passConfirmValidationMessage}
                />
                <Input 
                    field='phone'
                    label='Phone' 
                    onChangeHandler={handleValueChange}
                    value={formData.phone.value} 
                    placeholder='Phone'
                    type='text'
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.phone.showError}
                    validationMessage={phoneValidatonMessage}
                />
                <Input 
                    field='role'
                    label='Role' 
                    onChangeHandler={handleValueChange}
                    value={formData.role.value} 
                    placeholder='ADMIN, CLIENT o ADMIN_HOTEL'
                    type='text'
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.role.showError}
                    validationMessage={roleValidationMessage}
                />
                <button disabled={isSubmitButtonDisabled} type='submit'>Enviar</button>
            </form>
            <span onClick={switchAuthAndler} className="auth-form-switch-label">
                ¿Ya tienes una cuenta? ¡Inicia sesión acá!
            </span>
        </div>
    )
}