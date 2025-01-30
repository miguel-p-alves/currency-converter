import Dropdown from './Dropdown'
import DropdownItem from './DropdownItem'
import PropTypes from 'prop-types'
import CountryFlag from 'react-country-flag'

const CurrencyInput = (props) => {
  // Currency-to-country code mapping (fixo)
  const currencyToCountryCode = {
    USD: 'US',
    EUR: 'EU',
    JPY: 'JP',
    GBP: 'GB',
    CNY: 'CN',
    AUD: 'AU',
    CAD: 'CA',
    CHF: 'CH',
    BRL: 'BR',
    INR: 'IN',
    MXN: 'MX',
    RUB: 'RU',
    HKD: 'HK',
    ZAR: 'ZA',
    SEK: 'SE',
    NZD: 'NZ',
    SGD: 'SG',
    KRW: 'KR',
    ARS: 'AR',
    BDT: 'BD',
    // Mais moedas podem ser adicionadas aqui
  }

  // Função para obter o código da bandeira, agora tenta dinamicamente a partir do país
  const getFlagCode = (currency) => {
    // Primeiro tenta o mapeamento fixo
    const fixedFlag = currencyToCountryCode[currency]
    if (fixedFlag) return fixedFlag
  }

  return (
    <div className="flex flex-col font-[Poppins] relative">
      <label htmlFor="amount">Amount</label>
      <input
        className="bg-[#F5F5F5] dark:bg-[#1E1E1E] dark:border-[#444444] border border-[#E0E0E0] rounded-md py-[14px] pl-[12px] min-w-sm focus:outline-none focus:ring-0 focus:border-[#BDBDBD] placeholder-[#666666]"
        type="number"
        id="amount"
        name="amount"
        value={props.amount}
        onChange={(ev) => props.onAmountChange(ev.target.value)}
        placeholder="Enter amount"
        autoComplete="off"
      />
      <Dropdown
        onChange={(ev) => props.onCurrencyChange(ev.target.value)}
        content={
          <>
            {props.currencies.map((currency) => {
              return (
                <DropdownItem
                  key={currency}
                  onClick={() => props.onCurrencyChange(currency)}
                >
                  {/* Render country flag */}
                  <CountryFlag
                    countryCode={getFlagCode(currency)} // Obtem a bandeira com base na moeda
                    svg
                    style={{ width: 20, height: 15, marginRight: '8px' }}
                  />
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
  onCurrencyChange: PropTypes.func,
  onAmountChange: PropTypes.func,
}

export default CurrencyInput
