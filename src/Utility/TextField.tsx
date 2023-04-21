import React from 'react';
import { useState, useEffect } from 'react';
import styles from './styles/TextField.module.scss';

type TextFieldProps = {
  value?: string;
  type?: string;
  placeholder?: string;
  onChange?: any;
  onBlur?: any;
  onKeyPress?: any;
  iconPlace?: string;
  paddingIcon?: string;
  disabled?: boolean;
  maxLength?: number;
  error?: boolean;
  light?: string;
  inputType?: string;
};

const TextField = (props: TextFieldProps) => {
  const { value, type, placeholder, onChange, onBlur, onKeyPress, disabled, paddingIcon, inputType, light, error, maxLength } = props;

  return (
    <input
      disabled={disabled}
      id='textInput'
      className={type === 'small' ? styles.smallTextField : styles.textField}
      placeholder={placeholder ? placeholder : 'search'}
      value={value}
      onChange={(e) => onChange(e)}
      onBlur={onBlur}
      onKeyPress={onKeyPress}
      type={inputType ? inputType : 'text'}
      maxLength={maxLength}
      style={
        paddingIcon && light
          ? { paddingRight: '47px', background: 'white' }
          : paddingIcon
          ? { paddingRight: '47px' }
          : error
          ? {
              border: '1px solid #ff3b30',
            }
          : {}
      }
    />
  );
};

export default TextField;
