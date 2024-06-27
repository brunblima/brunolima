import styled from "styled-components";

export const SidebarContainer = styled.aside`
  position: relative;
  overflow: hidden;
  transition: 0.5s ease-in-out;
  background-color: #1e1e1f;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #fff;
  padding: 15px;
  box-sizing: border-box;

  @media (width >= 1250px) {
    position: sticky;
    width: 300px;
    height: 763px;
  }

  @media (width < 1250px) {
    width: 950px;
    box-shadow: 0 24px 80px hsla(0, 0%, 0%, 0.25);
    margin-bottom: 20px;
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

  @media (width <= 580px) {
    width: 99.9%;
  }
`;

export const SidebarInfo = styled.div`
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 15px;

  @media (width >= 1250px) {
    flex-direction: column;
    padding-top: 40px;
  }
`;

export const AvatarBox = styled.figure`
  display: flex;
  justify-content: center;
  margin: 0 0 0 0;
`;

export const AvatarImage = styled.img`
  width: 150px;
  border-radius: 50%;

  @media (width >= 1250px) {
    width: 150px;
  }

  @media (width < 1250px) {
    width: 120px;
  }

  @media (width < 580px) {
    width: 80px;
  }
`;

export const InfoContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (width < 1250px) {
    display: flex;
    align-items: start;
    justify-content: center;
  }
`;

export const ContactInfo = styled.div`
  max-width: calc(100% - 46px);
  width: calc(100% - 46px);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
`;

export const ContactTitle = styled.p`
  color: hsla(0, 0%, 84%, 0.7);
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 2px;
`;

export const Name = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;

  @media (width < 580px) {
    font-size: 17px;
  }
`;

export const Title = styled.p`
  font-size: 14px;
  color: #bbb;
  margin: 0;
  margin-bottom: 20px;
  background-color: #2b2b2c;
  color: #fff;
  font-size: 12px;
  font-weight: 300;
  width: max-content;
  padding: 5px 18px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: hsl(0, 0%, 22%);
  margin: 30px 0;

  @media (width < 1250px) {
    margin: 25px 0;
  }
`;

export const IconBox = styled.div`
  position: relative;
  background: linear-gradient(
    to bottom right,
    hsl(0, 0%, 25%) 0%,
    hsla(0, 0%, 25%, 0) 50%
  );
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: hsl(45, 100%, 72%);
  box-shadow: -4px 8px 24px hsla(0, 0%, 0%, 0.125);
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  a {
    color: #fff;
    margin: 0 10px;
    font-size: 20px;

    &:hover {
      color: #bbb;
    }
  }
`;

export const Info = styled.div`
  max-height: ${(props) => (props.isVisible ? "1000px" : "0")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
`;

export const InfoList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  opacity: 1;
  visibility: visible;

  @media (width <= 1250px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px 15px;
  }
  @media (width <= 580px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const InfoItem = styled.li`
  min-width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const InfoMore = styled.button`
  position: absolute;
  border-radius: 0 15px;
  font-size: 13px;
  color: hsl(45, 100%, 72%);
  background: linear-gradient(
    to bottom right,
    hsl(0, 0%, 25%) 0%,
    hsla(0, 0%, 25%, 0) 50%
  );
  padding: 10px;
  box-shadow: 0 16px 30px hsla(0, 0%, 0%, 0.125);
  transition: 0.25s ease;
  z-index: 1;
  cursor: pointer;

  @media (min-width: 1250px) {
    display: none;
  }

  @media (width < 1250px) {
    top: -15px;
    right: -15px;
    padding: 10px;
  }
`;
