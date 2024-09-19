<script setup>

// imports

import { useAmountColorClass } from "src/use/useAmountColorClass";
import { useCurrencify } from "src/use/useCurrencify";
import { useStoreEntries } from "stores/storeEntries";

// stores

const storeEntries = useStoreEntries()

</script>

<template>
  <div class="row q-px-md q-py-sm q-mb-sm shadow-up-3">
    <div class="col text-grey-7 text-h6">Balance:</div>
    <div class="col text-h6 text-right" :class="useAmountColorClass(storeEntries.balance)">{{ useCurrencify(storeEntries.balance) }}</div>
  </div>
</template>

<style scoped>

</style>
