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
      if (this.nuevoProyecto.trim() !== "") {
        // emitimos un objeto con nombre y descripción
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
}
input {
  margin: 5px;
  padding: 6px;
}
button {
  padding: 6px 12px;
  cursor: pointer;
}
</style>
