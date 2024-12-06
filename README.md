# ud2-storage-client
# PR2 - Acceso a Datos (Cliente de una API REST)

Este README detalla todos los pasos seguidos para la creación del proyecto, así como las instrucciones para levantar el entorno completo (backend y frontend) a través de Docker Compose.

## Descripción de la Práctica

La práctica consiste en implementar un cliente (frontend) que consuma una API REST (backend) con las rutas `/api/hello`, `/api/json` y `/api/csv`, ofreciendo operaciones CRUD (crear, leer, actualizar, eliminar) sobre ficheros almacenados. El objetivo es aprender cómo consumir una API REST desde un cliente externo, entendiendo CORS, headers y otros requisitos.

### Rutas Requeridas

**Hello (Texto Plano):**
- GET `/api/hello`
- GET `/api/hello/{filename}`
- POST `/api/hello`
- PUT `/api/hello/{filename}`
- DELETE `/api/hello/{filename}`

**JSON:**
- GET `/api/json`
- GET `/api/json/{filename}`
- POST `/api/json`
- PUT `/api/json/{filename}`
- DELETE `/api/json/{filename}`

**CSV:**
- GET `/api/csv`
- GET `/api/csv/{filename}`
- POST `/api/csv`
- PUT `/api/csv/{filename}`
- DELETE `/api/csv/{filename}`

### Pasos seguidos para la creación del proyecto

1. **Generar proyecto Laravel**
2. **Implementar controladores**
3. **Definir las rutas en en routes/api.php**
4. **Configurar CORS en el backend**
5. **Crear un Dockerfile en el backend**
6. **Creamos el frontend con Vue.js**
7. **Generamos el proyecto con el comando npm install -g @vue/cli**
8. **Implementamos el componente para api/hello en la carpeta frontend/src/components/HelloComponent.vue**
9. **Creamos un Dockerfile tambien para la carpeta frontend**
10. **Creamos un docker-compose en la raiz del proyecto**
11. **Ejecutamos el comando en el cmd (por ejemplo): docker compose up -d --build. Que abrira http://localhost:8080 en el navegador.**



