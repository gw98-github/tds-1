import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { currencyService } from '@/services/CurrencyService'
import Currency from '@/models/Currency'

export const useCurrenciesStore = defineStore('currencies', () => {
  const currencies = ref([])
  const fetched = ref(false)

  // list of currencies short codes, i.ex.: 'USD', 'PLN', 'EUR'
  const currenciesShortCodes = computed(() =>
    currencies?.value.length ? currencies.value.map((currency) => currency.shortCode) : [],
  )

  // fetch currencies from api and set value to currencies
  const fetchCurrencies = async () => {
    const fetchedCurrencies = await currencyService.getCurrencies()

    currencies.value = mapResponseToCurrencies(fetchedCurrencies)
    fetched.value = true
  }

  // maps list of currencies from response to Currency object list
  const mapResponseToCurrencies = (response) => {
    return response.map((currency) => new Currency(currency))
  }

  return { currencies, currenciesShortCodes, fetchCurrencies, fetched }
})
