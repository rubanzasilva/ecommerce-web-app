import React from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav,NavBarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from './NavBarElements';


const NavBar = ({toggle}) => {
    return (
        <>
          <Nav>
              <NavBarContainer>
                  <NavLogo to='/'>
                      SUWIK
                  </NavLogo>

                  <MobileIcon onClick={toggle}>
                      <FaBars/>
                  </MobileIcon>

                  <NavMenu>
                      <NavItem>
                          <NavLinks to="/flour ">Processed flour</NavLinks>
                      </NavItem>
                      
                      <NavItem>
                          <NavLinks to="/cereal">Cereal</NavLinks>
                      </NavItem>

                      <NavItem>
                          <NavLinks to="/fruits">Fruits</NavLinks>
                      </NavItem>

                      <NavItem>
                          <NavLinks to="/shop">Shop</NavLinks>
                      </NavItem>

                      <NavItem>
                          <NavLinks to="/cart">Cart</NavLinks>
                      </NavItem>


                      <NavItem>
                          <NavLinks to="/signup">Sign Up</NavLinks>
                      </NavItem>

                  </NavMenu>

                  <NavBtn>
                      <NavBtnLink to="/signin"> Sign In </NavBtnLink>
                  </NavBtn>
                  
              </NavBarContainer>
          </Nav>
            
        </>
    )
}

export default NavBar
