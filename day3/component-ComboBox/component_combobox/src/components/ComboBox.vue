<template>
<div>
    <!-- <select>
      <option v-for="(item,index) in item-source" 
              :key="item" 
              :value="index" 
              :selected="index==value">
              <span>{{item}}</span>
      </option>
    </select> -->
  <span>Hello world</span>
</div>
</template>


<script>

export default {
  name: "ComboBox",
  props : ["item-source"],
  methods : {

  }
}

</script>

<style scoped>

</style>

