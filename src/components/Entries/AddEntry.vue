<script setup>

// imports

import { ref, reactive } from 'vue'
import { useStoreEntries } from 'src/stores/storeEntries'
import vSelectAll from 'src/directives/directiveSelectAll'
import { useLightOrDark } from "src/use/useLightOrDark"

// stores

const storeEntries = useStoreEntries()

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
  nameRef.value.focus()
}

const addEntryFormSubmit = () => {
  storeEntries.addEntry(addEntryForm)
  addEntryForReset()
}

</script>

<template>
  <q-form @submit.prevent="addEntryFormSubmit" class="row q-px-sm q-pb-sm q-col-gutter-sm bg-primary" >
    <div class="col">
      <q-input v-select-all ref="nameRef" v-model="addEntryForm.name" placeholder="Name" :bg-color="useLightOrDark('white', 'black')" dense outlined></q-input>
    </div>
    <div class="col">
      <q-input v-select-all v-model.number="addEntryForm.amount" placeholder="Amount" :bg-color="useLightOrDark('white', 'black')" type="number" step="0.01" input-class="text-right" dense outlined></q-input>
    </div>
    <div class="col col-auto">
      <q-btn type="submit" round color="primary" icon="add"></q-btn>
    </div>
  </q-form>
</template>

<style scoped>

</style>
