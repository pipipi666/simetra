<template>
  <div>
    <ul class="ul">
      <li class="li" v-for="obj of objects" :key="obj.id">
        <div
          class="status"
          :class="{
            active: obj.status === 3,
            disconnect: obj.status === 255,
            red: obj.status === 1,
          }"
        />
        <div class="name">{{ obj.name }}</div>
        <div class="integrator">{{ obj.integrator }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import MainButton from "@/components/MainButton.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "ObjectsView",
  components: {
    MainButton,
  },
  methods: {
    ...mapActions(["fetchObjects"]),
  },
  mounted() {
    this.fetchObjects();
  },
  computed: {
    ...mapState(["objects"]),
  },
};
</script>

<style scoped lang="scss">
.ul {
  padding: 0;
  .li {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    list-style-type: none;
    padding: 40px 20px;
    background-color: #dddddd6c;
    border-radius: 10px;

    .name {
      font-size: 1.5rem;
    }

    .status {
      width: 15px;
      height: 15px;
      border-radius: 50%;
    }

    .active {
      background-color: #4cc452;
    }
    .disconnect {
      background-color: #686566;
    }
    .red {
      background-color: #c44c5c;
    }

    .integrator {
      color: #d15f8f;
    }
  }
}
</style>
