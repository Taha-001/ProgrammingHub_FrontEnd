import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const blurChangeHandler = (event) => {
    setIsTouched(true);
  };
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  return {
    hasError,
    value: enteredValue,
    isValid: valueIsValid,
    reset,
    valueChangeHandler,
    blurChangeHandler,
  };
};

export default useInput;
