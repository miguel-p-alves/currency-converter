import PropTypes from 'prop-types'

const DropdownContent = ({ children, open }) => {
  return (
    <div
      className={`absolute min-w-[120px] flex flex-col items-center p-[1rem] mt[0.5rem] bg-white dark:bg-[#2D2D2D] rounded-bl-2xl shadow-sm max-h-[40vh] overflow-y-auto overflow-x-hidden dropdown-content  ${
        open ? 'opacity-100 transform button-open' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  )
}

DropdownContent.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default DropdownContent
