import ThemeToggle from './components/ThemeToggle'
import About from './sections/About'
import Project from './sections/Project'
import Timeline from './sections/Timeline'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div className="flex flex-col gap-4 items-center p-16 w-full h-screen">
      <ThemeToggle />
      <About />
      <Project />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}
export default App
