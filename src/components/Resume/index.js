import React from "react";
import {
  Container,
  Header,
  IconBox,
  Separator,
  Skill,
  SkillProgress,
  TimeLine,
  TitleWrapper,
  SkillProgressFill,
  TimeLineList,
} from "./styles";
import { FaBookOpen } from "react-icons/fa6";
const Resume = () => (
  <Container>
    <Header>
      <h2>Resumo</h2>
      <Separator />
    </Header>
    <TimeLine>
      <TitleWrapper>
        <IconBox>
          <FaBookOpen />
        </IconBox>
        <h3>Educação</h3>
      </TitleWrapper>
      <TimeLineList>
        <li>
          <h4>Gestão da Tecnologia da Informação</h4>
          <span>2015 - 2017</span>
          <p></p>
        </li>
        <li>
          <h4>Full-Stack JavaScript</h4>
          <span>2023 - 2024</span>
          <p></p>
        </li>
      </TimeLineList>
    </TimeLine>

    <TimeLine>
      <TitleWrapper>
        <IconBox>
          <FaBookOpen />
        </IconBox>
        <h3>Experiência</h3>
      </TitleWrapper>
      <TimeLineList>
        <li>
          <h4>Aprendiz da Tecnologia da Informação</h4>
          <span>2017 - 2019</span>
          <p></p>
        </li>
        <li>
          <h4>Estagio Q&A</h4>
          <span>2018 - 2018</span>
          <p></p>
        </li>
        <li>
          <h4>Analista de T.I</h4>
          <span>2019 - 2024</span>
          <p></p>
        </li>
      </TimeLineList>
    </TimeLine>

    <Skill>
      <h3>Minhas Habilidades</h3>

      <ul>
        <li>
          <TitleWrapper>
            <h5>React</h5>
            <data value="70">70%</data>
          </TitleWrapper>
          <SkillProgress>
            <SkillProgressFill style={{ width: "70%" }} />
          </SkillProgress>
        </li>

        <li>
          <TitleWrapper>
            <h5>React Native</h5>
            <data value="70">70%</data>
          </TitleWrapper>
          <SkillProgress>
            <SkillProgressFill style={{ width: "70%" }} />
          </SkillProgress>
        </li>

        <li>
          <TitleWrapper>
            <h5>JavaScript</h5>
            <data value="70">70%</data>
          </TitleWrapper>
          <SkillProgress>
            <SkillProgressFill style={{ width: "70%" }} />
          </SkillProgress>
        </li>

        <li>
          <TitleWrapper>
            <h5>TypeScript</h5>
            <data value="60">60%</data>
          </TitleWrapper>
          <SkillProgress>
            <SkillProgressFill style={{ width: "60%" }} />
          </SkillProgress>
        </li>

        <li>
          <TitleWrapper>
            <h5>Styled Components</h5>
            <data value="80">80%</data>
          </TitleWrapper>
          <SkillProgress>
            <SkillProgressFill style={{ width: "80%" }} />
          </SkillProgress>
        </li>

        <li>
          <TitleWrapper>  
            <h5>Firebase</h5>
            <data value="80">80%</data>
          </TitleWrapper>
          <SkillProgress>
            <SkillProgressFill style={{ width: "80%" }} />
          </SkillProgress>
        </li>

      </ul>
    </Skill>
  </Container>
);

export default Resume;
