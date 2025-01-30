import PropTypes from 'prop-types'

const DropdownItem = ({ children, onClick }) => {
  return (
    <div
      className="p-[0.5rem] m-[0.1rem] w-[100%] rounded-[0.5rem] cursor-pointer hover:text-blue-600 dark:text-white dropdown-item]"
      onClick={onClick}
    >
      {children}
    </div>
  )
}

DropdownItem.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

export default DropdownItem
