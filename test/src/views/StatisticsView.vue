<template>
  <div class="chart">
    <div class="pie">
      <Pie :options="pieOptions" :data="chartDataStatus" />
    </div>
    <div class="bar">
      <Bar :options="barOptions" :data="chartDataIntegrator" />
    </div>
  </div>
</template>

<script>
import MainButton from "@/components/MainButton.vue";
import { mapActions, mapState } from "vuex";
import { Bar, Pie } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement
);

export default {
  name: "StatisticsView",
  components: {
    MainButton,
    Bar,
    Pie,
  },
  data() {
    return {
      barOptions: {
        responsive: true,
      },
      pieOptions: {
        responsive: true,
      },
    };
  },
  methods: {
    ...mapActions(["fetchObjects"]),
  },
  mounted() {
    this.fetchObjects();
  },
  computed: {
    ...mapState(["objects"]),
    chartDataStatus() {
      const statusCodes = Array.from(
        new Set(this.objects.map((x) => x.status))
      );
      const statusNames = statusCodes.map((code) => {
        return code === 3
          ? "Работает"
          : code === 1
          ? "Кругом красное"
          : code === 255
          ? "Потеря связи"
          : "Другое";
      });
      let data = [];
      statusCodes.forEach((status) => {
        data.push(this.objects.filter((obj) => obj.status === status)?.length);
      });
      return {
        labels: statusNames,
        datasets: [
          {
            label: "Статус",
            backgroundColor: ["#9eaef5", "#cf98b8"],
            data: data,
            width: "100",
            type: "pie",
          },
        ],
      };
    },
    chartDataIntegrator() {
      const integrators = Array.from(
        new Set(this.objects.map((x) => x.integrator))
      );
      let data = [];
      integrators.forEach((integrator) => {
        data.push(
          this.objects.filter((obj) => obj.integrator === integrator).length
        );
      });
      return {
        labels: integrators,
        datasets: [
          {
            label: "Интегратор",
            backgroundColor: ["#cf98b8", "#9eaef5"],
            data: data,
          },
        ],
      };
    },
  },
};
</script>

<style scoped lang="scss">
.chart {
  .pie {
    width: 400px;
    margin: var(--gap-l) auto;
  }
  .bar {
    width: 800px;
    margin: var(--gap-l) auto;
  }
}
</style>
