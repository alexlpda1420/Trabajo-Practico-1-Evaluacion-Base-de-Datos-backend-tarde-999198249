# 📖 Trabajo-Practico-1-Evaluacion-Base-de-Datos-backend-tarde-999198249

## CRUD en MongoDB con Typescript 

### 📌 Objetivo 


Implementar un CRUD (Create, Read, Update, Delete) en MongoDB utilizando Typescript y Mongoose, sin necesidad de crear una API.

### 📌 Consigna

Cada estudiante deberá:

1. Seleccionar una entidad a trabajar (por ejemplo, usuarios, productos, pedidos, libros, etc.).
2. Definir un esquema en Mongoose para la entidad elegida, incluyendo los campos y tipos de datos que considere necesarios.
3. Implementar las funciones CRUD, que deberán permitir:
   * Crear un nuevo documento en la base de datos.
   * Obtener todos los documentos de la colección.
   * Obtener un documento por su ID.
   * Actualizar un documento existente.
   * Eliminar un documento por su ID.
4. Probar las funciones CRUD con datos de ejemplo.

### 📌 Criterios de Evaluación
- Correcta definición del esquema en Mongoose.
- Implementación funcional de cada operación CRUD.
- Uso adecuado de promesas o `async/await`.
- Organización y claridad del código.

### 📌 Entrega

- El trabajo deberá subirse a un repositorio en GitHub.
- Se deberá incluir un README.md con una breve descripción del proyecto y las instrucciones para ejecutarlo.
- El repositorio debe contener un mínimo de 5 commits, reflejando el avance del desarrollo.
- La entrega se realizará compartiendo el enlace del repositorio.

## 📋 Descripción del Proyecto

Este proyecto implementa un **CRUD (Create, Read, Update, Delete)** para gestionar equipos de fútbol argentino, desarrollado en **TypeScript** utilizando **Mongoose** y **MongoDB**.  
El sistema funciona completamente desde la **consola**, sin API ni interfaz web, cumpliendo con el objetivo del trabajo práctico de la **Diplomatura en Desarrollo Web Backend**.

---
## 🧱 Estructura del Proyecto

```yaml

📦 TRABAJO-PRACTICO-1-EVALUACION-BASE-DE-DATOS-BACKEND-TARDE-999198249
├── 📁 node_modules
├── 📁 src
│   ├── 📁 controllers
│   │   └── 📄 controller.ts
│   ├── 📁 db
│   │   └── 📄 connection.ts
│   ├── 📁 utils
│   │   ├── 📄 buscarEquipo.ts
│   │   ├── 📄 commands.ts
│   ├── 📄 equiposDB.ts
│   ├── 📄 index.ts
│   └── 📄 listaEquipos.json
├── 📄 .env
├── 📄 .gitignore
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 README.md
└── 📄 tsconfig.json
```
---
## ⚙️ Tecnologías Utilizadas

- 🟦 **TypeScript**
- 🍃 **MongoDB**
- 🧩 **Mongoose**
- ⚙️ **Dotenv**
- 🧠 **Node.js**
- 🚀 **TS-Node-Dev**


---
## 🧰 Instalación y Configuración

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/alexlpda1420/Trabajo-Practico-1-Evaluacion-Base-de-Datos-backend-tarde-999198249.git
cd Trabajo-Practico-1-Evaluacion-Base-de-Datos-backend-tarde-999198249
```

### 2️⃣ Instalar dependencias
```bash
npm install 
npm install mongoose dotenv
npm install -D @types/node

```
---
## 🔧 Configurar la conexión a MongoDB

En la raíz del proyecto, creá un archivo .env con la siguiente línea:

```env

MONGO_URI=mongodb://localhost:27017/bd

```
## 🍃 Cargar los Datos Iniciales

El proyecto incluye un archivo listaEquipos.json con los equipos más importantes del fútbol argentino.
Podés cargarlo en tu base de datos de esta manera:

1. Abrí MongoDB Compass.
2. Conectate a tu base local o Atlas (mongodb://localhost:27017/bd).
3. En el panel izquierdo, seleccioná tu base de datos bd.
4. Si no existe, creala con el botón "Create Database".
5. Dentro de la base, creá la colección equipos.
6. Hacé clic en “Add Data” → “Import File”.
7. Seleccioná el archivo src/listaEquipos.json.
8. En formato de importación, elegí JSON y presioná Import ✅
9. ¡Listo! Tus equipos aparecerán automáticamente en la base.


## 🧠 Uso del CRUD

Ejecutá los siguientes comandos desde la terminal:

- **Mostrar ayuda**
```bash
npm run dev info
```
> ![Info](/src/images/Menu-Info.png)
- **Crear un Equipo**
```bash
npm run dev crear nombre="River Plate" dt="Marcelo Gallardo" estadio="Monumental" titulosNacionales=38 titulosInternacionales=12

```
- **Listar todos los equipos**
```bash
npm run dev listar

```
- **Obtener un equipo por su ID (UUID)**
```bash
npm run dev obtener <id>
```
- **Eliminar un equipo**
```bash
npm run dev eliminar <id>

```
- **Actualizar un Equipo**
```bash
npm run dev actualizar <id> campo=valor [campo=valor...]

```
---
## 🧾 Ejemplo de Documento Guardado

``` json
{
    "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "nombre": "River Plate",
    "dt": "Marcelo Gallardo",
    "estadio": "Monumental",
    "titulosNacionales": 38,
    "titulosInternacionales": 12
  }
```
## Autor
**Alexis Esteban Roldan**
💼 Diplomatura en Desarrollo Web Backend
📍 Argentina
[LinkedIn](https://www.linkedin.com/in/alexis-esteban-roldan/)
