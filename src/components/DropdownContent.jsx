import PropTypes from 'prop-types'

const DropdownContent = ({ children, open }) => {
 return (
   <div
     className={`absolute min-w-[165px] md:min-w-[200px] flex flex-col items-center p-2 md:p-4 mt-2 bg-white dark:bg-[#2D2D2D] rounded-lg shadow-lg max-h-[50vh] overflow-y-auto overflow-x-hidden z-50 ${
       open ? 'opacity-100 visible' : 'opacity-0 invisible'
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
