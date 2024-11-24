<template>
  <div>
    <v-card v-if="currentVehicle">
      <v-card-title>{{ currentVehicle.Fahrzeugname }}</v-card-title>
      <v-card-text>
        <div>Baujahr: {{ currentVehicle.Baujahr }}</div>
        <div>Fahrzeugklasse: {{ currentVehicle.Fahrzeugklasse }}</div>
        <div>Kraftstoffart: {{ currentVehicle.Kraftstoffart }}</div>
        <div>Getriebe: {{ currentVehicle.Getriebe || 'Nicht angegeben' }}</div>
        <div>Sitzplätze: {{ currentVehicle.Sitzplatz || 'Nicht angegeben' }}</div>
        <div>Kofferraum: {{ currentVehicle.Kofferraumvolumen || 'Nicht angegeben' }}</div>
        <div>Preis pro Tag: {{ currentVehicle.Tagesmiete || 'Nicht angegeben' }}€</div>
        <div>Status: {{ currentVehicle.Verfuegbarkeit ? 'Verfügbar' : 'Nicht verfügbar' }}</div>
      </v-card-text>
    </v-card>
    <v-progress-circular v-else indeterminate></v-progress-circular>
  </div>
</template>

<script setup>
const vehicleStore = useVehicleStore()

onMounted(() => {
  vehicleStore.fetchVehicles()
})

const currentVehicle = computed(() => vehicleStore.vehicles[0])
</script>
