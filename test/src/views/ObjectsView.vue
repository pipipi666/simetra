<template>
  <div>
    <div class="search">
      <SearchInput
        :modelValue="searchText"
        @update:modelValue="(newValue) => (searchText = newValue)"
      />
      <MainButton :handleClick="handleSearchClick">Очистить</MainButton>
    </div>
    <ul class="ul">
      <li class="li" v-for="obj of filtered" :key="obj.id">
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
import { mapActions, mapGetters, mapState } from "vuex";
import SearchInput from "@/components/SearchInput.vue";

export default {
  name: "ObjectsView",
  components: {
    MainButton,
    SearchInput,
  },
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    ...mapActions(["fetchObjects"]),
    handleSearchClick: function () {
      this.searchText = "";
    },
  },
  mounted() {
    this.fetchObjects();
  },
  computed: {
    ...mapState(["objects"]),
    filtered() {
      return (this.filteredObjects = this.objects.filter((obj) =>
        obj.name
          .toLowerCase()
          .trim()
          .includes(this.searchText.toLowerCase().trim())
      ));
    },
  },
};
</script>

<style scoped lang="scss">
.search {
  display: flex;
  justify-content: center;
  gap: var(--gap-s);
}
.ul {
  padding: 0;
  .li {
    margin-top: var(--gap-s);
    display: flex;
    align-items: center;
    gap: var(--gap-s);
    list-style-type: none;
    padding: var(--gap-l) var(--gap-s);
    background-color: #dddddd6c;
    border-radius: var(--br);

    .name {
      font-size: 1.25rem;
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
      color: var(--accent-color);
    }
  }
}
</style>
