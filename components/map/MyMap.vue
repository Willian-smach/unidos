<script setup>
  import { ref } from 'vue'
  const center = ref([-51.9253, -14.2350])
  const projection = ref('EPSG:4326')
  const zoom = ref(4)
  const rotation = ref(0)


  const locations = [
  { id: 1, name: 'Local A', city: 'São Paulo', coords: [-46.6333, -23.5505] },
  { id: 2, name: 'Local B', city: 'São Paulo', coords: [-46.6340, -23.5510] },
  { id: 3, name: 'Local C', city: 'Rio de Janeiro', coords: [-43.2096, -22.9035] },
  { id: 4, name: 'Local D', city: 'Rio de Janeiro', coords: [-43.2110, -22.9040] },
    // Adicione mais locais conforme necessário
  ];

  function groupByCity(locations) {
    return locations.reduce((acc, location) => {
      const { city } = location;
      if (!acc[city]) {
        acc[city] = [];
      }
      acc[city].push(location);
      return acc;
    }, {});
  }

  function getCityCenter(group) {
    const latSum = group.reduce((sum, loc) => sum + loc.coords[1], 0);
    const lonSum = group.reduce((sum, loc) => sum + loc.coords[0], 0);
    return [lonSum / group.length, latSum / group.length]; // Retorna o centro do grupo
  }

  function getCityStyle(center) {
    const [lon, lat] = center;
    const scale = 100000; // Ajuste conforme necessário para a escala do mapa
    return {
      transform: 'translate(-50%, -100%)', // Centraliza o marcador
      background: 'red',
      padding: '5px',
      borderRadius: '5px',
      border: '1px solid #007BFF',
      textAlign: 'center'
    };
  }

  const groupedLocations = groupByCity(locations);
</script>

<template>
  <ol-map 
    :loadTilesWhileAnimating="true" 
    :loadTilesWhileInteracting="true" 
    class="custom-map"
  >
    <ol-view 
    :center="center" 
    :rotation="rotation" 
    :zoom="zoom"
    :projection="projection" 
    />
    <ol-tile-layer>
        <ol-source-osm />
    </ol-tile-layer>
  </ol-map>
</template>

<style scoped>
@import 'vue3-openlayers/dist/vue3-openlayers.css';

.custom-map {
  width: 100%;
  min-height: 400px;
  z-index: 1;
  border-radius: 10px;
}

.city-marker {
  position: relative; /* Necessário para posicionamento */
}
</style>