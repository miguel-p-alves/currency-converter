/* eslint-disable react/prop-types */
const DropdownContent = ({ children, open }) => {
  return (
    <div
      className={`absolute min-w-[120px] flex flex-col items-center p-[1rem] mt[0.5rem] bg-white rounded-bl-2xl shadow-sm max-h-[40vh] overflow-y-scroll overflow-x-hidden dropdown-content ${
        open ? 'opacity-100 transform button-open' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  )
}
export default DropdownContent
