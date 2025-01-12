<script setup>
import Currency from '@/models/Currency'
import { useCurrenciesStore } from '@/stores/currenciesStore'
import { ref, watch, onMounted } from 'vue'

const emit = defineEmits(['currencyChange'])
const currenciesStore = useCurrenciesStore()
const props = defineProps({
  defaultCurrency: {
    type: Object,
    required: false,
    validator: (value) => value instanceof Currency,
  },
})

const selectedCurrency = ref('')

watch(selectedCurrency, (newCurrency) => {
  emit('currencyChange', newCurrency)
})

onMounted(() => {
  selectedCurrency.value = props.defaultCurrency?.shortCode ?? ''
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
