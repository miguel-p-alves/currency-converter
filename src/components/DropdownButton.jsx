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
      className={`absolute inset-y-6 right-5 cursor-pointer h-13.5 border-none focus:ring-0 focus:border-none text-sm text-[#333333] dark:text-[#BDBDBD] flex gap-1.5 items-center ${
        open ? 'button-open' : null
      }`}
      onClick={toggle}
    >
      <div className="flex items-center gap-2">
        {currency && (
          <>
            <CountryFlag
              countryCode={getFlagCode(currency)}
              svg
              style={{ width: '20px', height: '15px' }}
            />
            {currency}
          </>
        )}
      </div>
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
