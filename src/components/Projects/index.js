import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import krustyKrab from '../../assets/images/krusty-krab.jpg'
import codeQuiz from '../../assets/images/quiz-main-page.png'
import workScheduler from '../../assets/images/work-day-planner.PNG'
import weaterDashboard from '../../assets/images/weather-dashboard.PNG'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container projects-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
            idx={15}
          />
        </h1>
        <a href="https://taylor25et.github.io/Project-1-KrustyKrabs/">
            <img src={krustyKrab} alt="Howdy" />Krusty Krab
        </a>
        <a href="https://nathanmilburn.github.io/NBM-Homework-04-Code-Quiz/">
            <img src={codeQuiz} alt="Howdy" />Code Quiz
        </a>
        <a href="https://nathanmilburn.github.io/NBM-Homework-05-Work-Day-Scheduler/">
            <img src={workScheduler} alt="Howdy" />Work Day Scheduler
        </a>
        <a href="https://nathanmilburn.github.io/NBM-Homework-06-WeatherDashboard/">
            <img src={weaterDashboard} alt="Howdy" />Weather Dashboard
        </a>
        

      </div>
    </div>
  )
}

export default Projects
