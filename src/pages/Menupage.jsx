import React from 'react';
import { Helmet } from 'react-helmet';
import Cover from '../components/Cover';
import menuimg from '../assets/menu/banner3.jpg'
import chef from '../assets/home/chef-service.jpg'

import Ourmenu from '../components/Ourmenu';
import useMenu from '../menucomponents/useMenu';
import Menucate from '../menucomponents/Menucate';

const Menupage = () => {
    const [menu]= useMenu()
    const  dessert = menu.filter(item => item.category === 'dessert')
    const  soup = menu.filter(item => item.category === 'soup')
    const  pizza = menu.filter(item => item.category === 'pizza')
    const  offered = menu.filter(item => item.category === 'offered')
    const  drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div className=''>
        <Helmet> 
            <title>Bistro | menu</title>
        </Helmet>
        <Cover img={menuimg} title={'Our menu'}></Cover>

        <div className='w-max text-center  mx-auto my-10'>
            <h2 className="text-4xl text-amber-400 pb-2">---dont miss---</h2>
            <h2 className="uppercase text-5xl  border-y-4 py-3">todays offer</h2>
        </div>

        <div className='w-10/12 mx-auto my-10'>
            
            <Menucate items={dessert} title={'dessert'}></Menucate>
        </div>

        <Cover img={chef} title={'dessert'}></Cover>

        {/* drinks */}

        <div className='w-10/12 mx-auto my-10'>
            
            <Menucate items={drinks} title={'drinks'}></Menucate>
        </div>

        <Cover img={chef} title={'drinks'}></Cover>

        {/* soup */}
        <div className='w-10/12 mx-auto my-10'>
            
            <Menucate items={soup} title={'soup'}></Menucate>
        </div>

        <Cover img={chef} title={'soup'}></Cover>

        {/* offerd  */}

        <div className='w-10/12 mx-auto my-10'>
            
            <Menucate items={offered} title={'offered'}></Menucate>
        </div>

        <Cover img={chef} title={'offered'}></Cover>

        {/* pizza  */}

        <div className='w-10/12 mx-auto my-10'>
            
            <Menucate items={pizza} title={'pizza'}></Menucate>
        </div>

        <Cover img={chef} title={'pizza'}></Cover>


        </div>
    );
};

export default Menupage;