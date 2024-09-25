<script setup>

// imports

import { useAmountColorClass } from "src/use/useAmountColorClass";
import { useCurrencify } from "src/use/useCurrencify";
import { useStoreEntries } from "stores/storeEntries";
import { useLightOrDark } from "src/use/useLightOrDark";

// stores
const storeEntries = useStoreEntries()



</script>

<template>
  <div class="row items-center q-px-md q-py-sm q-mb-sm" :class="useLightOrDark('bg-white shadow-up-3', 'bg-black')">
    <div class="col text-grey-7 text-h6">Balance:</div>
    <div class="col text-h6 text-right" :class="useAmountColorClass(storeEntries.balance)">
      <div class="row">
        <div class="col">
          {{ useCurrencify(storeEntries.balance) }}
        </div>
      </div>
      <div v-if="storeEntries.balancePaid" class="row">
        <div class="col text-caption text-grey-6">
          Paid: <span class="text-weight-bold" :class="useAmountColorClass(storeEntries.balancePaid)">{{ useCurrencify(storeEntries.balancePaid) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
