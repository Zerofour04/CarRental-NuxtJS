<template>
  <div>
    <header>

      <nav>
        <h1>{{ $t('welcome') }}</h1>
        <ul>
          <li><NuxtLink :to="localePath('/')">{{ $t('home.title') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/about')">{{ $t('about.title') }}</NuxtLink></li>
        </ul>
        <!-- Language Switch Button -->
        <button @click="switchLanguage" class="lang-button">
          {{ $i18n.locale === 'de' ? 'EN' : 'DE' }}
        </button>
      </nav>
    </header>

    <h2>Test</h2>
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

    <main>
      <NuxtPage />
    </main>

    <footer>
      <p>{{ $t('footer.copyright') }} 2024</p>
    </footer>
  </div>
</template>
  
  <script setup>
const localePath = useLocalePath()
const { locale } = useI18n()

const switchLanguage = () => {
  locale.value = locale.value === 'de' ? 'en' : 'de'
}

const vehicleStore = useVehicleStore()
const vehicle = vehicleStore.vehicles[0]
const handleRent = () => {
  vehicleStore.rentVehicle(vehicle.id)
}

  </script>
  
  <style scoped>
  header {
    background-color: #547a9e;
    color: white;
    padding: 20px;
  }
  
  nav ul {
    list-style-type: none;
    padding: 0;
  }
  
  nav ul li {
    display: inline;
    margin-right: 15px;
  }
  
  main {
    padding: 20px;
  }
  
  footer {
    text-align: center;
    padding: 10px;
    background-color: #f1f1f1;
  }
  </style>
  