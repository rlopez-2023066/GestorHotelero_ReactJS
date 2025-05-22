import React, { useState, useEffect } from 'react';
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

const ModalEditHotel = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [form, setForm] = useState({
    name: '',
    direction: '',
    category: '',
    description: '',
    telephone: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
      setErrors({});
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
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
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/30">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative border border-gray-300">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-[#4d1b80] mb-4 text-center">Editar Hotel</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {['name', 'direction', 'category', 'telephone'].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 capitalize mb-1">
                {field}
              </label>
              <input
                type="text"
                name={field}
                value={form[field]}
                onChange={handleChange}
                className={`w-full p-2 rounded-lg border ${
                  errors[field] ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-[#4d1b80]`}
                placeholder={`Ingrese ${field}`}
                required
              />
              {errors[field] && (
                <p className="text-red-600 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className={`w-full p-2 rounded-lg border ${
                errors.description ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-[#4d1b80]`}
              rows={3}
              placeholder="Ingrese la descripción"
              required
            />
            {errors.description && (
              <p className="text-red-600 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-800"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-[#4d1b80] hover:bg-[#7127BA] text-white font-semibold"
            >
              Actualizar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEditHotel;
