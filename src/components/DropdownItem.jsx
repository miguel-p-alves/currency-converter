import PropTypes from 'prop-types'

const DropdownItem = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer hover:bg-gray-100 dark:hover:bg-[#333333] p-2 flex justify-end gap-2 w-[100%]" // Adjust flex layout
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
