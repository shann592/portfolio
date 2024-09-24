import { useState } from 'react'
import ThemeToggle from './components/ThemeToggle'
import About from './sections/About'
import Project from './sections/Project'
import Timeline from './sections/Timeline'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import ResumeView from './components/ResumeView'
import ViewResume from './components/ViewResume'

const App = () => {
  const [showResume, setShowResume] = useState(false)

  return (
    <div className="flex flex-col gap-4 items-center p-16 w-full h-screen">
      {/* {showResume ? <ViewResume /> : <ThemeToggle />} */}
      <ThemeToggle />
      <About setShowResume={setShowResume} />
      <Project />
      <Timeline />
      <Contact />
      <Footer />
      {/* {showResume && } */}
    </div>
  )
}
export default App
