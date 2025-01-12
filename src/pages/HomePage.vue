<script setup>
import CurrencyConversionWrapper from '../components/currency-conversion/CurrencyConversionWrapper.vue'
import { onBeforeMount } from 'vue'
import { useCurrenciesStore } from '@/stores/currenciesStore'

const currenciesStore = useCurrenciesStore()

onBeforeMount(async () => {
  await currenciesStore.fetchCurrencies()
})
</script>

<template>
  <CurrencyConversionWrapper />
</template>
