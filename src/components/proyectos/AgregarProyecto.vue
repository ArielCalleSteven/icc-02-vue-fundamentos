<template>
  <div class="agregar-proyecto">
    <h3>Agregar proyecto</h3>
    <div>
      <input v-model="nombre" placeholder="Nombre" />
    </div>
    <div>
      <input v-model="descripcion" placeholder="Descripción" />
    </div>

    <div style="margin-top:8px;">
      <button @click="emitAgregar">Agregar</button>
      <button v-if="allowRemove" @click="emitBorrarUltimo">Borrar último</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AgregarProyecto",

  data() {
    return {
      nombre: "",
      descripcion: "",
      allowRemove: true
    }
  },

  methods: {
    emitAgregar() {
      if (!this.nombre.trim()) {
        alert("Ingrese nombre")
        return
      }

      this.$emit("newProyecto", {
        id: Date.now(),
        nombre: this.nombre,
        descripcion: this.descripcion
      })

      this.nombre = ""
      this.descripcion = ""
    },

    emitBorrarUltimo() {
      this.$emit("removeProyecto", null)
    }
  }
}
</script>

<style scoped>
.agregar-proyecto input {
  padding: 6px;
  margin-bottom: 6px;
  width: 100%;
}
button {
  margin-right: 6px;
}
</style>
