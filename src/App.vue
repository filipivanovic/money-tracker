<template>
  <router-view />
</template>

<script setup>

import { useStoreSettings } from "stores/storeSettings";
import { onMounted } from "vue";

defineOptions({
  name: 'App'
});

const storeSettings = useStoreSettings()

onMounted(() => {
  storeSettings.loadSettings()
})

window.addEventListener('contextmenu', e => {
  e.preventDefault()
})

</script>
