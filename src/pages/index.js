import React , {useState} from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import MaizeCategory from '../components/HeroV3';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import {SliderData} from '../components/Hero/data';
import CategoryA from '../components/CategoriesA';



const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };


   return (
        <>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle}/>
        {/* <HeroSection/> */}
        {/* <HeroSectionV2/> */}
        <Hero slides={SliderData}/>

        {/* top product categroy 1 */}

        <MaizeCategory maizeTitle = "maize flourr" 
         maizeH = "1 kg maize flour bag"
         maizeHa = "10 kg maize flour bag"
         maizeHab = "25 kg maize flour bag" 
         maizeContent = "Buy now and get 50% of your first purchase"
         maizePrice = "5000 Ugx"
         maizePrice1 = "29,999 Ugx"
         maizePrice2 = "75,000 Ugx"

         />


         
        {/*  product categroy A */}
        <CategoryA
            categoryH = "Bananas "
            categoryHa = "Flour"
            categoryContent1 = "Buy now and get 50% of your first purchase"
            categoryContent2 = "We offer sorghum and maize flour"
        />
        

        {/*  product categroy B */}
        <CategoryA 
            categoryH = "Vanilla beans "
            categoryHa = " Soy beans"
            categoryContent1 = "Fresh vanilla beans "
            categoryContent2 = "Try our soybeans"
         
        />

        {/* top product categroy 2 */}

        <MaizeCategory maizeTitle = "Passion Fruits" 
         maizeH = "1 kg passion fruit bag"
         maizeHa = "10 kg passion fruit bag"
         maizeHab = "25 kg passion fruit bag" 
         maizeContent = "Buy now and get 50% of your first purchase"
         maizePrice = "5000 Ugx"
         maizePrice1 = "29,999 Ugx"
         maizePrice2 = "75,000 Ugx"

         />

        
        {/*  product categroy C */}
        <CategoryA 
            categoryH = " 100% pure honey "
            categoryHa = " Potatoes"
            categoryContent1 = " We bring you the finest pure honey "
            categoryContent2 = "Potaoes straight from our farms in fort portal"
         
        />


       
        {/* <Products/>
        <Maize/>
        <ProductCategories/>
        <PassionFruit/> */}
        <Footer/>
       
        </>
    );
};

export default Home
