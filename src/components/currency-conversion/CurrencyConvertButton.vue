<script setup>
import { currencyService } from '@/services/CurrencyService'
import { computed } from 'vue'

const emit = defineEmits(['conversionDone'])

const props = defineProps({
  fromCurrency: {
    type: Object,
  },
  toCurrency: {
    type: Object,
  },
  amount: {
    type: Number,
  },
})

const buttonEnabled = computed(
  () =>
    Object.keys(props.toCurrency).length > 0 &&
    Object.keys(props.fromCurrency).length > 0 &&
    props.toCurrency &&
    props.amount,
)

const calculateCurrency = async () => {
  if (buttonEnabled.value) {
    const fromCurrencyCode = props.fromCurrency.shortCode
    const toCurrencyCode = props.toCurrency.shortCode
    const formattedAmount = props.amount

    const response = await currencyService.convertAmountToNewCurrency(
      fromCurrencyCode,
      toCurrencyCode,
      formattedAmount,
    )
    if (!response?.value) {
      alert('Conversion error - try again later')
      return
    }

    emit('conversionDone', response.value.toFixed(props.toCurrency.precisionNumber))
  }
}
</script>

<template>
  <div class="calculate-button-container">
    <button @click="calculateCurrency" @keyup.enter="calculateCurrency" :disabled="!buttonEnabled">
      Calculate
    </button>
  </div>
</template>

<style lang="scss" scoped>
.calculate-button-container {
  margin: 1rem 0;

  button {
    text-transform: uppercase;
  }
}
</style>
