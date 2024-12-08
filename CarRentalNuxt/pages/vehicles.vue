<template>
    <div class="d-flex">
        <div
            v-if="vehicleStore.vehicles.length"
            class="d-flex flex-column ma-4 flex-grow-1"
            style="max-width: calc(100% - 300px)">
            <SearchBar class="w-100 mb-4" />

            <div class="d-flex flex-wrap" style="gap: 24px">
                <v-card
                    v-for="vehicle in vehicleStore.filteredVehicles"
                    :key="vehicle.id"
                    style="width: calc(33.33% - 16px); flex-grow: 0"
                    @click="openDialog(vehicle)">
                    <div class="d-flex pa-2 bg-grey-lighten-3">
                        <v-chip class="me-2" size="small">
                            <v-icon start icon="mdi-car-seat" size="small"></v-icon>
                            {{ vehicle.Sitzplatz || '?' }} {{ $t('vehicles.seats') }}
                        </v-chip>
                        <v-chip size="small">
                            <v-icon start icon="mdi-gas-station" size="small"></v-icon>
                            {{ vehicle.Kraftstoffart }}
                        </v-chip>
                    </div>
                    <v-img
                        :src="vehicle.BildURL"
                        height="300"
                        :aspect-ratio="16 / 9"
                        contain
                        class="bg-grey-lighten-2"></v-img>
                    <v-card-title>{{ vehicle.Fahrzeugname }}</v-card-title>
                    <v-card-text>
                        <div class="d-flex justify-space-between align-center">
                            <v-chip :color="vehicle.Verfuegbarkeit ? 'success' : 'error'">
                                {{ vehicle.Verfuegbarkeit ? $t('vehicles.available') : $t('vehicles.notAvailable') }}
                            </v-chip>
                            <span class="text-h6 font-weight-bold"
                                >{{ vehicle.Tagesmiete || '—' }}€/{{ $t('vehicles.perDay') }}</span
                            >
                        </div>
                    </v-card-text>
                </v-card>
            </div>

            <!-- Detail Dialog -->
            <v-dialog v-model="dialog" width="600">
                <v-card v-if="selectedVehicle">
                    <v-img :src="selectedVehicle.BildURL" height="300" cover></v-img>
                    <v-card-title class="text-h5">{{ selectedVehicle.Fahrzeugname }}</v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="6">
                                <div class="text-subtitle-1">
                                    <strong>{{ $t('vehicles.details.year') }}:</strong> {{ selectedVehicle.Baujahr }}
                                </div>
                                <div class="text-subtitle-1">
                                    <strong>{{ $t('vehicles.details.class') }}:</strong>
                                    {{ selectedVehicle.Fahrzeugklasse }}
                                </div>
                                <div class="text-subtitle-1">
                                    <strong>{{ $t('vehicles.details.fuel') }}:</strong>
                                    {{ selectedVehicle.Kraftstoffart }}
                                </div>
                                <div class="text-subtitle-1">
                                    <strong>{{ $t('vehicles.details.transmission') }}:</strong>
                                    {{ selectedVehicle.Getriebe || $t('vehicles.details.notSpecified') }}
                                </div>
                            </v-col>
                            <v-col cols="6">
                                <div class="text-subtitle-1">
                                    <strong>{{ $t('vehicles.details.seats') }}:</strong>
                                    {{ selectedVehicle.Sitzplatz || $t('vehicles.details.notSpecified') }}
                                </div>
                                <div class="text-subtitle-1">
                                    <strong>{{ $t('vehicles.details.trunk') }}:</strong>
                                    {{ selectedVehicle.Kofferraumvolumen || $t('vehicles.details.notSpecified') }}
                                </div>
                                <div class="text-subtitle-1">
                                    <strong>{{ $t('vehicles.details.horsepower') }}:</strong>
                                    {{ selectedVehicle.PS || $t('vehicles.details.notSpecified') }}
                                </div>
                                <div class="text-subtitle-1">
                                    <strong>{{ $t('vehicles.details.mileage') }}:</strong>
                                    {{ selectedVehicle.Kilometerbegrenzung || $t('vehicles.details.notSpecified') }}
                                </div>
                            </v-col>
                        </v-row>
                        <v-divider class="my-4"></v-divider>
                        <div class="d-flex justify-space-between align-center">
                            <v-chip :color="selectedVehicle.Verfuegbarkeit ? 'success' : 'error'" class="text-h6">
                              {{ selectedVehicle.Verfuegbarkeit ? $t('vehicles.available') : $t('vehicles.notAvailable') }}
                            </v-chip>
                            <span class="text-h5 font-weight-bold"
                                >{{ selectedVehicle.Tagesmiete || '—' }}€/{{ $t('vehicles.perDay') }}</span
                            >
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="error" @click="dialog = false">{{ $t('vehicles.close') }}</v-btn>
                        <v-btn color="success" :disabled="!selectedVehicle.Verfuegbarkeit" @click="handleBooking">
                            {{ selectedVehicle.Verfuegbarkeit ? $t('vehicles.book') : $t('vehicles.available') }}
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>

        <div class="filter-sidebar">
            <VehicleFilter />
        </div>
    </div>
</template>

<script setup>
import { useVehicleStore } from '~/stores/vehicles';
import VehicleFilter from '~/components/VehicleFilter.vue';
import SearchBar from '~/components/SearchBar.vue';
import { ref } from 'vue';

const vehicleStore = useVehicleStore();
const dialog = ref(false);
const selectedVehicle = ref(null);

const openDialog = (vehicle) => {
    selectedVehicle.value = vehicle;
    dialog.value = true;
};

const handleBooking = () => {
    console.log('Booking vehicle:', selectedVehicle.value.Fahrzeugname);
};

onMounted(() => {
    vehicleStore.fetchVehicles();
});
</script>

<style scoped>
.filter-sidebar {
    width: 300px;
    min-width: 300px;
}
</style>
