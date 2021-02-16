
import React , {useState} from 'react';
import {MaizeContainer,MaizeText,HeroH1,MaizeWrapper,MaizeH4,MaizeH3,HeroP,Button,ArrowForward,ArrowRight,HeroContent,MaizeCard,MaizeIcon} from './HeroV3Elements';
import Icon1 from '../../images/maize1.png';

const MaizeCategory = (props) => {

    const [hover,setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <MaizeContainer id="maize">

           <MaizeWrapper>

              <MaizeText>

                <HeroH1> {props.maizeTitle} </HeroH1>
                <HeroP> {props.maizeContent}</HeroP>

              </MaizeText>



        <HeroContent id="heroContent">

        

        <MaizeCard id="maizeX">
            <MaizeIcon src={Icon1}>
            </MaizeIcon>
            <MaizeH4> {props.maizeH} </MaizeH4>
            <MaizeH3>{props.maizePrice}</MaizeH3> 
            <Button to="/shop" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                      Shop Now {hover ? <ArrowForward/>:<ArrowRight/>}

            </Button>
        </MaizeCard>

        <MaizeCard id="maizeY">
            <MaizeIcon src={Icon1} >
            </MaizeIcon>
            <MaizeH4>{props.maizeHa} </MaizeH4>
            <MaizeH3>{props.maizePrice1}</MaizeH3> 
            <Button to="/shop" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                      Shop Now {hover ? <ArrowForward/>:<ArrowRight/>}

            </Button>
            
        </MaizeCard>

        <MaizeCard id="maizeZ">
            <MaizeIcon  src={Icon1}>
            </MaizeIcon> 
            <MaizeH4>{props.maizeHab} </MaizeH4>
            <MaizeH3>{props.maizePrice2}</MaizeH3> 
            <Button to="/shop" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                      Shop Now {hover ? <ArrowForward/>:<ArrowRight/>}

            </Button>
        </MaizeCard>

        </HeroContent>

        </MaizeWrapper>

        

        </MaizeContainer>

    )
}

export default MaizeCategory
