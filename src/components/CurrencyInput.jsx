import Dropdown from './Dropdown'
import DropdownItem from './DropdownItem'
import PropTypes from 'prop-types'

const CurrencyInput = (props) => {
  return (
    <div className="flex flex-col font-[Poppins] relative">
      <label htmlFor="amount">Amount</label>
      <input
        className="bg-[#F5F5F5] dark:bg-[#1E1E1E] dark:border-[#444444] border border-[#E0E0E0] rounded-md py-[14px] pl-[12px] min-w-sm focus:outline-none focus:ring-0 focus:border-[#BDBDBD] placeholder-[#666666]"
        type="text"
        id="amount"
        name="amount"
        value={props.amount}
        placeholder="Enter amount"
      />
      <Dropdown
        content={
          <>
            {props.currencies.map((currency) => {
              return (
                <DropdownItem
                  key={currency}
                  onClick={() => props.onCurrencyChange(currency)}
                >
                  {currency}
                </DropdownItem>
              )
            })}
          </>
        }
        selectedCurrency={props.currency}
      />
    </div>
  )
}

CurrencyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array.isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
}

export default CurrencyInput
