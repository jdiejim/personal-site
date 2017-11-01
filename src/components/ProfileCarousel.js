import React, { Component } from 'react';
import p1 from '../assets/p1.jpeg';
import p2 from '../assets/p2.jpeg';
import p3 from '../assets/p3.jpeg';
import './styles/ProfileCarousel.css';

class ProfileCarousel extends Component {
  constructor() {
    super();
    this.state = {
      position: 0,
      pics: [p1, p2, p3],
      updateInterval: null,
    };

    this.updateProfile = this.updateProfile.bind(this);
  }

  componentDidMount() {
    const updateInterval = setInterval(this.updateProfile, 1000);

    this.setState({ updateInterval });
  }
  
  componentWillUnmount() {
    clearInterval(this.state.updateInterval);
  }

  updateProfile() {
    let { position } = this.state;
    const newPosition = position === 2 ? 0 : position += 1;
    
    this.setState({ position: newPosition });
  }
  
  render() {
    const { pics, position } = this.state;
    const viewPosition = { left: `${position * -100}%` };
    const profilePics = pics.map((pic, i) => {
      const style = { 
        left: `${i * 100}%`,
        backgroundImage: `url(${pic})`, 
      };

      return <div key={`p${i}`} className="ProfileCarousel-pic" style={style} />;
    });

    return (
      <section className="ProfileCarousel">
        <article className="ProfileCarousel-viewbox" style={viewPosition}>
          {profilePics}
        </article>
      </section>
    );
  }
}

export default ProfileCarousel;
