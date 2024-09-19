<template>
  <q-page>
    <div class="q-pa-md">
      <q-list bordered separator>
        <q-item v-for="entry in entries">
          <q-item-section class="text-weight-bold" :class="useAmountColorClass(entry.amount)">
            {{ entry.name }}
          </q-item-section>

          <q-item-section class="text-weight-bold" :class="useAmountColorClass(entry.amount)" side>
            {{ useCurrencify(entry.amount) }}
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <q-footer>
      <div class="row q-pa-sm q-col-gutter-sm" >
        <div class="col">
          <q-input placeholder="Name" bg-color="white" dense outlined></q-input>
        </div>
        <div class="col">
          <q-input placeholder="Amount" bg-color="white" type="number" step="0.01" input-class="text-right" dense outlined></q-input>
        </div>
        <div class="col col-auto">
          <q-btn round color="primary" icon="add"></q-btn>
        </div>
      </div>
    </q-footer>
  </q-page>
</template>

<script setup>

// imports

import { ref } from 'vue'
import { useCurrencify } from "src/use/useCurrencify"
import { useAmountColorClass } from "src/use/useAmountColorClass"

// entries

const entries = ref([
  {
    id: 'id1',
    name: 'Salary',
    amount: 4999.99
  },
  {
    id: 'id2',
    name: 'Rent',
    amount: -999
  },
  {
    id: 'id3',
    name: 'Phone',
    amount: -14.99
  },
  {
    id: 'id4',
    name: 'Unknown',
    amount: 0
  },
])





</script>
