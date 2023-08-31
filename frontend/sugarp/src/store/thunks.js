import { setExample } from "./slice/sugarpSlice";

// Cargar datos en el state de " example " en redux
export const getExample = (datos) => {
  return async (dispatch) => {
    dispatch(setExample(datos));
  };
};
