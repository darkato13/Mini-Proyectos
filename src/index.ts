import { agregarProducto } from './funciones/agregarProducto'
import { analizarInventario } from './funciones/analizarInventario'
import { leerInventario, guardarInventario } from './funciones/inventarioArchivo'

// Encapsulamos toda la lógica dentro de una función async
async function ejecutarInventario() {
  //  Leer inventario desde el archivo
  const inventario = await leerInventario()

  //  Agregar un nuevo producto
  const inventarioActualizado = agregarProducto(inventario, {
    nombre: 'Case',
    stock: 5
  })

  // Verificar si hubo error al agregar
  if (typeof inventarioActualizado === 'string') {
    console.log(inventarioActualizado);
    return; // detenemos la ejecución si hubo error
  }

  // Guardar el inventario actualizado en el archivo
  await guardarInventario(inventarioActualizado)

  // Analizar inventario actualizado y mostrar resumen
  const resumen = analizarInventario(inventarioActualizado)
  console.log(resumen)
}

ejecutarInventario()