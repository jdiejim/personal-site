import React from 'react';
import ProfileCarousel from './ProfileCarousel';
import p1 from '../assets/p1.jpeg';
import github from '../assets/github.svg';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';
import './styles/About.css';

function About() {
  const profilePic = { backgroundImage: `url(${p1})` };
  const linkedinBG = { backgroundImage: `url(${linkedin})` };
  const githubBG = { backgroundImage: `url(${github})` };
  const twitterBG = { backgroundImage: `url(${twitter})` };

  return (
    <section className="About">
      <article className="About-description">
        <section className="About-banner">
          <div className="About-banner-pic" style={profilePic} />
          <div className="About-title-wrapper">
            <h1 className="About-title">Juan Jimenez</h1>
            <p className="About-subtitle">Software Developer</p>
          </div>
        </section>
        <section className="About-story">
          <p>I am a front-end developer with a background in finance, and a great passion in programming. I am a person who loves to create and innovate, and programming gives me the perfect platform to do so.</p>
          <p>I also enjoy mixing design principles and data analysis to provide creative solutions, that not only have an intuitive design, but also a great user experience.</p>
        </section>
        <section className="About-links">
          <a style={linkedinBG} className="About-link" href="https://www.linkedin.com/in/jdiejim">LinkedIn</a>
          <a style={githubBG} className="About-link" href="https://github.com/jdiejim">Github</a>
          <a style={twitterBG} className="About-link" href="https://twitter.com/jdiejim">Twitter</a>
          <a className="About-resume" href="https://www.turing.io/sites/default/files/resumes/Juan%20Jimenez%20Resume.pdf">Resume</a>
        </section>
      </article>
      <ProfileCarousel />
    </section>
  );
}

export default About;
