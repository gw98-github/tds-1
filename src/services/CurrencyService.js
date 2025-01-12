class CurrencyService {
  constructor() {
    this.API_URL = 'https://api.currencybeacon.com/v1/'
    this.API_KEY = import.meta.env.VITE_API_KEY
  }

  /**
   * GET list of currencies currencybeacon
   *
   * @returns {Promise<Array>} - returns list of currencies
   * @throws {Error} - when HTTP request fails
   */
  async getCurrencies() {
    const url = new URL(this.API_URL + 'currencies')
    const params = {
      api_key: this.API_KEY,
    }
    url.search = new URLSearchParams(params).toString()

    try {
      const response = await fetch(url, {
        method: 'GET',
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      return data.response
    } catch (error) {
      alert(error)
    }
  }

  /**
   * Convert some amount of money from currency to another currency
   *
   * @param {string} from - The base currency you would like to use for your rates.
   * @param {string} to - The currency you would like to convert to
   * @param {number} amount - The amount to convert
   *
   * @returns {Promise<{
   *   timestamp: number,
   *   date: Date,
   *   from: string,
   *   to: string,
   *   amount: number,
   *   value: number
   * }>} - Returns object with conversion details
   * @throws {Error} - when HTTP request fails
   */
  async convertAmountToNewCurrency(from, to, amount) {
    const url = new URL(this.API_URL + 'convert')
    const params = {
      from,
      to,
      amount,
      api_key: this.API_KEY,
    }
    url.search = new URLSearchParams(params).toString()

    try {
      const response = await fetch(url, {
        method: 'GET',
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      return data.response
    } catch (error) {
      alert(error)
    }
  }
}

// currencyService singleton
export const currencyService = new CurrencyService()
