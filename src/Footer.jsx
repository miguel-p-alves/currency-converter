import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="w-full mt-auto bg-gray-100 text-center py-4 font-[Inter] dark:bg-[#1A1A1A]">
      <p className="mb-[15px] text-[#333333] text-lg dark:text-[#E0E0E0]">
        Developed by Miguel Alves using React and Tailwind CSS.
      </p>
      <div className="flex justify-center gap-3">
        <a href="https://github.com/miguel-p-alves" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-3xl text-[#333333] dark:text-[#BDBDBD] hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
          />
        </a>
        <a href="https://www.linkedin.com/in/miguelpalves19/" target="_blank">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-3xl text-[#333333] dark:text-[#BDBDBD] hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
          />
        </a>
      </div>
    </footer>
  )
}
export default Footer
