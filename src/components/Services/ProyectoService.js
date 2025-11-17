
import { reactive, watch } from 'vue'

const STORAGE_KEY = 'proyectosApp'

function loadProyectos() {
  const raw = localStorage.getItem(STORAGE_KEY)
  return raw ? JSON.parse(raw) : [
    { id: 1, nombre: 'Proyecto A', descripcion: 'descripcion' }
  ]
}

export const ProyectoService = reactive({
  proyectos: loadProyectos(),
  name: '',
  description: '',

  changeName(value) {
    this.name = value
  },

  changeDescription(value) {
    this.description = value
  },

  addProyecto(newProyecto) {
    this.proyectos.push(newProyecto)
    this.save()
  },

  deleteProyecto(id) {
    this.proyectos = this.proyectos.filter(p => p.id !== id)
    this.save()
  },

  updateProyecto(updated) {
    this.proyectos = this.proyectos.map(p => p.id === updated.id ? updated : p)
    this.save()
  },

  save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.proyectos))
  }
})

watch(
  () => ProyectoService.proyectos,
  (newVal) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newVal))
    } catch (e) {
      console.error('Error guardando proyectos', e)
    }
  },
  { deep: true }
)
