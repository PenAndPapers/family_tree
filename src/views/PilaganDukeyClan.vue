<script setup lang="ts">
import { onMounted } from 'vue'
import { useInitChart } from '../composable/useChartOption'
import data from '../data/PilaganDukeyClan.json'

const imgUrl = new URL('../assets/images/Pilagan-Dukey_Genealogy.png', import.meta.url).href

const { initChart } = useInitChart(data, 'Pilagan-Dukey_Genealogy')

onMounted(() => {
  initChart()
})
</script>

<template>
  <main>
    <a :href="imgUrl" target="_blank" class="link">View as image</a>
    <div id="main" style="width: 800rem; height: 500rem; background: #ffffff"></div>
  </main>
</template>

<style scoped>
.link {
  position: fixed;
  left: 1rem;
  top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  z-index: 999;
  font-size: 1.5rem;
  font-weight: 600;
  background-color: #7eec8f;
  color: #000;
}
</style>
