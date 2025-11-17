<template>
  <div class="proyectos-container">
    <h1>Gestión de Proyectos</h1>

    <!-- Escuchamos ambos eventos: agregar (si existe) y newProyecto (si existe) -->
    <AgregarProyecto 
      @agregar="agregarProyecto"
      @newProyecto="agregarProyecto"
    />
    <ListaProyectos :proyectos="proyectos" />
  </div>
</template>

<script>
import AgregarProyecto from "../components/proyectos/AgregarProyecto.vue";
import ListaProyectos from "../components/proyectos/ListaProyectos.vue";

export default {
  name: "ProyectosPage",
  components: {
    AgregarProyecto,
    ListaProyectos,
  },
  data() {
    return {
      proyectos: [],
    };
  },
  methods: {
    agregarProyecto(proyecto) {
      // reasignamos para mantener reactividad
      this.proyectos = [...this.proyectos, proyecto];
    },
  },
};
</script>

<style scoped>
.proyectos-container {
  max-width: 500px;
  margin: auto;
  text-align: center;
}
</style>
