<template>
  <div class="lista-proyectos">
    <h3>{{ listName || 'Proyectos' }}</h3>

    <ul>
      <li v-for="p in proyectos" :key="p.id" class="item">
        <strong>{{ p.nombre }}</strong> — {{ p.descripcion }}
        <button @click="$emit('removeProyecto', p.id)">Eliminar</button>
      </li>
    </ul>

    <div v-if="!proyectos || proyectos.length === 0">
      No hay proyectos.
    </div>
  </div>
</template>

<script>
export default {
  name: "ListaProyectos",

  props: {
    proyectos: {
      type: Array,
      default: () => []
    },
    listName: {
      type: String,
      default: ""
    }
  }
}
</script>

<style scoped>
.item {
  margin-bottom: 8px;
}
.item button {
  margin-left: 8px;
}
ul {
  padding-left: 20px;
  list-style: disc;
}
</style>
