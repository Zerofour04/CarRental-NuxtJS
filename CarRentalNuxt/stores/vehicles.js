import { defineStore } from 'pinia';

export const useVehicleStore = defineStore('vehicles', {
    state: () => ({
        vehicles: [],
        loading: false,
        error: null,
        searchQuery: '',
        filters: {
            Fahrzeugklasse: '',
            Getriebe: '',
            Sitzplatz: '',
            Kraftstoffart: '',
            Kofferraumvolumen: '',
            Farbe: '',
            Verfuegbarkeit: '',
            Baujahr: ''
        },
        sortBy: 'name'
    }),

    getters: {
        filteredVehicles: (state) => {
            let filtered = state.vehicles.filter((vehicle) => {
                if (state.searchQuery) {
                    const query = state.searchQuery.toLowerCase();
                    if (!vehicle.Fahrzeugname.toLowerCase().includes(query)) return false;
                }

                if (state.filters.Fahrzeugklasse && vehicle.Fahrzeugklasse !== state.filters.Fahrzeugklasse)
                    return false;
                if (state.filters.Getriebe && vehicle.Getriebe !== state.filters.Getriebe) return false;
                if (state.filters.Sitzplatz && vehicle.Sitzplatz !== state.filters.Sitzplatz) return false;

                if (state.filters.Kraftstoffart && vehicle.Kraftstoffart !== state.filters.Kraftstoffart) return false;
                if (state.filters.Kofferraumvolumen && vehicle.Kofferraumvolumen !== state.filters.Kofferraumvolumen)
                    return false;
                if (state.filters.Farbe && vehicle.Farbe !== state.filters.Farbe) return false;
                if (state.filters.Verfuegbarkeit && vehicle.Verfuegbarkeit !== state.filters.Verfuegbarkeit)
                    return false;

                if (state.filters.Baujahr && vehicle.Baujahr !== state.filters.Baujahr) return false;
                if (state.filters.PS && vehicle.PS !== state.filters.PS) return false;
                if (
                    state.filters.Kilometerbegrenzung &&
                    vehicle.Kilometerbegrenzung !== state.filters.Kilometerbegrenzung
                )
                    return false;
                return true;
            });

            switch (state.sortBy) {
                case 'name':
                    return filtered.sort((a, b) => a.Fahrzeugname.localeCompare(b.Fahrzeugname));
                case 'priceAsc':
                    return filtered.sort((a, b) => (a.Tagesmiete || 0) - (b.Tagesmiete || 0));
                case 'priceDesc':
                    return filtered.sort((a, b) => (b.Tagesmiete || 0) - (a.Tagesmiete || 0));
                case 'yearNew':
                    return filtered.sort((a, b) => b.Baujahr - a.Baujahr);
                case 'yearOld':
                    return filtered.sort((a, b) => a.Baujahr - b.Baujahr);
                default:
                    return filtered;
            }
        }
    },

    actions: {
        async fetchVehicles() {
            this.loading = true;
            try {
                const response = await fetch('http://localhost:1337/api/cars');
                const result = await response.json();
                this.vehicles = result.data;
            } catch (err) {
                console.error('Error loading vehicles:', err);
            } finally {
                this.loading = false;
            }
        },

        setFilter(filterName, value) {
            this.filters[filterName] = value;
        },

        clearFilters() {
            Object.keys(this.filters).forEach((key) => {
                this.filters[key] = '';
            });
        },

        setSorting(value) {
            this.sortBy = value;
        },

        setSearchQuery(query) {
            this.searchQuery = query;
        }
    }
});
