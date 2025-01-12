import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useaxios from './useaxios';
import { Authcontext } from '../auth/Authprovider';

const usecart = () => {
    const axiossecure = useaxios()
    const {user} = useContext(Authcontext)
    const {refetch ,data: cart = []} = useQuery({
        queryKey: ['cart' , user?.email],
        queryFn: async () => {
            const res = await axiossecure.get(`/cart?email=${user.email}`)
            return res.data
        }
    })
    return [cart, refetch]
};

export default usecart;