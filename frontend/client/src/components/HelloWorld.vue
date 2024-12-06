<template>
  <div>
    <h1>Ficheros Hello</h1>
    <button @click="fetchFiles">Cargar ficheros</button>
    <ul>
      <li v-for="file in files" :key="file">{{ file }}</li>
    </ul>

    <h2>Crear fichero</h2>
    <input v-model="newFilename" placeholder="Nombre del fichero">
    <textarea v-model="newContent" placeholder="Contenido del fichero"></textarea>
    <button @click="createFile">Crear</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [],
      newFilename: '',
      newContent: ''
    }
  },
  methods: {
    async fetchFiles() {
      const res = await fetch('http://localhost:8000/api/hello');
      const data = await res.json();
      // Ajustar según el formato de respuesta del backend.
      this.files = data.files || data.contenido || [];
    },
    async createFile() {
      const res = await fetch('http://localhost:8000/api/hello', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ filename: this.newFilename, content: this.newContent })
      });
      if (res.ok) {
        alert('Fichero creado');
        this.fetchFiles();
      } else {
        alert('Error al crear el fichero');
      }
    }
  }
}
</script>
