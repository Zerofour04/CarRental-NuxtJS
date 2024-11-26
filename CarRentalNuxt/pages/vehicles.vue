<template>
  <div class="d-flex">
    <!-- Main content with cards on the left -->
    <div v-if="vehicleStore.vehicles.length" class="d-flex flex-wrap ma-4 flex-grow-1" style="max-width: calc(100% - 300px);">
      <SearchBar class="w-100 mb-4" />
      
      <v-card 
        v-for="vehicle in vehicleStore.filteredVehicles" 
        :key="vehicle.id"
        width="calc(33.33% - 24px)"
        class="ma-3"
      >
        <v-img
          :src="vehicle.BildURL"
          height="300"
          :aspect-ratio="16/9"
          contain
          class="bg-grey-lighten-2"
        ></v-img>
        <v-card-title>{{ vehicle.Fahrzeugname }}</v-card-title>
        <v-card-text>
          <div>Baujahr: {{ vehicle.Baujahr }}</div>
          <div>Fahrzeugklasse: {{ vehicle.Fahrzeugklasse }}</div>
          <div>Kraftstoffart: {{ vehicle.Kraftstoffart }}</div>
          <div>Getriebe: {{ vehicle.Getriebe || 'Nicht angegeben' }}</div>
          <div>Sitzplätze: {{ vehicle.Sitzplatz || 'Nicht angegeben' }}</div>
          <div>Kofferraum: {{ vehicle.Kofferraumvolumen || 'Nicht angegeben' }}</div>
          <div>Preis pro Tag: {{ vehicle.Tagesmiete || 'Nicht angegeben' }}€</div>
          <div>Status: {{ vehicle.Verfuegbarkeit ? 'Verfügbar' : 'Nicht verfügbar' }}</div>
        </v-card-text>
      </v-card>
    </div>

    <!-- Filter on the right -->
    <div class="filter-sidebar">
      <VehicleFilter />
    </div>
  </div>
</template>

<script setup>
import { useVehicleStore } from '~/stores/vehicles'
import VehicleFilter from '~/components/VehicleFilter.vue'
import SearchBar from '~/components/SearchBar.vue'

const vehicleStore = useVehicleStore()

onMounted(() => {
  vehicleStore.fetchVehicles()
})
</script>

<style scoped>
.filter-sidebar {
  width: 300px;
  min-width: 300px;
}
</style>
