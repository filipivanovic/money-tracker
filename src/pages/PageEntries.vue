<template>
  <q-page>
    <div class="q-pa-md">
      <NothingHere v-if="!storeEntries.entries.length" />
      <q-list v-else bordered separator>
        <Entry v-for="entry in storeEntries.entries" :key="entry.id" :entry="entry" />
      </q-list>
    </div>
    <q-footer class="bg-transparent">
      <Balance />
      <AddEntry />
    </q-footer>
  </q-page>
</template>

<script setup>

// imports

import Balance from "components/Entries/Balance.vue"
import AddEntry from "components/Entries/AddEntry.vue";
import Entry from "components/Entries/Entry.vue";
import NothingHere from "components/Entries/NothingHere.vue";
import { useStoreEntries } from "stores/storeEntries";


const storeEntries = useStoreEntries()


</script>
