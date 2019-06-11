<template>
  <div id="app">
    <h2>郵遞區號</h2>
    <my-select v-model="cityIndex" :options="getCities"></my-select>
    <my-select v-model="areaIndex" :options="getAreas"></my-select>
    <span>{{getZip}}</span>
  </div>
</template>

<script>
import mySelect from "./components/my-select";

let cities = [
  {
    name: "基隆市",
    areas: [
      { name: "仁愛區", zip: "200" },
      { name: "信義區", zip: "201" },
      { name: "中正區", zip: "202" },
      { name: "中山區", zip: "203" },
      { name: "安樂區", zip: "204" },
      { name: "暖暖區", zip: "205" },
      { name: "七堵區", zip: "206" }
    ]
  },
  {
    name: "台北市",
    areas: [
      { name: "中正區", zip: "300" },
      { name: "大同區", zip: "301" },
      { name: "中山區", zip: "302" },
      { name: "松山區", zip: "303" },
      { name: "大安區", zip: "304" },
      { name: "萬華區", zip: "305" },
      { name: "信義區", zip: "306" },
      { name: "士林區", zip: "307" },
      { name: "北投區", zip: "308" },
      { name: "內湖區", zip: "309" },
      { name: "南港區", zip: "310" },
      { name: "文山區", zip: "311" }
    ]
  },
  {
    name: "新竹市",
    areas: [{ name: "新竹市", zip: "400" }]
  }
];

let getCities = function() {
  return this.cities.map(city => city.name);
};
let getAreas = function() {
  let city = this.cities[this.cityIndex];

  if (!city) return [];

  return city.areas.map(area => area.name);
};
let getZip = function() {
  let city = this.cities[this.cityIndex];

  if (!city) return "";

  let area = city.areas[this.areaIndex];

  if (!area) return city.areas[0].zip;

  return area.zip;
};

export default {
  name: "app",
  components: {
    mySelect
  },
  data: () => {
    return {
      cities,
      cityIndex: 1,
      areaIndex: 0
    };
  },
  computed: {
    getCities,
    getAreas,
    getZip
  }
};
</script>

<style lang="scss">
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
