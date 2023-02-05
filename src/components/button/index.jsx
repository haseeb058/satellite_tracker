import Loading from "../loading";
import style from "../../styles/button.module.scss";

const Button = ({
  className,
  title,
  type,
  icon,
  isLoading,
  disabled,
  onClick,
}) => {
  return (
    <>
      <button
        className={`${style.btn} ${className}`}
        onClick={(e) => {
          onClick && onClick(e);
        }}
        type={type}
        disabled={disabled || isLoading || false}
        style={{ pointerEvents: isLoading || disabled ? "none" : "auto" }}
      >
        {icon && <img src={icon} alt={"button icon"} />}
        {isLoading ? <Loading className={style.loaderClass} /> : title}
      </button>
    </>
  );
};

export default Button;
