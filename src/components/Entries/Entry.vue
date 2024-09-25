<script setup>

// imports
import { useQuasar } from 'quasar'
import { useStoreEntries } from 'src/stores/storeEntries'
import { useCurrencify } from "src/use/useCurrencify"
import { useAmountColorClass } from "src/use/useAmountColorClass"
import { useLightOrDark } from "src/use/useLightOrDark"
import vSelectAll from 'src/directives/directiveSelectAll'
import vAutofocus from 'src/directives/directiveAutofocus'
import { useStoreSettings } from "stores/storeSettings"

// quasar
const $q = useQuasar()


// stores
const storeEntries = useStoreEntries()
const storeSettings = useStoreSettings()

// props
const props = defineProps({
  entry: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

// slide items
const onEntrySlideRight = ({ reset }, entry) => {
  if (storeSettings.settings.promptToDelete) promptToDelete(reset, entry)
  else storeEntries.deleteEntry(entry.id)
}

const promptToDelete = (reset, entry) => {
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
  <q-slide-item :class="!entry.paid ? useLightOrDark('bg-white', 'bg-black') : useLightOrDark('bg-grey-2', 'bg-grey-10')" :id="`id-${entry.id}`" @left="onEntrySlideLeft($event, entry)" @right="onEntrySlideRight($event, entry)" left-color="positive" right-color="negative">
    <template v-slot:left>
      <q-icon name="done" />
    </template>
    <template v-slot:right>
      <q-icon name="delete" />
    </template>
    <q-item class="row">
      <q-item-section class="text-weight-bold col" :class="[useAmountColorClass(props.entry.amount), {'text-strike': entry.paid}]">
        {{ props.entry.name }}
        <q-popup-edit :model-value="props.entry.name" anchor="top left" :offset="[16, 12]" buttons label-set="OK" @save="onNameUpdate" :cover="false" auto-save v-slot="scope">
          <q-input v-select-all v-model="scope.value" dense v-autofocus @keyup.enter="scope.set" />
        </q-popup-edit>
      </q-item-section>
      <q-item-section class="text-weight-bold relative-position col" :class="[useAmountColorClass(props.entry.amount)]" side>
        <span :class="{'text-strike': entry.paid}">{{ useCurrencify(props.entry.amount) }}</span>
        <q-popup-edit :model-value="props.entry.amount" anchor="top right" self="top right" :offset="[16, 12]" buttons label-set="OK" @save="onAmountUpdate" :cover="false" auto-save v-slot="scope">
          <q-input v-select-all :rules="[val => typeof val === 'number' || 'Enter a valid number']" v-model.number="scope.value" :validate="val => typeof val === 'number'" input-class="text-right" step="0.01" type="number" dense v-autofocus @keyup.enter="scope.set" />
        </q-popup-edit>
        <q-chip v-if="storeSettings.settings.showRunnningBalance" class="absolute-bottom-right running-balance" :class="useAmountColorClass(storeEntries.runningBalances[index])" outline dense size="9px">
          {{ useCurrencify(storeEntries.runningBalances[index]) }}
        </q-chip>
      </q-item-section>
      <q-item-section v-if="storeEntries.options.sort" side>
        <q-icon class="handle" name="reorder" color="primary" />
      </q-item-section>
    </q-item>
  </q-slide-item>
</template>

<style scoped>

</style>
