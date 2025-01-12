import axios from "axios";


export const axiossecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useaxios = () => {
    return axiossecure;
};

export default useaxios;