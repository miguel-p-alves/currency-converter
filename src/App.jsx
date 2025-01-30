import Converter from './components/Converter'
import Footer from './components/Footer'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const body = document.body
    if (darkMode) {
      body.classList.add('dark')
    } else {
      body.classList.remove('dark')
    }

    return () => {
      body.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }
  useEffect(() => {
    if (animate) {
      // Remove a animação após 0.5s (tempo da animação)
      setTimeout(() => {
        setAnimate(false)
      }, 500) // tempo da animação
    }
  }, [animate])
  useEffect(() => {
    setAnimate(true) // Ativa a animação sempre que darkMode mudar
  }, [darkMode])

  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="text-center mt-[70px] mb-[133px] text-4xl text-[#333333] dark:text-[#fff] font-bold font-[Poppins]">
        Currency Converter.
      </h1>
      <Converter />
      <Footer />
      <button
        className="absolute w-16 h-16 bottom-30 right-16 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold"
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <FontAwesomeIcon
            icon={faMoon}
            className={`text-2xl ${animate ? 'animate-slideRight' : ''}`}
          />
        ) : (
          <FontAwesomeIcon
            icon={faSun}
            className={`text-2xl ${animate ? 'animate-slideLeft' : ''}`}
          />
        )}
      </button>
    </div>
  )
}

export default App
