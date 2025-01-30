/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const DropdownButton = ({ open, toggle }) => {
  return (
    <button
      className={`absolute inset-y-6 right-5 cursor-pointer h-13.5 border-none focus:ring-0 focus:border-none text-sm text-[#333333] dark:text-[#BDBDBD] flex gap-1.5 items-center ${
        open ? 'button-open' : null
      }`}
      onClick={toggle}
    >
      Currency{' '}
      {open ? (
        <FontAwesomeIcon icon={faChevronUp} />
      ) : (
        <FontAwesomeIcon icon={faChevronDown} />
      )}
    </button>
  )
}
export default DropdownButton
