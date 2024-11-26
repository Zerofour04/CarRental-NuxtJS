<template>
    <v-card class="search-bar pa-4 mb-4">
      <div class="d-flex align-center gap-4">
        <v-text-field
          v-model="searchQuery"
          label="Fahrzeug suchen"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          @input="search"
        ></v-text-field>
  
        <v-select
          v-model="sortBy"
          :items="sortOptions"
          label="Sortieren nach"
          style="max-width: 200px"
        ></v-select>
      </div>
    </v-card>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useVehicleStore } from '~/stores/vehicles'
  
  const store = useVehicleStore()
  const searchQuery = ref('')
  
  const sortOptions = [
    { title: 'Name (A-Z)', value: 'name' },
    { title: 'Preis (aufsteigend)', value: 'priceAsc' },
    { title: 'Preis (absteigend)', value: 'priceDesc' },
    { title: 'Neuste zuerst', value: 'yearNew' },
    { title: 'Älteste zuerst', value: 'yearOld' }
  ]
  
  const sortBy = computed({
    get: () => store.sortBy,
    set: (value) => store.setSorting(value)
  })
  
  const search = () => {
    store.setSearchQuery(searchQuery.value)
  }
  </script>
  