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

export const MapBox = styled.section`
  position: relative;
  height: 250px;
  width: 100%;
  border-radius: 16px;
  margin-bottom: 30px;
  border: 1px solid hsl(0, 0%, 22%);
  overflow: hidden;

  @media (min-width: 580px) {
    height: 380px;
    border-radius: 18px;
  }

  figure {
    margin: 0;
    width: 100%;
    height: 100%;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    filter: grayscale(1) invert(1);
  }
`;

export const ContactForm = styled.section`
  h3 {
    margin-bottom: 20px;
    font-size: 24px;
  }
`;

export const Form = styled.form`
  input {
    display: block;
    width: 100%;
    height: 50px;
    background: none;
    font: inherit;
    color: hsl(0, 0%, 98%);
    font-size: 15px;
    font-weight: 400;
    padding: 13px 20px;
    border: 1px solid hsl(0, 0%, 22%);
    border-radius: 14px;
    outline: none;
  }
`;

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 580px) {
    gap: 30px;
    margin-bottom: 30px;
  }
`;

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  background: none;
  font: inherit;
  min-height: 100px;
  height: 120px;
  max-height: 200px;
  resize: vertical;
  color: hsl(0, 0%, 98%);
  font-size: 15px;
  font-weight: 400;
  padding: 13px 20px;
  border: 1px solid hsl(0, 0%, 22%);
  border-radius: 14px;
  outline: none;
  margin-top: 25px;
  margin-bottom: 30px;
`;

export const Submit = styled.button`
  position: relative;
  width: 100%;
  background: linear-gradient(
    to bottom right,
    hsl(0, 0%, 25%) 0%,
    hsla(0, 0%, 25%, 0) 50%
  );
  color: hsl(45, 100%, 72%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 13px 20px;
  border-radius: 14px;
  font-size: 16px;
  text-transform: capitalize;
  box-shadow: 0 16px 40px hsla(0, 0%, 0%, 0.125);
  z-index: 1;
  transition: 0.25s ease;

  @media (min-width: 768px) {
    width: max-content;
    margin-left: auto;
  }

  @media (min-width: 580px) {
    font-size: 16px;
    padding: 16px 20px;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 1px;
    background: linear-gradient(
        to bottom right,
        hsla(240, 1%, 18%, 0.251) 0%,
        hsla(240, 2%, 11%, 0) 100%
      ),
      hsl(240, 2%, 13%);
    border-radius: inherit;
    z-index: -1;
    transition: 0.25s ease;
  }
  &::disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
