<template>
  <div class="filters pa-4">
    <v-card class="pa-4">
      <div class="d-flex flex-wrap gap-4">
        <v-select
          v-model="store.filters.Fahrzeugklasse"
          :items="['SUV', 'Limousine', 'Sportwagen', 'Kombi']"
          label="Fahrzeugklasse"
          clearable
          class="filter-select"
        ></v-select>

        <v-select
          v-model="store.filters.Getriebe"
          :items="['Automatik', 'Manuell']"
          label="Getriebe"
          clearable
          class="filter-select"
        ></v-select>

        <v-select
          v-model="store.filters.Sitzplatz"
          :items="['2', '4', '5', '7']"
          label="Sitzplätze"
          clearable
          class="filter-select"
        ></v-select>

        <v-select
          v-model="store.filters.Kraftstoffart"
          :items="['Benzin', 'Diesel', 'Elektro']"
          label="Kraftstoffart"
          clearable
          class="filter-select"
        ></v-select>

        <v-select
          v-model="store.filters.Kofferraumvolumen"
          :items="['Klein', 'Mittel', 'Groß']"
          label="Kofferraum"
          clearable
          class="filter-select"
        ></v-select>

        <v-btn 
          color="primary" 
          @click="store.clearFilters()"
          class="mt-2"
        >
          Filter zurücksetzen
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script setup>
import { useVehicleStore } from '~/stores/vehicles'

const store = useVehicleStore()
</script>

<style scoped>
.filter-select {
  min-width: 200px;
}
</style>
