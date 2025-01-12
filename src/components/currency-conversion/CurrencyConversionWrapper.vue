<script setup>
import { onBeforeMount } from 'vue'
import { useCurrenciesStore } from '@/stores/currenciesStore'
import CurrencyConversionBody from './CurrencyConversionBody.vue'

const currenciesStore = useCurrenciesStore()

onBeforeMount(async () => {
  await currenciesStore.fetchCurrencies()
})
</script>

<template>
  <div class="currency-conversion-wrapper">
    <div v-if="!currenciesStore?.fetched" class="currency-conversion-wrapper__loading-label">
      Loading...
    </div>
    <CurrencyConversionBody v-else-if="currenciesStore.currencies?.length !== 0" />
    <div v-else>
      <h1>Service currently unavailable. Please try again later.</h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
.currency-conversion-wrapper {
  width: 100%;

  &__loading-label {
    text-align: center;
  }

  h1 {
    text-align: center;
  }
}
</style>
