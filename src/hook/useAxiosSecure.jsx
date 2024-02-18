import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
})
const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.response.use(response => {
            return response;
        }, error => {
            // console.log('error track in interceptors', error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                logOut()
                    .then(() => {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "You Logout Successfully done!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/login');
                    })
                    .catch(error => console.log(error))
            }
        })
    }, [])
    return axiosSecure;
};

export default useAxiosSecure;
