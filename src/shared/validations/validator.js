
//Crear todas las validaciones de Campos

export const validateName = (name) => {
  const regex = /^(?!.*\s$)[\p{L}\s]{3,30}$/u;
  return regex.test(name);
}

export const validateSurName = (name) => {
  const regex = /^(?!.*\s$)[\p{L}\s]{3,30}$/u;
  return regex.test(name);
}


/* -------------------------- VALIDACIÓN DE CORREO ----------------------- */
export const validateEmail = (email)=>{
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
}
/* -------------------------- VALIDACIÓN DE CORREO ----------------------- */

/* ----------------- VALIDACIÓN DE NOMBRE DE USUARIO ------------------- */
export const validateUsername = (username)=>{
    const regex = /^\S{3,20}$/
    return regex.test(username)
}

export const validateLogin = (username) => {
  const regex = /^(?:[a-zA-Z0-9._-]{3,60}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,60})$/;
  return regex.test(username);
}

/* ----------------- VALIDACIÓN DE NOMBRE DE USUARIO ------------------- */

/* ----------------- VALIDACIÓN DE CONTRASEÑA ------------------- */
export const validatePassword = (password)=>{
    const regex = /^\S{6,30}$/ //Chetar despues
    return regex.test(password)
}
/* ----------------- VALIDACIÓN DE CONTRASEÑA ------------------- */

/**VALIDACION DE TELEFONO */
export const validatePhone = (phone)=>{
    const regex = /^[0-9]{8,8}$/
    return regex.test(phone)
}


  
 

/* ----------------- VALIDACIÓN DE CONFIRMACIÓN DE CONTRASEÑA ------------------- */
export const validatePassConfirm = (password, passConfirm)=>{
    return password === passConfirm
}
/* ----------------- VALIDACIÓN DE CONFIRMACIÓN DE CONTRASEÑA ------------------- */

/* ---------------------------------------------------------------------- */
/* ----------------- MENSAJES GENERALES DE VALIDACIÓN ------------------- */
/* ---------------------------------------------------------------------- */

export const nameValidationMessage = 'El nombre debe tener entre 3 y 30 caracteres y no debe terminar en espacio';
export const surNameValidationMessage = 'El apellido debe tener entre 3 y 30 caracteres y no debe terminar en espacio';
export const emailValidationMessage = 'Por favor ingresa un correo válido'
export const usernameValidationMessage = 'El nombre de usuario debe contener entre 3 y 20 caracteres (Sin espacios) '
export const validateLoginMessage ='Ingrese un Username o Correo Valido'
export const passwordValidationMessage = 'La contraseña debe tener entre 6 y 30 caracteres, sin espacios'
export const passConfirmValidationMessage = 'Las contraseñas no coinciden'
export const phoneValidationMessage = 'Debe de ser un numero valido de 8 caracteres'


// Validación para el nombre: obligatorio, longitud entre 8 y 50 caracteres
export const validateHotelName = (name) => {
  return typeof name === 'string' && name.trim().length >= 8 && name.trim().length <= 50;
};

// Validación para dirección: obligatorio, longitud entre 5 y 90 caracteres
export const validateDirection = (direction) => {
  return typeof direction === 'string' && direction.trim().length >= 5 && direction.trim().length <= 90;
};

// Validación para categoría: obligatorio, puede ser número o string, solo validar que no esté vacío
export const validateCategory = (category) => {
  return category !== undefined && category !== null && category !== '';
};

// Validación para descripción: obligatorio, longitud entre 10 y 200 caracteres
export const validateDescription = (description) => {
  return typeof description === 'string' && description.trim().length >= 10 && description.trim().length <= 200;
};

// Validación para teléfono: obligatorio, número móvil válido (usamos regex simple para Guatemala: 8 dígitos numéricos)
export const validateTelephone = (telephone) => {
  const regex = /^[0-9]{8}$/;
  return regex.test(telephone);
};

export const hotelNameErrorMessage = "El nombre debe contener entre 8 y 50 caracteres";
export const directionErrorMessage = "La dirección debe contener entre 5 y 90 caracteres";
export const categoryErrorMessage = "La categoría es obligatoria";
export const descriptionErrorMessage = "La descripción debe contener entre 10 y 200 caracteres";
export const telephoneErrorMessage = "El teléfono debe contener 8 dígitos numéricos válidos";

