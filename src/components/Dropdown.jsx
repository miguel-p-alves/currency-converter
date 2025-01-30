import { useEffect, useRef, useState } from 'react'
import DropdownButton from './DropdownButton'
import DropdownContent from './DropdownContent'
import PropTypes from 'prop-types'
import React from 'react'

const Dropdown = ({ content, selectedCurrency }) => {
  const dropDownRef = useRef()
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  // Toggle dropdown open/close
  const toggleDropdown = () => {
    setOpen((prevOpen) => {
      if (!prevOpen) setSearchQuery('') // Reset search when opening
      return !prevOpen
    })
  }

  // Filter dropdown items based on search query
  const filteredContent = React.Children.toArray(content.props.children).filter(
    (child) => {
      if (!React.isValidElement(child)) return false

      // Safely access the currency value
      const currency = child.props.children.props.children[1] // Adjusted to match your structure
      return (
        currency && currency.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
  )

  // Enhance children to close dropdown on click
  const enhancedContent = React.Children.map(filteredContent, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        onClick: (...args) => {
          child.props.onClick?.(...args) // Call the original onClick handler
          setOpen(false) // Close the dropdown
        },
      })
    }
    return child
  })

  return (
    <div className="flex justify-end dark:text-white" ref={dropDownRef}>
      <DropdownButton
        toggle={toggleDropdown} // Pass toggleDropdown to DropdownButton
        open={open}
        currency={selectedCurrency}
      />
      <DropdownContent open={open}>
        <input
          type="text"
          placeholder="Search"
          className="w-[100px] p-2 mb-2 border-b dark:bg-[#2D2D2D] dark:border-[#444444] focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {enhancedContent}
      </DropdownContent>
    </div>
  )
}

// Add PropTypes here
Dropdown.propTypes = {
  content: PropTypes.node.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
}

export default Dropdown
