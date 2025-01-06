import React, { useState } from "react";
import Cover from "../components/Cover";
import foodorder from "../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import useMenu from "../menucomponents/useMenu";
import Foodcard from "../menucomponents/Foodcard";
import { useParams } from "react-router-dom";
import Ordertab from "../menucomponents/Ordertab";


const Food = () => {
    const categoris = ['soup','dessert', 'pizza', 'salad', 'deinks']
    const {category} = useParams()
    const initialindex = categoris.indexOf(category)
    const [menu] = useMenu()
    const [tab, settab] = useState(initialindex)
    const  dessert = menu.filter(item => item.category === 'dessert')
    const  soup = menu.filter(item => item.category === 'soup')
    const  pizza = menu.filter(item => item.category === 'pizza')
    const  salad = menu.filter(item => item.category === 'salad')
    const  drinks = menu.filter(item => item.category === 'drinks')
  return (
    <div className="relative top-20 ">
      <Cover img={foodorder} title={"food order"}></Cover>

      <Tabs defaultIndex={tab} onSelect={(index) => settab(index)}>
        <TabList>
          <Tab>SOUPS</Tab>
          <Tab>DESERTS</Tab>
          <Tab>PIZZAS</Tab>
          <Tab>SALADS</Tab>
          <Tab>DRINKS</Tab>
          
        </TabList>

        <TabPanel >
            <Ordertab items={dessert}></Ordertab>
        </TabPanel>
        <TabPanel >
            <Ordertab items={soup}></Ordertab>
        </TabPanel>
        <TabPanel >
            <Ordertab items={pizza}></Ordertab>
        </TabPanel>
        <TabPanel >
            <Ordertab items={salad}></Ordertab>
        </TabPanel>
        <TabPanel >
            <Ordertab items={drinks}></Ordertab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Food;
