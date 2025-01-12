<script setup>
import CurrencySelector from './CurrencySelector.vue'
import { ref } from 'vue'
import { useCurrenciesStore } from '@/stores/currenciesStore'
import CurrencyInput from './CurrencyInput.vue'
import CurrencyConvertButton from './CurrencyConvertButton.vue'

const currenciesStore = useCurrenciesStore()
const fromCurrency = ref({})
const toCurrency = ref({})
const amount = ref(0)
const result = ref(0)

const handleCurrencyChange = (newCurrency, direction) => {
  const newCurrencyValue = currenciesStore.currencies.find(
    (currency) => currency.shortCode === newCurrency,
  )

  if (direction === 'from') {
    fromCurrency.value = newCurrencyValue
  } else if (direction === 'to') {
    toCurrency.value = newCurrencyValue
  }
}

const handleConversionDone = (resultValue) => {
  const currencySymbol = toCurrency.value.symbol
  result.value = toCurrency.value.symbolFirst
    ? currencySymbol + resultValue
    : resultValue + currencySymbol
}
</script>

<template>
  <div class="currency-conversion-wrapper">
    <div class="currency-conversion-wrapper__container">
      <div>AMOUNT:</div>
      <CurrencyInput v-model="amount" :currency="fromCurrency" />
    </div>
    <div class="currency-conversion-wrapper__container">
      <div>FROM:</div>
      <CurrencySelector @currency-change="handleCurrencyChange($event, 'from')" />
    </div>
    <div class="currency-conversion-wrapper__container">
      <div>TO:</div>
      <CurrencySelector @currency-change="handleCurrencyChange($event, 'to')" />
    </div>

    <CurrencyConvertButton
      :amount="amount"
      :from-currency="fromCurrency"
      :to-currency="toCurrency"
      @conversion-done="handleConversionDone"
    />

    <div class="currency-conversion-wrapper__container">
      <div>RESULT:</div>
      <div v-if="result">{{ result }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.currency-conversion-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__container {
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
}
</style>
