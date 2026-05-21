'use client';

import React from 'react';

interface InputProps {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  required = false,
  placeholder,
  options = [],
}) => {
  const baseStyles = "w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#E8B923] bg-white transition-colors";

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2 text-gray-700">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          rows={6}
          className={`${baseStyles} rounded-3xl`}
        />
      ) : type === 'select' ? (
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`${baseStyles} appearance-none`}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={baseStyles}
        />
      )}
    </div>
  );
};

export default Input;