import React,{useEffect,useState,useRef} from 'react';
import { Button } from '../ButtonElement';
import {HeroSection,HeroWrapper,HeroSlide,HeroSlider,HeroImage,HeroContent,Arrow,SliderButtons,PrevArrow,NextArrow} from './HeroElements';

const Hero  = ({slides}) => {
    const [current,setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    // useEffect(() => {
    //     const nextSlide = () => {
    //         setCurrent(current => (current === length-1? 0: current +1 ))
    //     }

    //     timeout.current = setTimeout(nextSlide , 2000)

    //     return function() {
    //         if(timeout.current) {
    //             clearTimeout(timeout.current)
    //         }
    //     }
    // }, [current,length])

    const nextSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }

        setCurrent(current === length-1 ? 0 : current + 1);
        // console.log(current);

    };

    const prevSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }

        setCurrent(current === 0 ? length-1 : current-1);
        // console.log(current);
    };

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <HeroSection id="heroSection">

          <HeroWrapper id="heroWrapper">

            {slides.map( (slide,index) =>{
                return (
                    <HeroSlide key={index}>
                    {index === current && (
                        <HeroSlider>
                            <HeroImage src={slide.image} alt={slide.alt}/>
                            <HeroContent>
                                <h1>{slide.title}</h1>
                                <p>{slide.price}</p>
                                <Button to={slide.path} primary='true'>
                                    {slide.label}
                                    <Arrow/>
                                </Button>
                            </HeroContent>
                        </HeroSlider>

                    )}
                        
                    </HeroSlide>
                )

            })}

            <SliderButtons>
                <PrevArrow onClick={prevSlide}/>
                <NextArrow onClick={nextSlide}/>
            </SliderButtons>

          </HeroWrapper>
            
        </HeroSection>
    )
}

export default Hero
