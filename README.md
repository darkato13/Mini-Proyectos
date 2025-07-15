# 🧾 Mini Proyecto: API de Inventario con TypeScript + Express

Este proyecto es una API RESTful construida con **Node.js**, **TypeScript**, **Express** y persistencia en archivo `.json`. Permite gestionar un inventario de productos de forma modular, escalable y con buenas prácticas de backend.

## Funcionalidades

- `GET /inventario` → Devuelve todos los productos del inventario.
- `POST /inventario` → Agrega un nuevo producto validado al inventario.
- `GET /` → Ruta de bienvenida.
- (Próximamente) `GET /inventario/analizar` → Devuelve un resumen del inventario.

## Tecnologías utilizadas

- TypeScript con tipado estricto
- Express para crear rutas REST
- fs.promises para persistencia en archivo
- ts-node-dev para desarrollo en caliente

## Cómo ejecutar

```bash
npm install
npm run dev

El servidor estará disponible en http://localhost:3000

## Mejoras futuras

- Endpoint `GET /inventario/analizar`
- Validación robusta con Zod
- Migración a base de datos real (SQLite o MongoDB)
- Documentación con Swagger
- Pruebas automatizadas con Vitest o Jest

## Autor

**Christhopher**  
Desarrollador backend en formación, apasionado por TypeScript, Express y la creación de APIs escalables.

