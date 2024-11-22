import { defineStore } from 'pinia'

export const useVehicleStore = defineStore('vehicles', {
  state: () => ({
    vehicles: [
      {
        id: 1,
        brand: 'BMW',
        model: 'X5',
        year: 2023,
        price: 120,
        available: true,
      }
    ]
  }),
  actions: {
    rentVehicle(vehicleId) {
      const vehicle = this.vehicles.find(v => v.id === vehicleId)
      if (vehicle) {
        vehicle.available = false
      }
    },
    returnVehicle(vehicleId) {
      const vehicle = this.vehicles.find(v => v.id === vehicleId)
      if (vehicle) {
        vehicle.available = true
      }
    }
  },
  getters: {
    availableVehicles: (state) => state.vehicles.filter(v => v.available)
  }
})
