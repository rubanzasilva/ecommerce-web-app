import React , {useState} from 'react';
import {CartContainer,CartContent,CartWrapper} from './cartElements';
import Icon1 from '../../images/maize1.png';

const ShoppingCart = (props) => {

    const [hover,setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <CartContainer id="cartContainer">

           <CartWrapper>
           <h1> SHOPPING CART</h1>

    
        <CartContent id="CartContent">
        
       
            

            <h2> Product List </h2>
       

     

        </CartContent>

        </CartWrapper>

        

        </CartContainer>

    )
}

export default ShoppingCart
