import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

const DropdownButton = ({ open, toggle, currency }) => {
  return (
    <button
      className={`absolute inset-y-6 right-5 cursor-pointer h-13.5 border-none focus:ring-0 focus:border-none text-sm text-[#333333] dark:text-[#BDBDBD] flex gap-1.5 items-center ${
        open ? 'button-open' : null
      }`}
      onClick={toggle}
    >
      {currency}{' '}
      {open ? (
        <FontAwesomeIcon icon={faChevronUp} />
      ) : (
        <FontAwesomeIcon icon={faChevronDown} />
      )}
    </button>
  )
}

DropdownButton.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
}

export default DropdownButton
