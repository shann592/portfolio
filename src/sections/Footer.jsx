import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="flex justify-center items-center">
        <div className="flex items-center gap-2">
          <FaTwitter size="30px" />
          <FaLinkedin size="30px" />
          <FaGithub size="30px" />
        </div>
      </div>
      <p className="mt-2 mb-5">
        &#169; {new Date().getFullYear()} Shantanu Singh. All rights reserved.{' '}
      </p>
    </footer>
  )
}
export default Footer
