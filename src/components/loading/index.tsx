import style from "../../styles/loading.module.scss";

const Loading = ({ className }) => {
  return (
    <>
      <div className={`${style.loader} ${className}`}></div>
    </>
  );
};
export default Loading;
