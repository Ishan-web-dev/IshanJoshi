import React from 'react'
import Intro from './Intro'
import AboutHero from './AboutHero'
import Projects from '../Projects/Projects'
import PersonalInfo from './PersonalInfo'
// import Services from '../Services/Services'

const About = () => {
  return (
    <div>
        <AboutHero />
        <Intro />
        <PersonalInfo />
        <Projects />
        {/* <Services /> */}
    </div>
  )
}

export default About