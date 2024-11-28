<template>
    <div class="filters pa-4">
        <v-card class="pa-4">
            <div class="d-flex flex-wrap gap-4">
                <div class="filter-container">
                    <v-select
                        v-model="store.filters.Fahrzeugklasse"
                        :items="['SUV', 'Limousine', 'Sportwagen', 'Kombi']"
                        label="Fahrzeugklasse"
                        clearable
                        class="filter-select"></v-select>

                    <v-select
                        v-model="store.filters.Getriebe"
                        :items="['Automatik', 'Schaltgetriebe']"
                        label="Getriebe"
                        clearable
                        class="filter-select"
                        L></v-select>

                    <v-select
                        v-model="store.filters.Sitzplatz"
                        :items="[2, 4, 5]"
                        label="Sitzplätze"
                        clearable
                        class="filter-select"
                        type="number"></v-select>

                    <v-select
                        v-model="store.filters.Kraftstoffart"
                        :items="['Benzin', 'Diesel', 'Elektro', 'Hybrid']"
                        label="Kraftstoffart"
                        clearable
                        class="filter-select"></v-select>

                    <v-select
                        v-model="store.filters.Kofferraumvolumen"
                        :items="['Klein', 'Mittel', 'Groß']"
                        label="Kofferraum"
                        clearable
                        class="filter-select"></v-select>

                    <!-- New filters -->
                    <v-select
                        v-model="store.filters.Farbe"
                        :items="['Schwarz', 'Weiß', 'Silber', 'Bunt']"
                        label="Farbe"
                        clearable
                        class="filter-select"></v-select>

                    <v-select
                        v-model="store.filters.Verfuegbarkeit"
                        :items="[{ title: 'Verfügbar', value: true }]"
                        item-title="title"
                        item-value="value"
                        label="Verfügbarkeit"
                        clearable
                        class="filter-select"></v-select>

                    <v-select
                        v-model="store.filters.Baujahr"
                        :items="generateYearRange(2000, new Date().getFullYear())"
                        label="Baujahr"
                        clearable
                        class="filter-select"></v-select>

                    <v-btn color="primary" @click="store.clearFilters()" class="mt-2"> Filter zurücksetzen </v-btn>
                </div>
            </div>
        </v-card>
    </div>
</template>

<script setup>
import { useVehicleStore } from '~/stores/vehicles';

const store = useVehicleStore();

// Helper function to generate year range
const generateYearRange = (start, end) => {
    const years = [];
    for (let year = end; year >= start; year--) {
        years.push(year.toString());
    }
    return years;
};
</script>

<style scoped>
.filter-select {
    min-width: 200px;
}
</style>
