<template>
  <div>
    <h1>Home</h1>
    <h2>Fundamentos</h2>
    <p>homePage works!</p>

    <h1>Contador: {{ counter }}</h1>
    <h1>Contador: {{ counterSignal }}</h1>

    <button @click="changeValue(1)">Incrementar</button>
    <button @click="changeValue(-1)">Restar</button>
    <button @click="resetValue(0)">Reset</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 🔹 Variables reactivas (como signals de Angular)
const counter = ref(0)
const counterSignal = ref(0)

// 🔹 Ciclo de vida (equivalente al constructor)
onMounted(() => {
  setInterval(() => {
    console.log('*')
    counterSignal.value += 1
  }, 1000)
})

// 🔹 Métodos
function changeValue(value) {
  counter.value += value
  counterSignal.value += value
}

function resetValue(value) {
  counter.value = value
  counterSignal.value = value
}
</script>

<style scoped>
button {
  margin: 5px;
  padding: 6px 12px;
  cursor: pointer;
}
</style>
