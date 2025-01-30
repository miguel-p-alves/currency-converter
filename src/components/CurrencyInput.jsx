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
    <div className="flex flex-col font-[Poppins] relative w-full">
      <label htmlFor="amount" className="text-sm md:text-base mb-2">Amount</label>
      <div className="relative">
        <input
          className="bg-[#F5F5F5] dark:bg-[#1E1E1E] dark:border-[#444444] border border-[#E0E0E0] rounded-md py-3 md:py-[14px] pl-4 pr-24 md:pr-28 w-full focus:outline-none focus:ring-0 focus:border-[#BDBDBD] placeholder-[#666666] text-sm md:text-base h-14 md:h-16"
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
            props.currencies?.length > 0 ? (
              <>
                {props.currencies.map((currency) => {
                  const flagCode = getFlagCode(currency)
                  return (
                    <DropdownItem
                      key={String(currency)}
                      onClick={() => props.onCurrencyChange(String(currency))}
                    >
                      <div className="flex items-center gap-3 px-2 py-1.5">
                        {flagCode && (
                          <CountryFlag
                            countryCode={flagCode}
                            svg
                            style={{ width: '24px', height: '18px' }}
                          />
                        )}
                        <span className="text-sm md:text-base">{String(currency)}</span>
                      </div>
                    </DropdownItem>
                  )
                })}
              </>
            ) : null
          }
          selectedCurrency={props.currency}
        />
      </div>
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
