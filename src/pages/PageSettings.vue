<template>
  <q-page>
    <div class="q-pa-md">
      <q-list bordered padding>
        <q-item-label header>Entries</q-item-label>

        <q-item tag="label" v-ripple>
          <q-item-section>
            <q-item-label>Prompt to delete</q-item-label>
          </q-item-section>
          <q-item-section side >
            <q-toggle color="blue" v-model="storeSettings.settings.promptToDelete" val="battery" />
          </q-item-section>
        </q-item>
        <q-item tag="label" v-ripple>
          <q-item-section>
            <q-item-label>Show running balance</q-item-label>
          </q-item-section>
          <q-item-section side >
            <q-toggle color="blue" v-model="storeSettings.settings.showRunnningBalance" val="battery" />
          </q-item-section>
        </q-item>

      </q-list>
    </div>
  </q-page>
</template>

<script setup>

// imports
import { useStoreSettings } from "stores/storeSettings"

const storeSettings = useStoreSettings()



</script>
