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

// props

const props = defineProps({
  entry: {
    type: Object,
    required: true
  }
})

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
const onEntrySlideLeft = ({ reset }, entry) => {
  storeEntries.updateEntry(entry.id, {paid: !entry.paid})
  reset()
}

// name and amount update
const onNameUpdate = (value) => {
  storeEntries.updateEntry(props.entry.id, {name: value})
}
const onAmountUpdate = (value) => {
  storeEntries.updateEntry(props.entry.id, {amount: value})
}

</script>

<template>
  <q-slide-item @left="onEntrySlideLeft($event, entry)" @right="onEntrySlideRight($event, entry)" left-color="positive" right-color="negative">
    <template v-slot:left>
      <q-icon name="done" />
    </template>
    <template v-slot:right>
      <q-icon name="delete" />
    </template>
    <q-item>
      <q-item-section class="text-weight-bold" :class="useAmountColorClass(props.entry.amount)">
        {{ props.entry.name }}
        <q-popup-edit :model-value="props.entry.name" anchor="top left" :offset="[16, 12]" buttons label-set="OK" @save="onNameUpdate" :cover="false" auto-save v-slot="scope">
          <q-input v-model="scope.value" dense autofocus @keyup.enter="scope.set" />
        </q-popup-edit>
      </q-item-section>
      <q-item-section class="text-weight-bold" :class="useAmountColorClass(props.entry.amount)" side>
        {{ useCurrencify(props.entry.amount) }}
        <q-popup-edit :model-value="props.entry.amount" anchor="top left" :offset="[16, 12]" buttons label-set="OK" @save="onAmountUpdate" :cover="false" auto-save v-slot="scope">
          <q-input v-model.number="scope.value" input-class="text-right" step="0.01" type="number" dense autofocus @keyup.enter="scope.set" />
        </q-popup-edit>
      </q-item-section>
    </q-item>
  </q-slide-item>
</template>

<style scoped>

</style>
