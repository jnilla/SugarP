import { onChecking, onLogin, onLogout } from "@/store/slice/authSlice";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useAuthStore = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { status, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const url = usePathname();

  // Se encarga de hacer login con el username y la password
  const startLogin = async ({ username, password }) => {
    dispatch(onChecking());

    const user = {
      username: "develpz",
      password: "develpz#060680",
    };

    try {
      if (username === user.username && password === user.password) {
        dispatch(
          onLogin({
            username: username,
            key: btoa(password),
            id: user.id,
            name: user.name,
            role: user.role,
            token: user.token,
          })
        );

        localStorage.setItem("status", "authenticated");
        localStorage.setItem("username", btoa(username));
        localStorage.setItem("password", btoa(password));
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  //Se encarga de que el usuario una vez que recargue inicie
  const checkAuthToken = async () => {
    const username = atob(localStorage.getItem("username"));
    const password = atob(localStorage.getItem("password"));

    const user = {
      username: "develpz",
      password: "develpz#060680",
    };

    if (!username || !password) return dispatch(onLogout());

    try {
      if (username === user.username && password === user.password) {
        dispatch(
          onLogin({
            username: username,
            key: btoa(password),
            id: user.id,
            name: user.name,
            role: user.role,
            token: user.token,
          })
        );

        router.push(url);
      } else {
        localStorage.clear();
        dispatch(onLogout());
      }
    } catch (error) {
      console.error(error);
    }
  };

  //Se encarga que el usuario se pueda desconectar de la app
  const startLogout = () => {
    router.push("/login");
    localStorage.clear();
    dispatch(onLogout());
  };

  return {
    //Funciones
    startLogin,
    startLogout,
    checkAuthToken,
    //variables
    user,
    status,
  };
};
