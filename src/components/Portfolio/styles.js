import styled, { keyframes } from "styled-components";

// Definindo a animação de surgimento
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const IconBox = styled.div`
  --scale: 0.8;
  background: hsl(0, 0%, 22%);
  color: hsl(45, 100%, 72%);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(var(--scale));
  font-size: 20px;
  padding: 18px;
  border-radius: 12px;
  opacity: 0;
  z-index: 1;
  transition: opacity 0.25s ease, transform 0.25s ease;
`;

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

export const Projects = styled.section`
  ul {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 10px;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.25s ease;
  }

  li {
    position: relative;
    cursor: pointer;
    animation: ${fadeInUp} 0.5s ease forwards; /* Aplicando a animação */
    opacity: 0; /* Inicialmente invisível */
    transform: translateY(10px); /* Inicialmente deslocado */

    &.active {
      display: block;
      animation: scaleUp 0.25s ease forwards;
    }
  }

  a {
    width: 100%;
  }

  h3 {
    color: hsl(0, 0%, 98%);
    font-size: 16px;
    font-weight: 400;
    text-transform: capitalize;
    line-height: 1.3;
    margin-left: 10px;
  }
  p {
    color: hsla(0, 0%, 84%, 0.7);
    font-size: 16px;
    font-weight: 300;
    margin-left: 10px;
  }

  figure {
    position: relative;
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 15px;
    transform: scale(0.95); /* Inicialmente reduzido */
    animation: scaleUp 0.25s ease forwards; /* Animação de entrada */
    animation-delay: var(--animation-delay); /* Atraso incremental */
    transition: transform 0.25s ease, opacity 0.25s ease; /* Transições para hover */

    &.active {
      opacity: 1;
      transform: scale(1);
    }

    &:hover img {
      transform: scale(1.1); /* Zoom na imagem */
    }

    &:hover ${IconBox} {
      opacity: 1; /* Mostrar o ícone */
    }

    @media (min-width: 450px) {
      height: auto;
    }

    @media (min-width: 580px) {
      border-radius: 16px;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: transparent;
      z-index: 1;
      transition: 0.25s ease;
    }
  }
`;

export const Filter = styled.div`
  ul {
    display: none;

    @media (min-width: 768px) {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 25px;
      padding-left: 5px;
      margin-bottom: 30px;
    }

    li button.active {
      color: hsl(45, 100%, 72%); /* Cor do botão ativo */
      font-weight: bold; /* Negrito para destaque */
    }
  }

  button {
    @media (min-width: 768px) {
      color: hsl(0, 0%, 84%);
      font-size: 15px;
      transition: 0.25s ease;

      &:active {
        color: hsl(45, 100%, 72%);
      }
    }
  }
`;

export const FilterSelectBox = styled.div`
  position: relative;
  margin-bottom: 25px;

  @media (min-width: 768px) {
    display: none;
  }

  button {
    background: hsl(240, 2%, 12%);
    color: hsl(0, 0%, 84%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 12px 16px;
    border: 1px solid hsl(0, 0%, 22%);
    border-radius: 14px;
    font-size: 15px;
    font-weight: 300;
  }

  ul {
    background: hsl(240, 2%, 12%);
    position: absolute;
    top: calc(50% + 10px);
    width: 100%;
    padding: 6px;
    border: 1px solid hsl(0, 0%, 22%);
    border-radius: 14px;
    z-index: 2;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: 0.15s ease-in-out;

    &.open {
      opacity: 1;
      visibility: visible;
      pointer-events: all;
    }

    li {
      padding: 10px;

      &:hover {
        background: hsl(240, 2%, 22%);
      }
    }
  }
`;
