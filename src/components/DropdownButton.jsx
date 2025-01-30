import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import CountryFlag from 'react-country-flag'
import PropTypes from 'prop-types'
import CountryData from '../CountryData'

const DropdownButton = ({ open, toggle, currency }) => {
  const getFlagCode = (currency) => {
    return CountryData[currency] || ''
  }

  return (
    <button
      className={`absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-transparent border-none cursor-pointer p-0`}
      onClick={toggle}
    >
      <div className="flex items-center gap-2 bg-white dark:bg-[#2D2D2D] px-2 py-1 rounded-md">
        <CountryFlag
          countryCode={getFlagCode(currency)}
          svg
          style={{ width: '24px', height: '18px' }}
          className="shrink-0"
        />
        <span className="text-sm md:text-base font-medium dark:text-white truncate">
          {currency}
        </span>
        {open ? (
          <FontAwesomeIcon icon={faChevronUp} className="ml-1 text-sm" />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-sm" />
        )}
      </div>
    </button>
  )
}

DropdownButton.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
}

export default DropdownButton
