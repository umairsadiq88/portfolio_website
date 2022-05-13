import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>

<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
  Welcome to My Umair Sadiq World of Development!!
    </SectionTitle>
    <SectionText>
    My development Services with using ReactJS, NodeJS &amp; many more 
    </SectionText>
    <Button onClick={props.handleClick}>Learn More</Button>
  </LeftSection>
</Section>

  </>
);

export default Hero;