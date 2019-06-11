<template>
  <select @change="updateValue">
    <option
      v-for="(option,index) in options"
      :value="index"
      :key="option"
      :selected="index===value"
    >{{option}}</option>
  </select>
</template>

<script>
let updateValue = function(e) {
  this.$emit("input", e.target.value);
};

export default {
  name: "my-select",
  props: ["value", "options"],
  methods: {
    updateValue
  }
};
</script>

<style lang="scss" scoped>
</style>
