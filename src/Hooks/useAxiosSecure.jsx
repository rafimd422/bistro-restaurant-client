import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);

  const navigate = useNavigate();
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      console.log("req stops for interceptors", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    function (respnse) {
      return respnse;
    },
    function (error) {
        logOut()
        .then(() => {
          localStorage.removeItem("access-token");
navigate('/login')       
 });

      console.log("status error in the interceptors", error);
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
