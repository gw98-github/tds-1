<script setup>
import Currency from '@/models/Currency'
import { ref, watch } from 'vue'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  currency: {
    type: Object,
    required: true,
    validator: (value) => value instanceof Currency || {},
  },
})

const amount = ref(0)

const onInput = (event) => {
  const value = parseFloat(event.target.value)
  const precisionFactor = Math.pow(10, props.currency.precisionNumber)

  // input value as a number with precision of 'precisionNumber' as decimal number
  const result = Math.floor(value * precisionFactor) / precisionFactor

  if (!isNaN(result)) {
    amount.value = result
    emit('update:modelValue', result)
  }
}

watch(
  () => props.modelValue,
  (newValue) => {
    amount.value = newValue
  },
)

// clear amount when currency has changed
watch(
  () => props.currency,
  () => {
    amount.value = 0
  },
)
</script>

<template>
  <div class="currency-input">
    <div v-if="currency?.symbolFirst && currency.symbol">
      {{ currency.symbol }}
    </div>
    <input
      type="number"
      v-model="amount"
      :step="currency.precision"
      @input="onInput"
      min="0"
      :disabled="!currency.precision"
    />
    <div v-if="!currency?.symbolFirst && currency.symbol">
      {{ currency.symbol }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.currency-input {
  display: flex;
  height: 2rem;
  gap: 0.25rem;
  align-items: center;

  input {
    height: 2rem;
  }
}
</style>
