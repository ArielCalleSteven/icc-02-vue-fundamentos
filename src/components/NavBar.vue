<template>
  <nav class="navbar">
    <button @click="$emit('cambiar', 'home')">🏠 Home</button>
    <button @click="$emit('cambiar', 'perfil')">👤 Perfil</button>
    <button @click="$emit('cambiar', 'proyectos')">📁 Proyectos</button>
    <button @click="$emit('cambiar', 'proyectos2')">📂 Proyectos 2</button>
    <button @click="$emit('cambiar', 'formularios')">📂Formularios</button>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  background-color: #159;
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

button {
  color: white;
  background: transparent;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  text-decoration: underline;
}
</style>
