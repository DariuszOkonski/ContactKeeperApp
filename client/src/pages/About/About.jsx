import configText from '../../utils/cofigText';
import './About.css';

const About = () => {
  return (
    <div className='about'>
      <h1 className='about__title'>{configText.about.title}</h1>
      <p className='about__text'>{configText.about.text}</p>
      <p className='about__author'>{configText.about.author}</p>
      <p className='about__version'>{configText.about.version}</p>
    </div>
  );
};

export default About;
