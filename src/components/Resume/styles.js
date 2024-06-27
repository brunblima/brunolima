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

export const TimeLine = styled.section`
  margin-bottom: 30px;
  gap: 15px;
  margin-bottom: 25px;
`;

export const Skill = styled.section`
  ul {
    position: relative;
    background: linear-gradient(
      to bottom right,
      hsl(0, 0%, 25%) 0%,
      hsla(0, 0%, 25%, 0) 50%
    );
    padding: 15px;

    border-radius: 14px;
    box-shadow: 0 16px 30px hsla(0, 0%, 0%, 0.25);
    cursor: pointer;
    z-index: 1;
    padding: 20px;

    ::before {
      content: "";
      position: absolute;
      inset: 1px;
      background: linear-gradient(
          to bottom right,
          hsla(240, 1%, 18%, 0.251) 0%,
          hsla(240, 2%, 11%, 0) 100%
        ),
        hsl(240, 2%, 13%);
      border-radius: 14px;
      z-index: -1;
    }
  }

  li {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 8px;

  h3 {
    font-size: 18px;
    color: hsl(0, 0%, 98%);
    text-transform: capitalize;
  }

  h5 {
    font-size: 15px;
    font-weight: 500;
  }

  data {
    color: hsl(0, 0%, 84%);
    font-size: 15px;
    font-weight: 300;
  }
`;

export const TimeLineList = styled.ol`
  font-size: 15px;
  margin-left: 15px;

  @media (width < 580px) {
    margin-left: 5px;
  }

  li {
    position: relative;
    margin-bottom: 20px;

    &:not(:last-child)::before {
      content: "";
      position: absolute;
      top: -25px;
      left: -30px;
      width: 1px;
      height: calc(100% + 50px);
      background: hsl(0, 0%, 22%);

      @media (min-width: 580px) {
        left: -40px;
      }
    }

    ::after {
      content: "";
      position: absolute;
      top: 5px;
      left: -33px;
      height: 6px;
      width: 6px;
      background: linear-gradient(
        to right,
        hsl(45, 100%, 72%),
        hsl(35, 100%, 68%)
      );
      border-radius: 50%;
      box-shadow: 0 0 0 4px hsl(0, 0%, 22%);

      @media (min-width: 580px) {
        height: 8px;
        width: 8px;
        left: -43px;
      }
    }

    h4 {
      font-size: 15px;
      line-height: 1.3;
      margin-bottom: 7px;
    }
  }
`;

export const SkillProgress = styled.div`
  background: hsl(0, 0%, 22%);
  width: 100%;
  height: 8px;
  border-radius: 10px;
`;

export const SkillProgressFill = styled.div`
  background: linear-gradient(to right, hsl(45, 100%, 72%), hsl(35, 100%, 68%));
  
  height: 8px;
  border-radius: inherit;
`;

export const IconBox = styled.div`
  position: relative;
  background: linear-gradient(
    to bottom right,
    hsl(0, 0%, 25%) 0%,
    hsla(0, 0%, 25%, 0) 50%
  );
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: hsl(45, 100%, 72%);
  box-shadow: -4px 8px 24px hsla(0, 0%, 0%, 0.25);
  z-index: 1;
`;
