import styled from "styled-components";

export const MainContent = styled.article`
  position: relative;
  overflow: hidden;
  transition: 0.5s ease-in-out;
  background-color: #1e1e1f;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #fff;
  box-sizing: border-box;

  @media (width >= 1250px) {
    position: sticky;
    width: 950px;
    min-height: 763px;
    max-height: max-content;
  }

  @media (width < 1250px) {
    width: 950px;
    box-shadow: 0 24px 80px hsla(0, 0%, 0%, 0.25);
    margin-bottom: 30px;
  }

  @media (width < 1024px) {
    width: 800px;
  }

  @media (width < 860px) {
    width: 550px;
  }

  @media (width < 768px) {
    width: 99%;
  }

  @media (min-width: 580px) {
    padding: 30px
  }

  @media (width <= 580px) {
    width: 99.9%;
    padding: 30px
  }
`;
