import React  , {useState} from 'react';
import CategoryA from '../components/CategoriesA';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import ShoppingCart from '../components/Cart';

const Cart = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle}/>
        <h1> Shop page</h1>
        <CategoryA/>

        <ShoppingCart/>

        <Footer/>
        </div>
    );
};

export default Cart
