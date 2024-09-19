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
    <q-footer class="bg-transparent">
      <div class="row q-px-md q-py-sm q-mb-sm shadow-up-3">
        <div class="col text-grey-7 text-h6">Balance:</div>
        <div class="col text-h6 text-right" :class="useAmountColorClass(balance)">{{ useCurrencify(balance) }}</div>
      </div>
      <q-form @submit.prevent="addEntry" class="row q-px-sm q-pb-sm q-col-gutter-sm bg-primary" >
        <div class="col">
          <q-input ref="nameRef" v-model="addEntryForm.name" placeholder="Name" bg-color="white" dense outlined></q-input>
        </div>
        <div class="col">
          <q-input v-model.number="addEntryForm.amount" placeholder="Amount" bg-color="white" type="number" step="0.01" input-class="text-right" dense outlined></q-input>
        </div>
        <div class="col col-auto">
          <q-btn type="submit" round color="primary" icon="add"></q-btn>
        </div>
      </q-form>
    </q-footer>
  </q-page>
</template>

<script setup>

// imports

import { ref, reactive, computed } from 'vue'
import { uid } from 'quasar'
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

// balance

const balance = computed(() => {
  return entries.value.reduce((accumulator, {amount}) => {
    return accumulator + amount
  }, 0)
  // let balance = 0
  // entries.value.forEach(entry => {
  //   balance = balance + entry.amount
  // })
  // return balance
})

// add entry

const nameRef = ref(null)

const addEntryFormDefault = {
  name: '',
  amount: null
}

const addEntryForm = reactive({
  ...addEntryFormDefault
})

const addEntryForReset = () => {
  Object.assign(addEntryForm, addEntryFormDefault)
}

const addEntry = () => {
  const newEntry = {
    id: uid(),
    name: addEntryForm.name,
    amount: addEntryForm.amount
  }
  entries.value.push(newEntry)
  addEntryForReset()
  nameRef.value.focus()
}


</script>
