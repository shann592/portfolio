import ThemeToggle from './components/ThemeToggle'
import About from './sections/About'
import Project from './sections/Project'
import Timeline from './sections/Timeline'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className="flex flex-col gap-4 items-center p-16 w-full h-screen">
      <ThemeToggle />
      <About />
      <Project />
      <Timeline />
      <Contact />
      <Footer />
      <ToastContainer />
      {/* {showResume && } */}
    </div>
  )
}
export default App
