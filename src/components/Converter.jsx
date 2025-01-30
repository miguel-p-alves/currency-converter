import { useEffect, useState } from 'react'
import CurrencyInput from './CurrencyInput'
import fetchCurrencies from './FetchCurrencies'

const Converter = () => {
  const [amount1, setAmount1] = useState(1)
  const [amount2, setAmount2] = useState(1)
  const [currency1, setCurrency1] = useState('BRL')
  const [currency2, setCurrency2] = useState('USD')

  const [rates, setRates] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const format = (number) => {
    return number.toFixed(4)
  }

  useEffect(() => {
    if (rates['BRL'] && rates['USD']) {
      setAmount2(format((1 * rates['USD']) / rates['BRL']))
    }
  }, [rates])

  const popularCurrencies = [
    'USD',
    'EUR',
    'JPY',
    'GBP',
    'CNY',
    'AUD',
    'CAD',
    'CHF',
    'BRL',
    'INR',
    'MXN',
    'RUB',
    'HKD',
    'ZAR',
    'SEK',
    'NZD',
    'SGD',
    'KRW',
    'ARS',
    'BDT',
  ]

  useEffect(() => {
    fetchCurrencies(setRates, setLoading, setError)
  }, [])


  const handleSwapCurrencies = () => {
    const temp = currency1
    const newAmount2 = (amount1 * rates[temp]) / rates[currency2]

    setCurrency1(currency2)
    setCurrency2(temp)
    setAmount2(format(newAmount2))
  }

  if (loading) return <p>Carregando...</p>
  if (error) return <p>Erro ao buscar os dados.</p>

  const currencies = Object.keys(rates)

  const sortedCurrencies = [
    ...popularCurrencies
      .filter((currency) => currencies.includes(String(currency)))
      .map(String),
    ...currencies
      .filter((currency) => !popularCurrencies.includes(String(currency)))
      .map(String),
  ]

  const handleAmount1Change = (amount1) => {
    if (currency1 === currency2) {
      setAmount2(amount1)
    } else {
      setAmount2(format((amount1 * rates[currency2]) / rates[currency1]))
    }
    setAmount1(amount1)
  }

  const handleCurrency1Change = (currency1) => {
    if (currency1 === currency2) {
      setAmount2(amount1)
    } else {
      setAmount2(format((amount1 * rates[currency2]) / rates[currency1]))
    }
    setCurrency1(currency1)
  }

  const handleAmount2Change = (amount2) => {
    if (currency1 === currency2) {
      setAmount1(amount2)
    } else {
      setAmount1(format((amount2 * rates[currency1]) / rates[currency2]))
    }
    setAmount2(amount2)
  }

  const handleCurrency2Change = (currency2) => {
    setCurrency2(currency2)
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]))
  }

  return (
    <main className="w-full min-h-[calc(100vh-160px)] mx-auto bg-[#FFFFFF] dark:bg-[#2D2D2D] dark:text-[#BDBDBD] box-border max-w-4xl lg:max-w-5xl xl:max-w-7xl px-8 md:px-12 lg:px-16 xl:px-20 py-12 md:py-20 rounded-lg shadow-md  md:min-h-[250px] flex flex-col justify-center">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-12">
        <CurrencyInput
          currencies={sortedCurrencies}
          amount={amount1}
          currency={currency1}
          onCurrencyChange={handleCurrency1Change}
          onAmountChange={handleAmount1Change}
          className="flex-1 min-w-[320px] md:min-w-[450px]"
        />

        <button
          onClick={handleSwapCurrencies}
          className="p-4 md:p-5 bg-blue-100 dark:bg-blue-900 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors mx-4"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="fill-current text-blue-600 dark:text-blue-300"
          >
            <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" />
          </svg>
        </button>

        <CurrencyInput
          currencies={sortedCurrencies}
          amount={amount2}
          currency={currency2}
          onCurrencyChange={handleCurrency2Change}
          onAmountChange={handleAmount2Change}
          className="flex-1 min-w-[320px] md:min-w-[450px]"
        />
      </div>
    </main>
  )
}

export default Converter
