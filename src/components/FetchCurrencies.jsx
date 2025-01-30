import axios from 'axios'

const API_URL = 'http://data.fixer.io/api/latest'
const API_KEY = 'bd04c45807c428e957fe6b434ea4f37e'

const fetchCurrencies = async (setRates, setLoading, setError) => {
  setLoading(true)
  try {
    const response = await axios.get(`${API_URL}?access_key=${API_KEY}`)
    setRates(response.data.rates) 
  } catch (err) {
    setError(err)
  } finally {
    setLoading(false)
  }
}

export default fetchCurrencies
