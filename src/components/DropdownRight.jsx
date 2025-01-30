/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import DropdownButton from './DropdownButton'
import DropdownContent from './DropdownContent'

const DropdownRight = ({ content }) => {
  const dropDownRef = useRef()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const toggleDropdown = () => {
    setOpen((open) => !open)
  }
  return (
    <div className="flex justify-end" ref={dropDownRef}>
      <DropdownButton toggle={toggleDropdown} open={open} />
      <DropdownContent open={open}>{content}</DropdownContent>
    </div>
  )
}
export default DropdownRight
