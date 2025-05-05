//Crear todas las validaciones de Campos

export const validateName = (name)=>{
    const regex = /^\S{3,16}$/
    return regex.test(name)
}

export const validateSurName = (name)=>{
    const regex = /^\S{3,16}$/
    return regex.test(name)
}


/* -------------------------- VALIDACIÓN DE CORREO ----------------------- */
export const validateEmail = (email)=>{
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
}
/* -------------------------- VALIDACIÓN DE CORREO ----------------------- */

/* ----------------- VALIDACIÓN DE NOMBRE DE USUARIO ------------------- */
export const validateUsername = (username)=>{
    const regex = /^\S{3,8}$/
    return regex.test(username)
}
/* ----------------- VALIDACIÓN DE NOMBRE DE USUARIO ------------------- */

/* ----------------- VALIDACIÓN DE CONTRASEÑA ------------------- */
export const validatePassword = (password)=>{
    const regex = /^\S{6,12}$/ //Chetar despues
    return regex.test(password)
}
/* ----------------- VALIDACIÓN DE CONTRASEÑA ------------------- */

/**VALIDACION DE TELEFONO */
export const validatePhone = (phone)=>{
    const regex = /^[0-9]{8,8}$/
    return regex.test(phone)
}

export const validateRole =(role) => {
    const regex = /^(ADMIN|CLIENT|ADMIN_HOTEL)$/
    return regex.test(role.toUpperCase())
  }
  
 

/* ----------------- VALIDACIÓN DE CONFIRMACIÓN DE CONTRASEÑA ------------------- */
export const validatePassConfirm = (password, passConfirm)=>{
    return password === passConfirm
}
/* ----------------- VALIDACIÓN DE CONFIRMACIÓN DE CONTRASEÑA ------------------- */

/* ---------------------------------------------------------------------- */
/* ----------------- MENSAJES GENERALES DE VALIDACIÓN ------------------- */
/* ---------------------------------------------------------------------- */

export const nameValidationMessage ='El nombre debe contener entre 3 y 16 caracteres (Sin espacios)'
export const surNameValidationMessage = 'El apellido debe contener entre 3 y 16 caracteres (Sin espacios)'
export const emailValidationMessage = 'Por favor ingresa un correo válido'
export const usernameValidationMessage = 'El nombre de usuario debe contener entre 3 y 8 caracteres (Sin espacios)'
export const passwordValidationMessage = 'La contraseña debe tener entre 6 y 12 caracteres, sin espacios'
export const passConfirmValidationMessage = 'Las contraseñas no coinciden'
export const phoneValidatonMessage = 'Debe de ser un numero valido de 8 caracteres'
export const roleValidationMessage = 'debe de ser ADMIN,CLIENT ADMIN_HOTEL'
