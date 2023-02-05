import React from "react";

import style from "../../styles/input.module.scss";

const Input = ({
  label,
  type,
  name,
  icon,
  value,
  onClick,
  readOnly,
  register,
  onChange,
  isDisable,
  iconClass,
  inputClass,
  placeholder,
  errorMessage,
  className,
}) => {
  return (
    <div className={`${style.inputContainer} ${className}`}>
      {label && <label>{label}</label>}
      <div style={{ position: "relative" }}>
        <input
          className={inputClass}
          type={type || "text"}
          placeholder={placeholder || ""}
          name={name || ""}
          value={value && value}
          onChange={onChange && onChange}
          readOnly={readOnly || false}
          disabled={isDisable || false}
          {...(register && register(name))}
          style={{
            border: errorMessage ? "1px solid #ff5050" : " 1px solid #DEDEDE",
            color: "#000",
          }}
        />
        {icon && (
          <img
            className={`${style.icon} ${iconClass}`}
            style={{ cursor: "pointer" }}
            src={icon}
            alt=""
            width={28}
            height={28}
            onClick={onClick}
          />
        )}
      </div>
      {errorMessage && (
        <span className={style.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
