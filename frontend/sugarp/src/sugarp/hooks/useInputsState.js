import { useState } from "react";

export const useInputsState = (inputs = {}) => {
  const [state, setState] = useState(inputs);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleChangeMultiElement = (event) => {
    const {
      target: { value },
    } = event;
    setState({
      ...state,
      members: typeof value === "string" ? value.split(",") : value,
    });
  };

  return {
    state,
    handleChange,
    handleChangeMultiElement,
  };
};
