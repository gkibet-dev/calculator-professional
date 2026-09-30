import Button from "./Button";
import styles from "./ButtonContainer.module.css";

let ButtonContainer = ({ onButtonClick }) => {
let btn_names = [
  "C", "/", "*", "-",
  "7", "8", "9", "+",
  "4", "5", "6", ".",
  "1", "2", "3", "=",
  "0",
];
  return (
    <div className={styles.buttonContainer}>
      {btn_names.map((btnName, index) => (
        <Button
          key={index}
          btn_name={btnName}
          onClick={() => onButtonClick(btnName)}
        ></Button>
      ))}
    </div>
  );
};

export default ButtonContainer;
