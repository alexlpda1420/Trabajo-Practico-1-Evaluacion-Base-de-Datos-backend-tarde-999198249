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

Este proyecto consiste en la implementación de un **CRUD (Create, Read, Update, Delete)** para gestionar equipos de fútbol argentino que fue desarrollado en **TypeScript**

El sistema funciona completamente **desde la consola**, permitiendo crear, listar, buscar, actualizar y eliminar equipos de manera interactiva.  

El proyecto forma parte del trabajo práctico de la **Diplomatura en Desarrollo Web Backend**

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
│   │   ├── 📄 equiposDB.ts
│   │   ├── 📄 index.ts
│   │   └── 📄 listaEquipos.json
├── 📄 .gitignore
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 README.md
└── 📄 tsconfig.json
```
---
## ⚙️ Tecnologías Utilizadas

- 🟦 **TypeScript**
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
```
## 🧠 Uso del CRUD

Ejecutá los siguientes comandos desde la terminal:

- **Mostrar ayuda**
```bash
npm run dev info
```
> ![Info](/src/images/Menu-Info.png)
- **Crear un Equipo**
```bash
npm run dev agregarEquipo "Chacarita Juniors" "Juan Manuel Azconzabal" "Estadio Club Atletico Chacarita Juniors" "1" "0"
```

- **Buscar un Equipo**
```bash
npm run dev buscarEquipo "River Plate"
```
- **Borrar un Equipo**
```bash
npm run dev borrarEquipo "Chacarita Juniors"
```
- **Actualizar un Equipo**
```bash
npm run dev actualizarEquipo "Chacarita Juniors" "Alexis Roldan" "Estadio Chacarita Juniors" "20" "20"
```
---
## 🧾 Ejemplo de Documento Guardado

``` json
{
    "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "nombre": "River Plate",
    "dt": "Marcelo Gallardo",
    "estadio": "Monumental",
    "titulosNacionales": "38",
    "titulosInternacionales": "12"
  }
```
## Autor
**Alexis Esteban Roldan**
💼 Diplomatura en Desarrollo Web Backend
📍 Argentina
[LinkedIn](https://www.linkedin.com/in/alexis-esteban-roldan/)
