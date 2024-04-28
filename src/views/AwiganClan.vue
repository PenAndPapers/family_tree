<script setup lang="ts">
import { onMounted } from 'vue'
import { useInitChart } from '../composable/useChartOption'
import data from '../data/AwiganClan.json'

const imgUrl = new URL('../assets/images/Awigan_Genealogy.png', import.meta.url).href

const { initChart } = useInitChart(data, 'Awigan_Genealogy')

onMounted(() => {
  initChart()
})
</script>

<template>
  <main>
    <a :href="imgUrl" target="_blank" class="link">View as image</a>
    <div id="main" style="width: 400rem; height: 300rem; background: #ffffff"></div>
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
