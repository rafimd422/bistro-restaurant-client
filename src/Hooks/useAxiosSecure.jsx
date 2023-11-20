import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const navigate = useNavigate()
  const { logOut } = useContext(AuthContext);
  axiosSecure.interceptors.request.use(function (config) {

// First main part of my jwt varification
    const token = localStorage.getItem('access-token')
     console.log('request stopped by interceptors', token)
    config.headers.authorization = `Bearer ${token}`;
    return config;



}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


// intercepts 401 and 403 status
axiosSecure.interceptors.response.use(function (response) {
    return response;
}, async (error) => {


// Second main part of my jwt varification

    const status = error.response.status;

    if (status === 401 || status === 403) {
        await logOut();
        navigate('/login');
    }
    return Promise.reject(error);
})


return axiosSecure;
};

export default useAxiosSecure;
