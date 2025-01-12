<script setup>
import { useCurrenciesStore } from '@/stores/currenciesStore'
import { ref, watch } from 'vue'

const emit = defineEmits(['currencyChange'])
const currenciesStore = useCurrenciesStore()

const selectedCurrency = ref('')

watch(selectedCurrency, (newCurrency) => {
  emit('currencyChange', newCurrency)
})
</script>

<template>
  <select class="currency-selector" v-model="selectedCurrency">
    <option
      v-for="(shortCode, index) in currenciesStore.currenciesShortCodes"
      :key="index"
      :value="shortCode"
    >
      {{ shortCode }}
    </option>
  </select>
</template>

<style lang="scss" scoped>
.currency-selector {
  width: 5rem;
  height: 2rem;
}
</style>
