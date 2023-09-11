import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const WithPrivateRoute = ({ children }) => {
  const router = useRouter();
  const status = localStorage.getItem("status");

  useEffect(() => {
    if (status === "not-authenticated") {
      router.push("/login");
    }
  }, [status]);

  return <>{children}</>;
};

export default WithPrivateRoute;
