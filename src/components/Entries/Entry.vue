<script setup>

// imports

import { useQuasar } from 'quasar'
import { useStoreEntries } from 'src/stores/storeEntries'
import { useCurrencify } from "src/use/useCurrencify"
import { useAmountColorClass } from "src/use/useAmountColorClass"

// quasar

const $q = useQuasar()


// stores

const storeEntries = useStoreEntries()

// slide items

const onEntrySlideRight = ({ reset }, entry) => {
  $q.dialog({
    title: 'Delete Entry',
    message: `Would you like to delete this entry?
    <div class="text-weight-bold ${useAmountColorClass(entry.amount)}">
        ${entry.name} : ${useCurrencify(entry.amount)}
    </div>`,
    // cancel: true,
    html: true,
    persistent: true,
    ok: {
      label: 'Delete',
      color: 'negative'
    },
    cancel: {
      color: 'primary'
    }

  }).onOk(() => {
    storeEntries.deleteEntry(entry.id)
  }).onCancel(() => {
    reset()
  })
}

</script>

<template>
  <q-slide-item v-for="entry in storeEntries.entries" :key="entry.id" @left="" @right="onEntrySlideRight($event, entry)" left-color="positive" right-color="negative">
    <!--          <template v-slot:left>-->
    <!--            <q-icon name="done" />-->
    <!--          </template>-->
    <template v-slot:right>
      <q-icon name="delete" />
    </template>
    <q-item>
      <q-item-section class="text-weight-bold" :class="useAmountColorClass(entry.amount)">{{ entry.name }}</q-item-section>
      <q-item-section class="text-weight-bold" :class="useAmountColorClass(entry.amount)" side>{{ useCurrencify(entry.amount) }}</q-item-section>
    </q-item>
  </q-slide-item>
</template>

<style scoped>

</style>
