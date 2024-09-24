import { FaFilePdf } from 'react-icons/fa'
const About = ({ setShowResume }) => {
  const handleClick = () => {
    setShowResume((prev) => !prev)
  }
  return (
    <section className="text-center w-[380px] md:w-[600px]">
      <h1 className="md:text-6xl text-3xl font-bold">Shantanu</h1>
      <h2 className="sm:lg md:text-2xl mt-4">
        Software Engineer & Web Developer
      </h2>
      <p className="text-sm font-semibold mt-2">
        Hi! 👋 I'm a Fullstack developer with expertise in Node.js, React.js,
        Tailwind CSS, and DaisyUI. I currently work at a multinational
        corporation, and in my free time, I enjoy watching anime, reading manga,
        and exploring coding blogs. Please feel free to check out my resume
        <a className="link link-primary" onClick={handleClick}>
          {' '}
          here
        </a>
        .
      </p>
    </section>
  )
}
export default About
