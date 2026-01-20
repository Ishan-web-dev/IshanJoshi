import React from 'react'
import Hero from './Hero/Hero'
import Intro from '../AboutPages/Intro'
import SkillsSection from '../SkillsSection/SkillsSection'
import Projects from '../Projects/Projects'

const Home = () => {
  return (
    <div>
        <Hero />
        <Intro />
        <SkillsSection />
        <Projects />
    </div>
  )
}

export default Home