<template>
  <q-page>
    <div class="q-pa-md">
      <transition appear enter-active-class="animated jackInTheBox slower">
        <NothingHere v-if="!storeEntries.entries.length" />
      </transition>
      <q-list v-if="storeEntries.entries.length" class="entries">
        <Sortable @end="storeEntries.sortEnd" :list="storeEntries.entries" :options="{handle: '.handle'}" item-key="id" tag="div">
          <template #item="{element, index}">
            <Entry :key="element.id" :entry="element" :index="index" />
          </template>
        </Sortable>
      </q-list>
    </div>
    <q-footer class="bg-transparent">
      <transition appear enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
        <Balance v-if="storeEntries.entries.length" />
      </transition>
      <AddEntry />
    </q-footer>
  </q-page>
</template>

<script setup>

// imports
import Balance from "components/Entries/Balance.vue"
import AddEntry from "components/Entries/AddEntry.vue"
import Entry from "components/Entries/Entry.vue"
import NothingHere from "components/Entries/NothingHere.vue"
import { Sortable } from "sortablejs-vue3"
import { useStoreEntries } from "stores/storeEntries"

// stores
const storeEntries = useStoreEntries()


</script>
