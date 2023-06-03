<template>
  <input
    class="input"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue"],
};
</script>

<style scoped lang="scss">
.input {
  height: 40px;
  padding: 0 var(--gap-s);
  border: 0;
  background-color: #ffdaea;
  border-radius: var(--br);
  font-size: inherit;

  &:focus {
    outline: none;
    border: 1px solid var(--accent-color);
  }
}
</style>
