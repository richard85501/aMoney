import React from 'react';
import styles from './styles/Button.module.scss';

type ButtonProps = {
  backgroundColor?: string;
  onClick?: any;
  icon?: any;
  iconPlace?: string;
  size?: string;
  label?: string;
  type?: string;
  disabled?: string;
};

const Button = ({ backgroundColor, size, label, type, onClick, icon, iconPlace, disabled, ...props }: ButtonProps) => {
  const buttonStyles = () => {
    let className: string = styles['storybook-button'];
    if (size) className += ' ' + styles[`storybook-button--${size}`];
    if (type) className += ' ' + styles[`storybook-button--${type}`];
    if (disabled) className += ' ' + styles['storybook-button--disabled'];
    return className;
  };

  const contentHandler = (iconPlace?: string) => {
    if (!icon) return label;
    if (iconPlace === 'before') {
      return icon + label;
    } else {
      return label + icon;
    }
  };

  return (
    <button
      type='button'
      className={buttonStyles()}
      onClick={(e) => !disabled && onClick(e)}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      {contentHandler(iconPlace)}
    </button>
  );
};

export default Button;
