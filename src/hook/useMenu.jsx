import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useMenu = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const {loading} = useAuth();

    const {data: menu = [], refetch} = useQuery({
        enabled: !loading,
        queryKey: ['menu'],
        queryFn: async()=>{
            const result = await axiosSecure.get('/menu');
            return result.data;
        }
    })
    return [menu, refetch];
};

export default useMenu;