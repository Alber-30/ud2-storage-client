# ud2-storage-client
Práctica 2: Cliente de API Rest para UD2
# Proyecto Cliente API REST

## Descripción
Este proyecto consiste en implementar un cliente que consume una API REST para manejar archivos en formatos JSON, CSV y texto. El backend está implementado con Laravel y el frontend con Vue.js. La aplicación se ejecuta utilizando Docker para facilitar su despliegue.

## Requisitos

Antes de empezar, hay que asegurarse de tener lo siguiente instalado en tu máquina:

- Docker: Para ejecutar contenedores con el backend y la base de datos.
- Git: Para clonar el repositorio.
- Node.js y npm: Para ejecutar el frontend con Vue.js.
- Composer: Para gestionar las dependencias del backend con Laravel.

## Estructura del Proyecto

La estructura de directorios es la siguiente:

/ud2-storage-client
|-- /frontend
|   |-- (Código del cliente Vue.js)
|
|-- /backend
|   |-- (Código de la API REST en Laravel)
|
|-- README.md
|-- docker-compose.yml

### Pasos para configurar el proyecto

### 1. Clonar el repositorio

Primero, debes clonar el repositorio desde GitHub. Abre tu terminal (CMD o bash) y ejecuta el siguiente comando:

bash
git clone <url-del-repositorio>
Esto descargará el código fuente del repositorio a tu máquina local. Luego, navega dentro del directorio del proyecto:

bash
cd ud2-storage-client

Dentro del proyecto, necesitas crear dos carpetas: una para el backend y otra para el frontend. Ejecuta estos comandos en tu terminal:
bash
mkdir frontend
mkdir backend

3. Configuración del Backend con Laravel
   
a. Crear un proyecto de Laravel
Accede a la carpeta backend y crea un proyecto de Laravel utilizando el siguiente comando:
bash
cd backend
composer create-project --prefer-dist laravel/laravel .
Este comando descargará e instalará Laravel en la carpeta backend.

b. Crear las rutas de la API
Abre el archivo routes/api.php y define las rutas que necesitas para la API.

c. Configuración de CORS
Si tu frontend está ejecutándose en un puerto diferente al del backend (por ejemplo, localhost:8080 para Vue.js y localhost:8000 para Laravel), 
debes configurar CORS para permitir que las peticiones entre ambos puertos se comuniquen sin problemas.

d. Configuración de Docker para Laravel
Crea un archivo Dockerfile dentro de la carpeta backend con el siguiente contenido para configurar el contenedor del backend

e. Crear un archivo docker-compose.yml
Crea el archivo docker-compose.yml en la raíz del proyecto (donde están las carpetas frontend y backend). Este archivo se utiliza para definir y correr tanto el backend como la base de datos MySQL.

f. Levantar los contenedores
Levanta los servicios utilizando Docker Compose. Asegúrate de estar en la raíz del proyecto y ejecuta el siguiente comando:
bash
docker-compose up -d

4. Configuración del Frontend con Vue.js
a. Crear un proyecto Vue.js
Accede a la carpeta frontend y crea un nuevo proyecto Vue.js con Vue CLI:
bash
cd frontend
vue create client

b. Instalar Axios
Para realizar solicitudes HTTP desde Vue.js al backend, instala Axios:
bash
cd client
npm install axios

Crear el cliente Vue.js
Abre el archivo src/App.vue y configura una solicitud GET para consumir los datos de la API de Laravel.

d. Levantar el frontend
Ejecuta el servidor de desarrollo para Vue.js:
bash
npm run serve

Esto iniciará el frontend de Vue.js en el puerto 8080. Ahora puedes abrir tu navegador y acceder a:
http://localhost:8080

5. Verificar el funcionamiento
Asegúrate de que los contenedores de Docker están corriendo. Puedes verificarlo con el siguiente comando:
bash
docker ps

Realiza pruebas de las rutas de la API (GET, POST, PUT, DELETE) desde el cliente Vue.js. Debes poder interactuar con los datos del backend.

Con todo esto deberia de funcionar sin problemas.
