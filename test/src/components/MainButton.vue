<template>
  <button class="btn" :class="{ active: isActive }" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MainButton",
  props: {
    handleClick: Function,
    isActive: Boolean,
  },
};
</script>

<style scoped lang="scss">
.btn {
  height: 40px;
  padding: 0 var(--gap-s);
  border: 0;
  background-color: var(--accent-color);
  color: #ffffff;
  border-radius: var(--br);
  font-size: inherit;
  cursor: pointer;

  &:hover {
    background-color: #8b5087;
  }
}

.active {
  background-color: #6b3e68;
}
</style>
