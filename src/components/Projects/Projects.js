import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';



const Projects = () => (
  
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description,tags,source,visit}) => (
<BlogCard key={id}>
<img src={image} />
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
  <TitleContent>
    Stack
  </TitleContent>
</div>
<TagList>
{p.tags.map((t, i) => {
                 return <Tag key={i}>{t}</Tag>;
               })}
             </TagList>
</BlogCard>
   )      ) }
    </GridContainer>
  </Section>
  
  //           </div>
  //           <UtilityList>
  //             <ExternalLinks href={p.visit}>Code</ExternalLinks>
  //             <ExternalLinks href={p.source}>Source</ExternalLinks>
  //           </UtilityList>
  //         </BlogCard>
  //       );
  //     })}
  //   </GridContainer>
  // </Section>
);

export default Projects;