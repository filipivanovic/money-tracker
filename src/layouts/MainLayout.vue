<template>
  <q-layout view="hHh lpR lFf">
    <q-header :elevated="useLightOrDark(true, false)">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <div class="absolute-center">
            <q-icon name="savings" />
            MoneyTracker
          </div>
        </q-toolbar-title>

        <q-btn v-if="$route.fullPath === '/'" :label="!storeEntries.options.sort ? 'Sort' : 'Done'" flat no-caps dense @click="storeEntries.options.sort = !storeEntries.options.sort" />

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="767"
      bordered
      class="bg-primary"
    >
      <q-list>
        <q-item-label
          header
          class="text-white"
        >
          Navigation
        </q-item-label>

        <EssentialLink
          v-for="link in navLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/navigation/NavLink.vue'
import { useStoreEntries } from 'src/stores/storeEntries'
import { useLightOrDark } from "src/use/useLightOrDark";

// stores

const storeEntries = useStoreEntries()

defineOptions({
  name: 'MainLayout'
})

const navLinks = [
  {
    title: 'Entries',
    icon: 'savings',
    link: '/'
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: '/settings'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
