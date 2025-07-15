import express from 'express'
import { leerInventario } from './funciones/inventarioArchivo'
import { agregarProducto } from './funciones/agregarProducto'
import { guardarInventario } from './funciones/inventarioArchivo'

const app = express()
const PORT = 3000

// Middleware para interpretar JSON
app.use(express.json())

// Ruta para obtener el inventario completo
app.get('/inventario', async (req, res) => {
  const inventario = await leerInventario()
  res.json(inventario)
})

app.post('/inventario', async (req, res) => {
  try {
    const nuevoProducto = req.body;

    // Leer inventario actual
    const inventario = await leerInventario()

    // Intentar agregar el nuevo producto
    const inventarioActualizado = agregarProducto(inventario, nuevoProducto)

    if (typeof inventarioActualizado === 'string') {
      // Si hay error, lo enviamos como respuesta
      return res.status(400).json({ error: inventarioActualizado })
    }

    // Guardar el inventario actualizado
    await guardarInventario(inventarioActualizado)

    // Devolver inventario final
    res.status(201).json(inventarioActualizado)

 } catch (error) {
  console.error('Error en el endpoint POST /inventario:', error)
  res.status(500).json({ error: 'Error interno del servidor' })
} 
})

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Bienvenido a tu API de Inventario en TypeScript!')
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
})