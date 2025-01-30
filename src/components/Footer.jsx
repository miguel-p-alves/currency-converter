import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-[#1A1A1A] border-t border-gray-200 dark:border-[#2D2D2D] mt-auto">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <p className="mb-4 text-[#333333] text-base md:text-lg dark:text-[#E0E0E0] text-center">
          Developed by Miguel Alves using React and Tailwind CSS.
        </p>
        <div className="flex justify-center gap-4 md:gap-6">
          <a
            href="https://github.com/miguel-p-alves"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-2xl md:text-3xl text-[#333333] dark:text-[#BDBDBD] hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-all duration-300 ease-in-out hover:-translate-y-1"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/miguelpalves19/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-2xl md:text-3xl text-[#333333] dark:text-[#BDBDBD] hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-all duration-300 ease-in-out hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
