// import React, { useEffect, useState } from 'react';
import useaxiospublic from '../hook/useaxiospublic';
// import { use } from 'react';
import { useQuery } from '@tanstack/react-query';

const useMenu = () => {
    const axiospublic = useaxiospublic()
    // const [menu, setmenu] = useState([])
    // const [loading,setloading] = useState(true);
    // useEffect(()=> {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setmenu(data)
    //             setloading(false)
    //         })
    // }, [])

    const { data: menu = [],isPending: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await axiospublic.get('/menu')
            return res.data
        }
    })

    return [menu,loading, refetch]
};

export default useMenu;