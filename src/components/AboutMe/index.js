import React from "react";
import {
  Container,
  AboutText,
  Header,
  Resume,
  Service,
  ServiceTitle,
  ServiceList,
  ServiceItem,
  ServiceIconBox,
  Icon,
  ServiceContentBox,
  ServiceItemTitle,
  Separator,
} from "./styles";

import IconDesign from "../../assets/icon-design.svg";
import IconDev from "../../assets/icon-dev.svg";
import IconMobile from "../../assets/icon-app.svg";

const AboutMe = () => (
  <Container>
    <Header>
      <h2>Sobre mim</h2>
      <Separator />
    </Header>

    <AboutText>
      <Resume>
        Olá! Eu sou um desenvolvedor especializado em React e React Native, com
        paixão por criar experiências digitais excepcionais tanto para web
        quanto para mobile. Embora minha jornada no desenvolvimento tenha
        começado há pouco tempo, tenho me dedicado intensamente ao aprendizado e
        à prática contínua dessas tecnologias.
      </Resume>
      <Resume>
        Trabalho com desenvolvimento web e mobile, utilizando minhas habilidades
        em React para construir interfaces de usuário dinâmicas e interativas, e
        em React Native para criar aplicativos móveis eficientes e de alto
        desempenho. Estou sempre buscando novos desafios e oportunidades para
        expandir meu conhecimento e melhorar minhas habilidades. Seja
        construindo um site responsivo ou um aplicativo móvel envolvente, estou
        comprometido em entregar soluções de alta qualidade que atendam às
        necessidades dos usuários e superem as expectativas dos clientes. Vamos
        criar algo incrível juntos!
      </Resume>
    </AboutText>

    <Service>
      <ServiceTitle>O que estou fazendo</ServiceTitle>
      <ServiceList>
        <ServiceItem>
          <ServiceIconBox>
            <Icon src={IconDesign} alt="design icon" size="40" />
          </ServiceIconBox>
          <ServiceContentBox>
            <ServiceItemTitle>Web Design</ServiceItemTitle>
            <p>
              O design mais moderno e de alta qualidade feito por um
              profissional nível.
            </p>
          </ServiceContentBox>
        </ServiceItem>

        <ServiceItem>
          <ServiceIconBox>
            <Icon src={IconDev} alt="design icon" sizes="40" />
          </ServiceIconBox>
          <ServiceContentBox>
            <ServiceItemTitle>Web Development</ServiceItemTitle>
            <p>
              Desenvolvimento de sites de alta qualidade a nível profissional.
            </p>
          </ServiceContentBox>
        </ServiceItem>

        <ServiceItem>
          <ServiceIconBox>
            <Icon src={IconMobile} alt="design icon" sizes="40" />
          </ServiceIconBox>
          <ServiceContentBox>
            <ServiceItemTitle>Mobile Apps</ServiceItemTitle>
            <p>
              Desenvolvimento profissional de aplicativos para iOS e Android.
            </p>
          </ServiceContentBox>
        </ServiceItem>
      </ServiceList>
    </Service>
  </Container>
);

export default AboutMe;
