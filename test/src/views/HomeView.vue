<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
import MainButton from "@/components/MainButton.vue";
import { mapActions } from "vuex";

export default {
  name: "HomeView",
  components: {
    MainButton,
  },
  methods: mapActions(["fetchObjects"]),
  mounted() {
    this.fetchObjects();
  },
};
</script>
