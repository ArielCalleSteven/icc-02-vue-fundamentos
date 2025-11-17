<template>
  <div id="app">
    <NavBar @cambiar="pagina = $event" />
    <component :is="paginaActual" />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HomePage from './components/HomePage.vue'
import PerfilPage from './components/PerfilPage.vue'
import ProyectosPage from './components/ProyectosPage.vue'
import ProyectosDosPage from './components/ProyectosDosPage.vue'

// 🔥 AÑADIDO — tu componente renombrado
import FormulariosPage from './components/Formularios/FormulariosPage.vue'

export default {
  name: 'App',

  components: {
    NavBar,
    HomePage,
    PerfilPage,
    ProyectosPage,
    ProyectosDosPage,
    FormulariosPage, // 🔥
  },

  data() {
    return {
      pagina: 'home'
    }
  },

  computed: {
    paginaActual() {
      if (this.pagina === 'perfil') return 'PerfilPage'
      if (this.pagina === 'proyectos') return 'ProyectosPage'
      if (this.pagina === 'proyectos2') return 'ProyectosDosPage'

      // 🔥 NUEVA RUTA
      if (this.pagina === 'formularios') return 'FormulariosPage'

      return 'HomePage'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
