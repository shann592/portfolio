import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="flex justify-center items-center">
        <div className="flex items-center gap-2">
          <a href="https://x.com/shannformal323" target="_blank">
            <FaTwitter size="30px" />
          </a>
          <a href="https://www.linkedin.com/in/shannformal" target="_blank">
            <FaLinkedin size="30px" />
          </a>
          <a href="https://github.com/shann592" target="_blank">
            <FaGithub size="30px" />
          </a>
        </div>
      </div>
      <p className="mt-2 mb-5 text-sm text-nowrap">
        &#169; {new Date().getFullYear()} Shantanu Singh. All rights reserved.
      </p>
    </footer>
  )
}
export default Footer
