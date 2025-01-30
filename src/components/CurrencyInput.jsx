import CountryData from '../CountryData'
import Dropdown from './Dropdown'
import DropdownItem from './DropdownItem'
import PropTypes from 'prop-types'
import CountryFlag from 'react-country-flag'

const CurrencyInput = (props) => {
  const getFlagCode = (currency) => {
    return CountryData[currency] || ''
  }

  return (
    <div className="flex flex-col font-[Poppins] relative">
      <label htmlFor="amount">Amount</label>
      <input
        className="bg-[#F5F5F5] dark:bg-[#1E1E1E] dark:border-[#444444] border border-[#E0E0E0] rounded-md py-[14px] pl-[12px] min-w-sm focus:outline-none focus:ring-0 focus:border-[#BDBDBD] placeholder-[#666666] "
        type="number"
        id="amount"
        name="amount"
        value={props.amount}
        onChange={(ev) => props.onAmountChange(ev.target.value)}
        placeholder="Enter amount"
        autoComplete="off"
      />
      <Dropdown
        content={
          <>
            {props.currencies.map((currency) => {
              return (
                // In the DropdownItem rendering:
                <DropdownItem
                  key={currency}
                  onClick={() => props.onCurrencyChange(currency)}
                >
                  <div className="flex items-center gap-3">
                    <CountryFlag
                      countryCode={getFlagCode(currency)}
                      svg
                      style={{ width: '20px', height: '15px' }}
                    />
                    {currency}
                  </div>
                </DropdownItem>
              )
            })}
          </>
        }
        selectedCurrency={props.currency}
        onCurrencyChange={props.onCurrencyChange}
      />
    </div>
  )
}

CurrencyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array.isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
  onAmountChange: PropTypes.func.isRequired,
}

export default CurrencyInput
