import React from 'react';
import { DiFirebase, DiReact, DiZend, DiDocker, DiCloud9, DiPhotoshop, DiIllustrator} from 'react-icons/di';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (


  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end to Design
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with Next.Js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with Node.Js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UX-UI Designer</ListTitle>
          <ListParagraph>
            Experience with Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiCloud9 size="3rem" />
        <ListContainer>
          <ListTitle>DevOps</ListTitle>
          <ListParagraph>
            Experience with Dockers, Kubernetes
          </ListParagraph>
        </ListContainer>
      </ListItem>
      

      <ListItem>
        <DiIllustrator size="3rem" />
      

        <ListContainer>
          <ListTitle>Graphics Designer</ListTitle>
          <ListParagraph>
            Experience with Adobe Illustrator,   Adobe Photoshop, Corel Draw
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
