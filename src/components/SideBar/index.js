import React from 'react'
//import {SideBarContainer,Icon,CloseIcon, SideBtnWrap} from './SideBarElements';
import {SideBarContainer, Icon ,CloseIcon,SideBarWrapper,SideBarMenu,SideBarLink,SideBtnWrap,SideBarRoute} from './SideBarElements'


const SideBar = ({isOpen,toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>

            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="/flour">
                    Processed flour
                    </SideBarLink>
                    <SideBarLink to="/cereal">
                    Cereal
                    </SideBarLink>
                    <SideBarLink to="/fruits">
                    Fruits
                    </SideBarLink>
                    <SideBarLink to="/shop">
                    Shop
                    </SideBarLink>
                    <SideBarLink to="/cart">
                    Cart
                    </SideBarLink>

                    <SideBtnWrap>
                        <SideBarRoute to="/signin">
                            Sign in
                        </SideBarRoute>
                    </SideBtnWrap>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>

    );
};

export default SideBar
