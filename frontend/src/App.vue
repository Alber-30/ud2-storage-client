<template>
  <div id="app" class="container">
    <!-- Título Principal -->
    <header class="header">
      <h1>PR UD 2</h1>
    </header>

    <!-- Contenido Principal -->
    <main class="main-content">
      <!-- Caja Izquierda -->
      <aside class="menu">
        <h2>Menú</h2>
        <ul>
          <li><button @click="selectClass('storage')">Storage</button></li>
          <li><button @click="selectClass('json')">JSON</button></li>
          <li><button @click="selectClass('csv')">CSV</button></li>
          <li><button @click="selectClass('xml')">XML</button></li>
        </ul>
      </aside>

      <!-- Caja de Botones y Resultados -->
      <section class="action-content">
        <!-- Caja de Botones -->
        <div class="action-buttons">
          <button @click="performAction('get')">Get Files</button>
          <button @click="performAction('store')">Store</button>
          <button @click="performAction('show')">Show</button>
          <button @click="performAction('update')">Update</button>
          <button @click="performAction('delete')">Delete</button>
        </div>

        <!-- Caja de Resultados -->
        <div class="content-box">
          <h2>Resultado</h2>
          <div v-if="result">{{ result }}</div>
          <div v-else>Selecciona una acción para ver el resultado</div>
        </div>
      </section>
    </main>

    <!-- Botón Enviar -->
    <footer class="footer">
      <button class="send-button" @click="sendRequest">Send</button>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentClass: '', // Clase actual seleccionada (Storage, JSON, etc.)
      result: '', // Resultado de la acción
      requestPayload: {
        filename: '',
        content: ''
      } // Datos para enviar con las acciones
    };
  },
  methods: {
    selectClass(selectedClass) {
      this.currentClass = selectedClass;
      this.result = `Seleccionaste: ${selectedClass}`;
    },
    async performAction(action) {
      if (!this.currentClass) {
        alert('Selecciona una clase primero (Storage, JSON, CSV, XML)');
        return;
      }
      const baseUrl = 'http://localhost:8000/api'; // Cambia según el puerto del backend
      let endpoint = `${baseUrl}/${this.currentClass}`;
      try {
        let response;
        switch (action) {
          case 'get':
            response = await fetch(endpoint);
            this.result = await response.json();
            break;

          case 'store':
            response = await fetch(endpoint, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                filename: this.requestPayload.filename || 'test.txt',
                content: this.requestPayload.content || 'Contenido de prueba'
              })
            });
            this.result = await response.json();
            break;

          case 'show':
            endpoint += `/${this.requestPayload.filename || 'test.txt'}`;
            response = await fetch(endpoint);
            this.result = await response.json();
            break;

          case 'update':
            endpoint += `/${this.requestPayload.filename || 'test.txt'}`;
            response = await fetch(endpoint, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                content: this.requestPayload.content || 'Contenido actualizado'
              })
            });
            this.result = await response.json();
            break;

          case 'delete':
            endpoint += `/${this.requestPayload.filename || 'test.txt'}`;
            response = await fetch(endpoint, { method: 'DELETE' });
            this.result = await response.json();
            break;

          default:
            this.result = 'Acción desconocida';
        }
      } catch (error) {
        this.result = `Error: ${error.message}`;
      }
    },
    sendRequest() {
      if (!this.result) {
        alert('Realiza una acción primero');
        return;
      }
      alert('Datos enviados exitosamente.');
    }
  }
};
</script>

<style scoped>
/* Estilos Generales */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Estilo del Header */
.header {
  background-color: #007bff;
  color: white;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
}

/* Contenido Principal */
.main-content {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

/* Caja Izquierda */
.menu {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  flex: 1;
}

.menu h2 {
  margin-bottom: 10px;
}

.menu ul {
  list-style: none;
  padding: 0;
}

.menu button {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.menu button:hover {
  background-color: #0056b3;
}

/* Caja de Botones y Resultados */
.action-content {
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Caja de Botones */
.action-buttons {
  display: flex;
  gap: 15px;
  justify-content: flex-start;
}

.action-buttons button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.action-buttons button:hover {
  background-color: #218838;
}

/* Caja de Resultados */
.content-box {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Botón Enviar */
.footer {
  text-align: right;
}

.send-button {
  padding: 10px 20px;
  background-color: #17a2b8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.send-button:hover {
  background-color: #117a8b;
}
</style>
