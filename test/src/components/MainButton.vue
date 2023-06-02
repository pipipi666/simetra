<template>
  <button class="btn">{{ text }}</button>
</template>

<script>
export default {
  name: "MainButton",
  props: {
    text: String,
  },
};
</script>

<style scoped lang="scss">
.btn {
  height: 40px;
  padding: 0 20px;
  border: 0;
  background-color: #887697;
  color: #ffffff;
  border-radius: 10px;
  font-size: inherit;
  cursor: pointer;
}
</style>
