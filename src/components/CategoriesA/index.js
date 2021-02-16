
import React , {useState} from 'react';
import {MaizeContainer,CategoryH1,MaizeWrapper,MaizeH4,MaizeH3,CategoryP,Button,ArrowForward,ArrowRight,HeroContent,MaizeCard,MaizeIcon} from './CategoriesElements';
import Icon1 from '../../images/maize1.png';

const CategoryA = (props) => {
    const [hover,setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <MaizeContainer id="maize">

           <MaizeWrapper>

         

        <HeroContent id="heroContent">

        

        <MaizeCard id="maizeX">
            
            <CategoryH1>{props.categoryH} </CategoryH1>
            <CategoryP>{props.categoryContent1}</CategoryP>
            <Button to="/shop" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                      Shop Now {hover ? <ArrowForward/>:<ArrowRight/>}

            </Button>
             
            <MaizeIcon src={Icon1}>
            </MaizeIcon>
            {/* <MaizeH4> 1 kg maize flour bag</MaizeH4>
            <MaizeH3>5000 Ugx</MaizeH3>  */}
            
        </MaizeCard>

        <MaizeCard id="maizeY">
        {/* <CategoryHeading>

        </CategoryHeading> */}
            <CategoryH1> {props.categoryHa}  </CategoryH1>
            <CategoryP> {props.categoryContent2} </CategoryP>
            <Button to="/shop" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                      Shop Now {hover ? <ArrowForward/>:<ArrowRight/>}

            </Button>

            <MaizeIcon src={Icon1} >
            </MaizeIcon>
            {/* <MaizeH4> 10 kg maize flour bag</MaizeH4>
            <MaizeH3>29,999 Ugx</MaizeH3>  */}
            
            
        </MaizeCard>

        </HeroContent>

        </MaizeWrapper>

        

        </MaizeContainer>

    )
}

export default CategoryA
