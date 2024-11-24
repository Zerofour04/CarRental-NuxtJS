import { defineStore } from 'pinia'

export const useVehicleStore = defineStore('vehicles', {
  state: () => ({
    vehicles: [],
    loading: false,
    error: null
  }),
  
  actions: {
    async fetchVehicles() {
      this.loading = true
      try {
        const response = await fetch('http://localhost:1337/api/cars')
        const result = await response.json()
        this.vehicles = result.data
        console.log('Loaded vehicles:', this.vehicles)
      } catch (err) {
        console.error('Error loading vehicles:', err)
      } finally {
        this.loading = false
      }
    }
  }
})
