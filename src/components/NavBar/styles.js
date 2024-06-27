import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: hsla(240, 1%, 17%, 0.75);
  backdrop-filter: blur(10px);
  border-radius: 12px 12px 0 0;
  box-shadow: 0 16px 30px hsla(0, 0%, 0%, 0.125);
  z-index: 5;

  @media (width >= 1024px) {
    position: absolute;
    bottom: auto;
    top: 0;
    left: auto;
    right: 0;
    width: max-content;
    border-radius: 0 12px;
    padding: 0 20px;
    box-shadow: none;
  }

  @media (width<= 580px) {
    border-radius: 20px 20px 0 0;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    align-items: center;
    padding: 0 10px;

    @media (min-width: 1024px) {
      gap: 30px;
      padding: 0 20px;
    }
  }

  li {
    display: inline;
    color: #fff;
    cursor: pointer;
    font-size: 16px;

    &.active {
      font-weight: bold;
      color: hsl(45, 100%, 72%);
    }

    @media (width<= 580px) {
      font-size: 14px;
    }
    
  }
`;
