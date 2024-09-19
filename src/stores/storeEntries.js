import { defineStore } from "pinia";
import { uid, Notify } from 'quasar'
import { computed, ref } from "vue";

export const useStoreEntries = defineStore('entries', () => {

  // state

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

  // getters

  const balance = computed(() => {
    return entries.value.reduce((accumulator, {amount}) => {
      return accumulator + amount
    }, 0)
    // let balance = 0
    // storeEntries.entries.value.forEach(entry => {
    //   balance = balance + entry.amount
    // })
    // return balance
  })

  // actions

  const addEntry = (addEntryForm) => {
    const newEntry = Object.assign({}, addEntryForm, {id: uid()})
    entries.value.push(newEntry)
  }

  const deleteEntry = (entryId) => {
    const index = entries.value.findIndex(entry => entry.id === entryId)
    entries.value.splice(index, 1)
    Notify.create({
      message: 'Entry deleted',
      position: 'top'
    })
  }

  // returns
  return {
    // state
    entries,

    // getters
    balance,

    // actions
    addEntry,
    deleteEntry
  }

})
