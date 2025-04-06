# 🚗 RentMyCar - Modern Car Rental Platform - V0.5

A sleek and modern car rental platform built with Nuxt 3, Vue 3, and Vuetify, offering an intuitive interface for browsing and filtering vehicles.

## 🌟 Features

### Vehicle Management
- Dynamic vehicle catalog with detailed information
- Real-time availability status
- Advanced filtering system
- Persistent filter settings
- Responsive grid layout

### Filtering System
- Multiple filter categories
- Search functionality
- Sort options
- Filter combinations
- Filter memory between sessions

### User Interface
- Modern card-based design
- Detailed vehicle modal
- Status indicators
- Quick view chips for key information
- Responsive sidebar filters

### Internationalization
- Multi-language support (DE/EN)
- Complete translation coverage
- Easy language switching

## 🛠 Tech Stack
- Nuxt 3
- Vue 3
- Vuetify 3
- Pinia
- i18n

## 📦 Installation
### Frontend
```bash
# Go to the project directory
cd CarRentalNuxt

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
````

### Backend - STRAPI
```bash
# Go to the project directory
cd CarRentalBackend

# Install dependencies
npm install

# Start development server
npm run develop
```

## Content Types
### CarCollecktionTypes:
````
{
  Fahrzeugname: String,
  Fahrzeugklasse: Enumeration ['SUV', 'Limousine', 'Sportwagen', 'Kombi'],
  Baujahr: String,
  Kraftstoffart: Enumeration ['Benzin', 'Diesel', 'Elektro'],
  Getriebe: Enumeration ['Automatik', 'Manuell'],
  Sitzplatz: Integer,
  Kofferraumvolumen: Enumeration ['Klein', 'Mittel', 'Groß'],
  Tagesmiete: Decimal,
  Verfuegbarkeit: Boolean,
  BildURL: Media,
  Farbe: String,
  Kilometerbegrenzung: String,
  PS: Integer
}
````

### API Endpints:
````
GET /api/cars          - Retrieve all cars
GET /api/cars/:id      - Retrieve a specific car
POST /api/cars         - Add a new car
PUT /api/cars/:id      - Update car details
DELETE /api/cars/:id   - Delete a car
`````
