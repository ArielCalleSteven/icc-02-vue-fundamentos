<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="row">
    <div class="col">

      <form @submit.prevent="onSubmit">

        <!-- Campo: Nombre -->
        <div class="mb-3 row">
          <label class="col-sm-3 col-form-label">Nombre</label>
          <div class="col-sm-9">

            <input
              type="text"
              v-model="form.nombre"
              placeholder="Nombre del usuario"
              class="form-control"
              :class="{ 'is-invalid': isValidField('nombre') }"
              @blur="touched.nombre = true"
            />

            <div v-if="isValidField('nombre')" class="text-danger">
              {{ getFieldError('nombre') }}
            </div>

          </div>
        </div>

        <!-- Campo: Edad -->
        <div class="mb-3 row">
          <label class="col-sm-3 col-form-label">Edad</label>
          <div class="col-sm-9">

            <input
              type="number"
              v-model="form.edad"
              placeholder="Edad del usuario"
              class="form-control"
              :class="{ 'is-invalid': isValidField('edad') }"
              @blur="touched.edad = true"
            />

            <div v-if="isValidField('edad')" class="text-danger">
              {{ getFieldError('edad') }}
            </div>

          </div>
        </div>

        <!-- Campo: Correo -->
        <div class="mb-3 row">
          <label class="col-sm-3 col-form-label">Correo</label>
          <div class="col-sm-9">

            <input
              type="email"
              v-model="form.correo"
              placeholder="Correo electrónico"
              class="form-control"
              :class="{ 'is-invalid': isValidField('correo') }"
              @blur="touched.correo = true"
            />

            <div v-if="isValidField('correo')" class="text-danger">
              {{ getFieldError('correo') }}
            </div>

          </div>
        </div>

        <button type="submit" class="btn btn-primary">
          Enviar
        </button>

      </form>

    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

// Datos del formulario
const form = reactive({
  nombre: '',
  edad: '',
  correo: ''
})

// Campos tocados
const touched = reactive({
  nombre: false,
  edad: false,
  correo: false
})

// Validaciones
const validators = {
  nombre(value) {
    if (!value) return 'Este campo es requerido'
    if (value.length < 3) return 'Debe tener mínimo 3 caracteres'
    return null
  },
  edad(value) {
    if (!value) return 'Este campo es requerido'
    if (Number(value) < 18) return 'Valor mínimo de 18'
    return null
  },
  correo(value) {
    if (!value) return 'Este campo es requerido'
    const regex = /\S+@\S+\.\S+/
    if (!regex.test(value)) return 'Valor de correo inválido'
    return null
  }
}

// ¿Campo inválido?
function isValidField(field) {
  return touched[field] && getFieldError(field)
}

// Obtener mensaje de error
function getFieldError(field) {
  return validators[field](form[field])
}

// Enviar formulario
function onSubmit() {
  // Marcar todo como tocado
  Object.keys(touched).forEach(f => touched[f] = true)

  // Revisar errores
  const hasErrors = Object.keys(form).some(f => getFieldError(f))
  if (hasErrors) return

  alert('Formulario enviado con éxito!')
  console.log('Datos del formulario:', { ...form })

  // Resetear
  Object.keys(form).forEach(f => form[f] = '')
  Object.keys(touched).forEach(f => touched[f] = false)
}
</script>

<style scoped>
.is-invalid {
  border: 1px solid red !important;
}
</style>
