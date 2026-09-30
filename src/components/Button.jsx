import styles from "./Button.module.css";

let Button = ({ btn_name, onClick }) => {
  return (
    <button
      className={`${styles.button} btn btn-primary`}
      data-value={btn_name}
      onClick={onClick}
    >
      {btn_name}
    </button>
  );
};

export default Button;