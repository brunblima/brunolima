import React, { useState, useEffect } from "react";
import {
  SidebarContainer,
  SidebarInfo,
  AvatarBox,
  AvatarImage,
  InfoContent,
  Name,
  Title,
  InfoList,
  IconBox,
  InfoItem,
  SocialLinks,
  Info,
  InfoMore,
  Separator,
  ContactInfo,
  ContactTitle,
} from "./styles";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaChevronUp,
  FaChevronDown,
  FaTelegramPlane,
} from "react-icons/fa";

const Sidebar = () => {
  const [isContactsVisible, setIsContactsVisible] = useState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleContactsVisibility = () => {
    setIsContactsVisible(!isContactsVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SidebarContainer>
      <SidebarInfo>
        <AvatarBox>
          <AvatarImage
            src="https://github.com/brunblima.png"
            alt="Bruno Lima"
          />
        </AvatarBox>

        <InfoContent>
          <Name>Bruno Lima</Name>
          <Title>Front-end Developer</Title>
        </InfoContent>

        {windowWidth < 1250 && (
          <InfoMore onClick={toggleContactsVisibility}>
            {windowWidth < 580 ? (
              isContactsVisible ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )
            ) : isContactsVisible ? (
              "Ocultar Contatos"
            ) : (
              "Mostrar Contatos"
            )}
          </InfoMore>
        )}
      </SidebarInfo>

      <Info isVisible={isContactsVisible || windowWidth >= 1250}>
        <Separator />

        <InfoList>
          <InfoItem>
            <IconBox>
              <FaEnvelope />
            </IconBox>
            <ContactInfo>
              <ContactTitle>Email</ContactTitle>
              <a href="mailto:brunoblima1@gmail.com">brunoblima1@gmail.com</a>
            </ContactInfo>
          </InfoItem>

          <InfoItem>
            <IconBox>
              <FaPhoneAlt />
            </IconBox>
            <ContactInfo>
              <ContactTitle>Telefone</ContactTitle>
              <a href="tel:+5583998737170">+55 (83) 9 9873-7170</a>
            </ContactInfo>
          </InfoItem>

          <InfoItem>
            <IconBox>
              <FaCalendarAlt />
            </IconBox>
            <ContactInfo>
              <ContactTitle>Data de Nascimento</ContactTitle>
              <time>26 de Fevereiro, 1998</time>
            </ContactInfo>
          </InfoItem>

          <InfoItem>
            <IconBox>
              <FaMapMarkerAlt />
            </IconBox>
            <ContactInfo>
              <ContactTitle>Localização</ContactTitle>
              <address>João Pessoa, Paraíba, Brasil</address>
            </ContactInfo>
          </InfoItem>
        </InfoList>
        <Separator />
        <SocialLinks>
          <a
            href="https://x.com/brunblima"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/brunblima"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://t.me/brunblima"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://github.com/brunblima"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </SocialLinks>
      </Info>
    </SidebarContainer>
  );
};

export default Sidebar;
