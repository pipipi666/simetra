<template>
  <div>
    <div class="search">
      <SearchInput
        :modelValue="searchText"
        @update:modelValue="(newValue) => (searchText = newValue)"
      />
      <MainButton :handleClick="handleSearchClick">Очистить</MainButton>
      <MainButton :handleClick="handleWorksClick" :is-active="isWorks"
        >Работает</MainButton
      >
    </div>
    <ul class="ul">
      <li class="li" v-for="obj of filtered" :key="obj.id">
        <div class="status__wrapper">
          <div
            class="status"
            :class="{
              active: obj.status === 3,
              disconnect: obj.status === 255,
              red: obj.status === 1,
            }"
          />
          <div class="name">{{ obj.name }}</div>
        </div>
        <div class="integrator">{{ obj.integrator }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import MainButton from "@/components/MainButton.vue";
import { mapActions, mapState } from "vuex";
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
      isWorks: false,
    };
  },
  methods: {
    ...mapActions(["fetchObjects"]),
    handleSearchClick: function () {
      this.searchText = "";
      this.isWorks = false;
    },
    handleWorksClick: function () {
      this.isWorks = !this.isWorks;
    },
    filterByName: function (name) {
      return name
        .toLowerCase()
        .trim()
        .includes(this.searchText.toLowerCase().trim());
    },
  },
  mounted() {
    if (!this.objects?.length) {
      this.fetchObjects();
    }
  },
  computed: {
    ...mapState(["objects"]),
    filtered() {
      return this.isWorks
        ? this.objects.filter(
            (obj) => this.filterByName(obj.name) && obj.status === 3
          )
        : this.objects.filter((obj) => this.filterByName(obj.name));
    },
  },
};
</script>

<style scoped lang="scss">
.search {
  display: flex;
  justify-content: center;
  gap: var(--gap-s);
  flex-wrap: wrap;
}
.ul {
  box-sizing: border-box;
  padding: var(--gap-s);
  width: 1000px;
  max-width: 100%;
  margin: auto;
  .li {
    margin-top: var(--gap-s);
    display: flex;
    align-items: center;
    gap: var(--gap-s);
    list-style-type: none;
    padding: var(--gap-l) var(--gap-s);
    background-color: #dddddd6c;
    border-radius: var(--br);
    @media screen and (max-width: 425px) {
      flex-direction: column;
      align-items: flex-start;
    }

    .status__wrapper {
      display: flex;
      flex: 1;
      align-items: center;
      gap: var(--gap-s);
      .name {
        font-size: 1.25rem;
        text-align: left;
        word-wrap: break-word;
      }

      .status {
        min-width: 15px;
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
    }

    .integrator {
      color: var(--accent-color);
      justify-content: center;
      @media screen and (max-width: 425px) {
        margin-left: 35px;
      }
    }
  }
}
</style>
