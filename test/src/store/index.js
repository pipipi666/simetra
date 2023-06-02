import Vue from "vue";
import Vuex from "vuex";
import { objects } from "@/utils/apiConsts";
import { axiosInstance } from "@/utils/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    objects: [],
  },
  getters: {},
  mutations: {
    SET_OBJECTS(state, objects) {
      state.objects = objects;
    },
  },
  actions: {
    async fetchObjects({ commit }) {
      try {
        const data = await axiosInstance.get(objects);
        commit("SET_OBJECTS", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  modules: {},
});

