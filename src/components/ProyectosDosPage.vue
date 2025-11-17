<template>
  <section class="agregar">
    <h2>Agregar Proyecto</h2>
    <input
      v-model="nuevoProyecto"
      placeholder="Nombre del nuevo proyecto"
    />
    <input
      v-model="descripcionProyecto"
      placeholder="Descripción del proyecto"
    />
    <button @click="emitirProyecto">Agregar</button>
  </section>
</template>

<script>
export default {
  name: "AgregarProyecto",
  data() {
    return {
      nuevoProyecto: "",
      descripcionProyecto: "",
    };
  },
  methods: {
    emitirProyecto() {
      if (this.nuevoProyecto.trim() !== "" && this.descripcionProyecto.trim() !== "") {
        // Emitimos un objeto con nombre y descripción
        this.$emit("agregar", {
          nombre: this.nuevoProyecto,
          descripcion: this.descripcionProyecto,
        });
        this.nuevoProyecto = "";
        this.descripcionProyecto = "";
      }
    },
  },
};
</script>

<style scoped>
.agregar {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
