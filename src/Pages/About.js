import ServicesSection from '../components/ServicesSection';
import SkillsSection from '../components/SkillsSection';
import AboutInfo from '../components/AboutInfo';
import Tittle from '../components/Tittle';

const About = () => {
  return (
    <div>
      <Tittle title={'About Me'} />
      <AboutInfo />
      <Tittle title={'My Skills'} />
      <div className="skillsContainer">
        <SkillsSection skill={'Javascript'} progress={'70%'} width={'70%'} />
        <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
        <SkillsSection skill={'React Js'} progress={'80%'} width={'80%'} />
        <SkillsSection skill={'Node Js'} progress={'80%'} width={'80%'} />
        <SkillsSection skill={'Web Design'} progress={'60%'} width={'60%'} />
      </div>

      <Tittle title={'Services'} span={'Services'} />
      <div className="servives-container">
        <ServicesSection
          title={'React'}
          text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        />
        <ServicesSection
          title={'MERN'}
          text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        />
        <ServicesSection
          title={'GraphQL'}
          text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        />
      </div>
    </div>
  );
};

export default About;
