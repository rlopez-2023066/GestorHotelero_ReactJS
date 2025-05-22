import React, { useState } from 'react';
import {
  validateHotelName,
  validateDirection,
  validateCategory,
  validateDescription,
  validateTelephone,
  hotelNameErrorMessage,
  directionErrorMessage,
  categoryErrorMessage,
  descriptionErrorMessage,
  telephoneErrorMessage,
} from '../../Shared/validations/validator';

const ModalAddHotel = ({ isOpen, onClose, onSubmit }) => {
  const [form, setForm] = useState({
    name: '',
    direction: '',
    category: '',
    description: '',
    telephone: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!validateHotelName(form.name)) newErrors.name = hotelNameErrorMessage;
    if (!validateDirection(form.direction)) newErrors.direction = directionErrorMessage;
    if (!validateCategory(form.category)) newErrors.category = categoryErrorMessage;
    if (!validateDescription(form.description)) newErrors.description = descriptionErrorMessage;
    if (!validateTelephone(form.telephone)) newErrors.telephone = telephoneErrorMessage;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSubmit(form);
      setForm({
        name: '',
        direction: '',
        category: '',
        description: '',
        telephone: '',
      });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/30">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 relative animate-fade-in-down">  
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-purple-800">Agregar Hotel</h2>
          <p className="text-sm text-gray-600">Llene todos los campos requeridos</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { id: 'name', label: 'Nombre', placeholder: 'Nombre del hotel' },
            { id: 'direction', label: 'Dirección', placeholder: 'Dirección del hotel' },
            { id: 'category', label: 'Categoría', placeholder: 'Categoría (ej. 5 estrellas)' },
            { id: 'telephone', label: 'Teléfono', placeholder: 'Número de contacto' },
          ].map(({ id, label, placeholder }) => (
            <div key={id}>
              <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label} <span className="text-red-600">*</span>
              </label>
              <input
                id={id}
                name={id}
                type="text"
                value={form[id]}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-lg border p-2.5 shadow-sm focus:ring-2 focus:ring-purple-400 ${
                  errors[id] ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder={placeholder}
                required
              />
              {errors[id] && <p className="text-sm text-red-600 mt-1">{errors[id]}</p>}
            </div>
          ))}

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Descripción <span className="text-red-600">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={form.description}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg border p-2.5 shadow-sm focus:ring-2 focus:ring-purple-400 ${
                errors.description ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Descripción del hotel"
              required
            />
            {errors.description && (
              <p className="text-sm text-red-600 mt-1">{errors.description}</p>
            )}
          </div>

          <div className="flex justify-end space-x-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-purple-700 hover:bg-purple-800 text-white font-semibold transition"
            >
              Agregar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalAddHotel;
