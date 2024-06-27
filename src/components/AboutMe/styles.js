import styled from "styled-components";

export const Container = styled.article`
  display: block;
  animation: fade 0.5s ease backwards;

`;

export const Header = styled.header`
  position: relative;
  padding-bottom: 7px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    padding-bottom: 20px;
    font-size: 24px;
  }

  @media (min-width: 580px) {
    margin-bottom: 20px;
    font-weight: 600;
    padding-bottom: 15px;
  }
`;

export const Separator = styled.span`
  position: absolute;

  width: 40px;
  height: 3px;
  border-radius: 3px;
  background: linear-gradient(to right, hsl(45, 100%, 72%), hsl(35, 100%, 68%));
  margin: 10px auto;
`;

export const AboutText = styled.section`
  color: hsl(0, 0%, 84%);
  font-size: 15px;
  font-weight: 300;
  line-height: 1.6;

  @media (min-width: 580px) {
    margin-bottom: 40px;
  }
`;

export const Resume = styled.p`
  margin-bottom: 15px;
`;

export const Service = styled.section`
  margin-bottom: 35px;
`;

export const ServiceTitle = styled.h3`
  font-size: 18px;
  text-transform: capitalize;
  margin-bottom: 20px;
`;

export const ServiceList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (width >= 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px 25px;
  }
`;

export const ServiceItem = styled.li`
  position: relative;
  background: linear-gradient(
      to bottom right,
      hsla(240, 1%, 18%, 0.251) 0%,
      hsla(240, 2%, 11%, 0) 100%
    ),
    hsl(240, 2%, 13%);
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0 16px 30px hsla(0, 0%, 0%, 0.125);
  z-index: 1;
  list-style: none;

  @media (min-width: 580px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 18px;
    padding: 30px;
  }
`;

export const ServiceIconBox = styled.div`
  margin-bottom: 0;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const Icon = styled.img`
  margin: auto;
`;

export const ServiceContentBox = styled.div`
  @media (width < 580px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    color: hsl(0, 0%, 84%);
    font-size: 15px;
    line-height: 1.6;

    @media (width < 580px) {
     text-align: center;
    }
  }
`;

export const ServiceItemTitle = styled.h4`
  margin-bottom: 7px;
`;
