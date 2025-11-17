<template>
  <section class="lista">
    <h2>Lista de Proyectos</h2>
    <ul>
      <li v-for="(p, index) in proyectos" :key="index">
        <strong>{{ p.nombre }}</strong> — {{ p.descripcion }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "ListaProyectos",
  props: {
    proyectos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.lista ul {
  list-style: none;
  padding: 0;
}
.lista li {
  margin: 5px 0;
  padding: 5px;
  background: #f5f5f5;
  border-radius: 4px;
}
</style>
