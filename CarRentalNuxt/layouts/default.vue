<template>
  <div>
    <v-app-bar color="primary">
      <v-img
        src="http://localhost:1337/uploads/logo_search_grid_2x_ca831ce5c3.png"

        contain
      ></v-img>
      <v-app-bar-title>{{ $t('welcome') }}</v-app-bar-title>

      <v-container class="d-flex align-center">
        <nav class="me-4">
          <NuxtLink :to="localePath('/')" class="text-white me-4 text-decoration-none">{{ $t('home.title') }}</NuxtLink>
          <NuxtLink :to="localePath('/vehicles')" class="text-white me-4 text-decoration-none">Fahrzeuge</NuxtLink>

          <NuxtLink :to="localePath('/about')" class="text-white text-decoration-none">{{ $t('about.title') }}</NuxtLink>
        </nav>

        <v-spacer></v-spacer>

        <v-btn 
          @click="switchLanguage" 
          color="white" 
          variant="outlined" 
          class="me-4"
        >
          {{ $i18n.locale === 'de' ? 'EN' : 'DE' }}
        </v-btn>
        <v-btn color="info">
          Anmelden
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <NuxtPage />
      </v-container>
    </v-main>

    <v-footer
  class="bg-primary text-center d-flex flex-column"
>
  <div class="pt-4 pb-4">
    <v-btn
      v-for="icon in ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']"
      :key="icon"
      class="mx-4"
      icon
      variant="text"
      color="white"
    >
      <v-icon size="24px">{{ icon }}</v-icon>
    </v-btn>
  </div>

  <v-divider></v-divider>

  <div class="px-4 py-2 text-white">
    {{ $t('footer.copyright') }} {{ new Date().getFullYear() }} — <strong>CarRent24</strong>
  </div>
</v-footer>
  </div>
</template>

<script setup>
const localePath = useLocalePath()
const { locale } = useI18n()
const router = useRouter()

const vehicleStore = useVehicleStore()
const vehicle = vehicleStore.vehicles[0]

const switchLanguage = () => {
  const newLocale = locale.value === 'de' ? 'en' : 'de'
  const currentRoute = router.currentRoute.value
  locale.value = newLocale
  router.push({
    path: `/${newLocale}${currentRoute.path.substring(3)}`
  })
}

const handleRent = () => {
  vehicleStore.rentVehicle(vehicle.id)
}
</script>
