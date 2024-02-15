import { useState } from 'react';
import shopBanner from '../../../assets/shop/banner2.jpg'
import CategoryBanner from '../../../components/CategoryBanner';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from 'react-router-dom';
import './OurShop.css'
import useMenu from '../../../hook/useMenu';
import ShopCard from '../ShopCard/ShopCard';

const OurShop = () => {
    const [menu] = useMenu()
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [selectedTab, setSelectedTab] = useState(initialIndex);


    
    const drinks = menu?.filter(item => item.category === "drinks");
    const salad = menu?.filter(item => item.category === "salad");
    const soup = menu?.filter(item => item.category === "soup");
    const dessert = menu?.filter(item => item.category === "dessert");
    const pizza = menu?.filter(item => item.category === "pizza");

    // console.log(salad)

    return (
        <div className='max-w-6xl mx-auto'>
            <div className="mb-20">
                <CategoryBanner bannerImg={shopBanner} heading={"OUR SHOP"} subHeading={"Would you like to try a dish?"}></CategoryBanner>
            </div>
            <div className="">
                <Tabs defaultIndex={selectedTab} onSelect={(index) => setSelectedTab(index)}>
                    <TabList className="text-center">
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <ShopCard items={salad}></ShopCard>
                    </TabPanel>
                    <TabPanel>
                        <ShopCard items={pizza}></ShopCard>
                    </TabPanel>
                    <TabPanel>
                        <ShopCard items={soup}></ShopCard>
                    </TabPanel>
                    <TabPanel>
                        <ShopCard items={dessert}></ShopCard>
                    </TabPanel>
                    <TabPanel>
                        <ShopCard items={drinks}></ShopCard>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;

