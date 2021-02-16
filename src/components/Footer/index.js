import React from 'react';
import {FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,SocialMedia,SocialMediaWrap,SocialLogo,SocialIcons,SocialIconLink,WebsiteRights} from './FooterElements';
import {FaFacebook,FaInstagram,FaWhatsapp,FaTwitter} from 'react-icons/fa';
const Footer = () => {
    return (
        <FooterContainer>
        <FooterWrap>

            <FooterLinksContainer>
                <FooterLinksWrapper>

                 <FooterLinkItems>

                     <FooterLinkTitle>About us</FooterLinkTitle>
   
                     <FooterLink to="/about-us">History</FooterLink>
                     <FooterLink to="/about-us">Our farms</FooterLink>
                     <FooterLink to="/about-us">Testimonials</FooterLink>
                     <FooterLink to="/about-us">SUWIK in the community</FooterLink>
                     <FooterLink to="/about-us">Terms and Conditions</FooterLink>
                     

                 </FooterLinkItems>

                 <FooterLinkItems>

                     <FooterLinkTitle>Cereal</FooterLinkTitle>
   
                     <FooterLink to="/about-us">Maize</FooterLink>
                     <FooterLink to="/about-us">Sorghum</FooterLink>
                     <FooterLink to="/about-us">Simsim</FooterLink>
                     <FooterLink to="/about-us">Maize Flour</FooterLink>
                     <FooterLink to="/about-us">Peanuts</FooterLink>
                     

                 </FooterLinkItems>

                </FooterLinksWrapper>

{/* second footer link wrapper */}
                <FooterLinksWrapper>

                 <FooterLinkItems>

                     <FooterLinkTitle>Fruits</FooterLinkTitle>
   
                     <FooterLink to="/about-us">Passion fruits</FooterLink>
                     <FooterLink to="/about-us">Pineapples</FooterLink>
                     <FooterLink to="/about-us">Bananas</FooterLink>
                     <FooterLink to="/about-us">Ginger</FooterLink>
                     <FooterLink to="/about-us">Gonja</FooterLink>
                     

                 </FooterLinkItems>

                 <FooterLinkItems>

                     <FooterLinkTitle>Reach Uz</FooterLinkTitle>
   
                     <FooterLink to="/about-us">Contact us</FooterLink>
                     <FooterLink to="/about-us">Blog</FooterLink>
                     <FooterLink to="/about-us">SUWIK Merchandise</FooterLink>
                     <FooterLink to="/about-us">Careers</FooterLink>
                     <FooterLink to="/about-us">Outreach</FooterLink>
                     

                 </FooterLinkItems>

                </FooterLinksWrapper>

            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/"> SUWIK </SocialLogo>
                    <WebsiteRights>SUWIK © {new Date().getFullYear()}
                    All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" arial-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" arial-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" arial-label="Whatsapp">
                            <FaWhatsapp/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>

        </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
