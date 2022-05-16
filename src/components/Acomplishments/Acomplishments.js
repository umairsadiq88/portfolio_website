import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
// import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { certificate } from '../TimeLine/constants/constants';
import { BlogCard, CardInfo, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, Img } from '../Projects/ProjectsStyles';

// const data = [
//   { number: 20, text: 'Open Source Projects' },
//   { number: 1000, text: 'Students', },
//   { number: 1900, text: 'Github Followers', },
//   { number: 5000, text: 'Github Stars', }
// ];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Professional Acomplishments</SectionTitle>
    {/* <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes> */}
      <GridContainer>
      {certificate.map(({ id, image, title, description, tags, source, visit }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>
              {title}
            </HeaderThree>
            <Hr />
          </TitleContent>

          <CardInfo>
            {description}
          </CardInfo>
          <div>
             <TagList>
            {tags.map((tag, i) => {
              return <Tag key={i}>{tag}</Tag>;
            })}
          </TagList>
          </div>
      
        </BlogCard>
      ))}
      </GridContainer>

  </Section>

);

export default Acomplishments;
