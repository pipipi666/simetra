<template>
  <div id="mapContainer" class="basemap" />
</template>

<script>
import mapboxgl from "mapbox-gl";
import { mapActions, mapState } from "vuex";

export default {
  name: "HomeView",
  data() {
    return {
      accessToken:
        "pk.eyJ1IjoiYXZrYSIsImEiOiJjbGlmN3A0djIxNnB6M3NxbzBrYm05ZHc5In0.l8h6aESz6I6ThyVQxWkBBw",
    };
  },
  methods: mapActions(["fetchObjects"]),
  computed: {
    ...mapState(["objects"]),
  },
  async mounted() {
    if (!this.objects?.length) {
      await this.fetchObjects();
    }
    mapboxgl.accessToken = this.accessToken;
    const nav = new mapboxgl.NavigationControl();

    const map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v12",
      center: this.objects[0]?.geom?.coordinates || [
        73.4506268764969, 61.2511919853478,
      ],
      zoom: 13,
    });

    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    });

    for (const obj of this.objects) {
      const el = document.createElement("div");
      el.className = "light";
      el.classList.add(
        obj.status === 3 ? "works" : obj.status === 1 ? "broken" : "disconnect"
      );

      new mapboxgl.Marker(el)
        .setLngLat(obj.geom.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 20 }).setHTML(
            `<h3>${obj.name}</h3><p>${obj.integrator}</p>`
          )
        )
        .addTo(map);
    }

    map.addControl(geolocate, "top-right");
    map.addControl(nav, "top-right");
  },
};
</script>

<style lang="scss">
.basemap {
  width: 100%;
  height: calc(100vh - var(--header-h));
}

.mapboxgl-popup {
  width: 200px;
}

.light {
  background-image: url("@/assets/icon.svg");
  background-size: cover;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
}

.works {
  background-color: green;
}

.broken {
  background-color: red;
}

.disconnect {
  background-color: gray;
}
</style>