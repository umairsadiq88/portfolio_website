import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+92-322-2130736'>+92-322-2130736</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:umairsadiq2010@gmail.com'>umairsadiq2010@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/umairsadiq88'>
            <AiFillGithub size="3rem" />
          </SocialIcons>

          <SocialIcons href='https://www.facebook.com/umair.sadiq.9/'>
            <AiFillFacebook size="3rem" />
          </SocialIcons>

          <SocialIcons href='https://www.linkedin.com/in/umair-sadiq-1969a47b/'>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>

          <SocialIcons href='https://www.instagram.com/umairsadiq88/?hl=en'>
            <AiFillInstagram size="3rem" />
          </SocialIcons>

        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>



  );
};

export default Footer;
