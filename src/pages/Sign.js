import React  , {useState} from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const SignUp = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle}/>
        <h1> SignUp page</h1>
            
        </div>
    )
}

export default SignUp
