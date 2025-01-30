import { useEffect, useRef, useState } from 'react'
import DropdownButton from './DropdownButton'
import DropdownContent from './DropdownContent'
import PropTypes from 'prop-types'
import React from 'react'

const Dropdown = ({ content = <></>, selectedCurrency }) => {
  const dropDownRef = useRef()
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

 
  const toggleDropdown = () => {
    setOpen((prevOpen) => {
      if (!prevOpen) setSearchQuery('') 
      return !prevOpen
    })
  }


  const filteredContent = React.Children.toArray(
    content.props?.children || []
  ).filter((child) => {
    if (!React.isValidElement(child)) return false

 
    const currencyElement = child.props.children.props.children[1]
    const currency =
      typeof currencyElement === 'string'
        ? currencyElement
        : currencyElement.props.children

    return (
      typeof currency === 'string' &&
      currency.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })


  const enhancedContent = React.Children.map(filteredContent, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        onClick: (...args) => {
          child.props.onClick?.(...args) 
          setOpen(false)
        },
      })
    }
    return child
  })

  return (
    <div
      className="flex justify-end dark:text-white relative md:static"
      ref={dropDownRef}
    >
      <DropdownButton
        toggle={toggleDropdown}
        open={open}
        currency={selectedCurrency}
      />
      <DropdownContent open={open}>
        <input
          type="text"
          placeholder="Search"
          className="w-full md:w-[160px] p-2 mb-2 border-b dark:bg-[#2D2D2D] dark:border-[#444444] focus:outline-none text-sm md:text-base"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {enhancedContent}
      </DropdownContent>
    </div>
  )
}


Dropdown.propTypes = {
  content: PropTypes.node.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
}

export default Dropdown
