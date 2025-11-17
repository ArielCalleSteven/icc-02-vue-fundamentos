<template>
  <section>
    <h2>Proyectos (desde Servicio)</h2>

    <ListaProyectos
      listName="Listado Proyectos desde Servicio"
      :proyectos="service.proyectos"
      @removeProyecto="onRemoveProyecto"
    />

    <AgregarProyecto
      @newProyecto="onAddProyecto"
      @removeProyecto="onRemoveProyecto"
    />
  </section>
</template>

<script>
import ListaProyectos from "./proyectos/ListaProyectos.vue"
import AgregarProyecto from "./proyectos/AgregarProyecto.vue"
import { ProyectoService as service } from "./Services/ProyectoService.js"

export default {
  name: "ProyectosDosPage",

  components: {
    ListaProyectos,
    AgregarProyecto
  },

  data() {
    return {
      service
    }
  },

  methods: {
    onAddProyecto(newProyecto) {
      if (newProyecto) {
        this.service.addProyecto(newProyecto)
      }
    },

    onRemoveProyecto(id) {
      if (id === null) {
        if (this.service.proyectos.length > 0) {
          const last = this.service.proyectos[this.service.proyectos.length - 1]
          this.service.deleteProyecto(last.id)
        }
      } else {
        this.service.deleteProyecto(id)
      }
    }
  }
}
</script>

<style scoped>
section {
  padding: 12px;
}
</style>
