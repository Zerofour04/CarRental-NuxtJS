<template>
    <v-card>
      <v-card-title>{{ vehicle.brand }} {{ vehicle.model }}</v-card-title>
      <v-card-text>
        <div>Baujahr: {{ vehicle.year }}</div>
        <div>Preis pro Tag: {{ vehicle.price }}€</div>
        <div>Status: {{ vehicle.available ? 'Verfügbar' : 'Vermietet' }}</div>
      </v-card-text>
      <v-card-actions>
        <v-btn 
          :color="vehicle.available ? 'primary' : 'error'"
          @click="handleRent"
        >
          {{ vehicle.available ? 'Jetzt mieten' : 'Vermietet' }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script setup>
  const vehicleStore = useVehicleStore()
  const vehicle = vehicleStore.vehicles[0]
  
  const handleRent = () => {
    vehicleStore.rentVehicle(vehicle.id)
  }
  </script>
  