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
      // Define o valor de 1 BRL para USD assim que as taxas forem carregadas
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

  if (loading) return <p>Carregando...</p>
  if (error) return <p>Erro ao buscar os dados.</p>

  const currencies = Object.keys(rates)

  const sortedCurrencies = [
    ...popularCurrencies.filter((currency) => currencies.includes(currency)),
    ...currencies.filter((currency) => !popularCurrencies.includes(currency)),
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
    <main className="mx-auto bg-[#FFFFFF] dark:bg-[#2D2D2D] dark:text-[#BDBDBD] box-border min-w-[1248px] px-[60px] py-[95px] rounded-lg shadow-md">
      <div className="flex justify-between">
        <CurrencyInput
          currencies={sortedCurrencies}
          amount={amount1}
          currency={currency1}
          onCurrencyChange={handleCurrency1Change}
          onAmountChange={handleAmount1Change}
        />
        <div>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-[#2563EB] dark:text-[#3B82F6] hover:text-[#0048E7] dark:hover:text-[#2563EB] transition-colors duration-300 mt-10 cursor-pointer"
          >
            <path d="M0 8.53124V7.71874C0 7.04564 0.545645 6.49999 1.21875 6.49999H19.5V4.06249C19.5 2.97745 20.8152 2.43536 21.5806 3.20069L25.6431 7.26319C26.119 7.73916 26.119 8.51083 25.6431 8.98675L21.5806 13.0493C20.8181 13.8116 19.5 13.2771 19.5 12.1875V9.75H1.21875C0.545645 9.75 0 9.20435 0 8.53124ZM24.7812 16.25H6.5V13.8125C6.5 12.7301 5.1867 12.1834 4.41944 12.9507L0.356941 17.0132C-0.11898 17.4892 -0.11898 18.2608 0.356941 18.7368L4.41944 22.7993C5.18258 23.5623 6.5 23.0261 6.5 21.9375V19.5H24.7812C25.4544 19.5 26 18.9543 26 18.2812V17.4687C26 16.7956 25.4544 16.25 24.7812 16.25Z" />
          </svg>
        </div>
        <CurrencyInput
          currencies={sortedCurrencies}
          amount={amount2}
          currency={currency2}
          onCurrencyChange={handleCurrency2Change}
          onAmountChange={handleAmount2Change}
        />
      </div>
    </main>
  )
}

export default Converter
