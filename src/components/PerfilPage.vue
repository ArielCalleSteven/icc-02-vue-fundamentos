<template>
  <div>
    <h1>{{ name }}</h1>

    <dl>
      <td>Nombre:</td>
      <dd>{{ name }}</dd>

      <td>Apellido:</td>
      <dd>{{ lastname }}</dd>

      <td>Edad:</td>
      <dd>{{ age }}</dd>

      <td>Nombre Completo:</td>
      <dd>{{ fullName }}</dd>

      <td>Nombre y Apellido (Mayúsculas):</td>
      <dd>{{ (name + ' ' + lastname).toUpperCase() }}</dd>
    </dl>

    <button @click="changeData">Cambiar datos</button>
    <button @click="changeAge">Cambiar edad</button>
    <button @click="resetData">Reset</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 🔹 Variables reactivas (equivalente a signals en Angular)
const name = ref('Juan')
const lastname = ref('Perez')
const age = ref(30)

// 🔹 Propiedad computada (equivalente al getter getFullName)
const fullName = computed(() => `${name.value} ${lastname.value} con edad ${age.value} años`)

// 🔹 Métodos (como en la clase de Angular)
function changeData() {
  name.value = 'Ana'
  lastname.value = 'Gonzales'
  age.value = 25
}

function resetData() {
  name.value = 'Juan'
  lastname.value = 'Pérez'
  age.value = 30
}

function changeAge() {
  age.value = 18
}
</script>

<style scoped>
button {
  margin: 5px;
  padding: 6px 12px;
  cursor: pointer;
}
</style>
