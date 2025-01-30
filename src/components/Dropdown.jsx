import { useEffect, useRef, useState } from 'react'
import DropdownButton from './DropdownButton'
import DropdownContent from './DropdownContent'
import PropTypes from 'prop-types'
import React from 'react'

const Dropdown = ({ content, selectedCurrency }) => {
  const dropDownRef = useRef()
  const [open, setOpen] = useState(false)


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])


  const enhancedContent = React.Children.map(
    content.props.children,
    (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          onClick: (...args) => {
            child.props.onClick?.(...args)
            setOpen(false) 
          },
        })
      }
      return child
    }
  )

  return (
    <div className="flex justify-end" ref={dropDownRef}>
      <DropdownButton
        toggle={() => setOpen(!open)}
        open={open}
        currency={selectedCurrency}
      />
      <DropdownContent open={open}>{enhancedContent}</DropdownContent>
    </div>
  )
}

Dropdown.propTypes = {
  content: PropTypes.node.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
}

export default Dropdown
