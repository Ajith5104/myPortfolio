import React from "react";
import styled from "styled-components";
import Tooltip from "@mui/material/Tooltip";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub"; 
import { Bio } from "../../data/constants";

const CustomTooltip = styled(Tooltip)`
  && {
    font-size: 1.6rem;
    padding: 4px 8px;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 0.2rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const YourComponent = () => {
  const yourWhatsAppNumber = "+918754083032";
  const handleWhatsAppClick = () => {
    const defaultMessage = " ";
    const whatsappLink = `https://wa.me/${yourWhatsAppNumber}?text=${encodeURIComponent(
      defaultMessage
    )}`;
    window.location.href = whatsappLink;
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Ajith M</Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#visionary">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>

          <CustomTooltip title="Phone" arrow>
            <SocialMediaIcon href={Bio.phone} target="display">
              <PhoneIcon />
            </SocialMediaIcon>
          </CustomTooltip>

          <CustomTooltip title="Email" arrow>
            <SocialMediaIcon href={Bio.email} target="display">
              <MailIcon />
            </SocialMediaIcon>
          </CustomTooltip>

          <CustomTooltip title="LinkedIn" arrow>
            <SocialMediaIcon href={Bio.linkedin} target="display">
              <LinkedInIcon />
            </SocialMediaIcon>
          </CustomTooltip>

           <CustomTooltip title="Instagram" arrow>
            <SocialMediaIcon href={Bio.insta} target="display">
              <InstagramIcon />
            </SocialMediaIcon>
          </CustomTooltip>

          <CustomTooltip title="WhatsApp" arrow>
            <SocialMediaIcon
              href="#"
              target="display"
              onClick={handleWhatsAppClick}
            >
              <WhatsAppIcon />
            </SocialMediaIcon>
          </CustomTooltip>

          <CustomTooltip title="GitHub" arrow>
            <SocialMediaIcon
              href="https://github.com/Ajith5104"
              target="_blank"
            >
              <GitHubIcon />
            </SocialMediaIcon>
          </CustomTooltip>
        </SocialMediaIcons>
        <Copyright>&copy; 2024 Ajith M. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default YourComponent;
