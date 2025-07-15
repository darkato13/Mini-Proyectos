export function agregarProducto(inventario: { nombre: string, stock: number }[], nuevoProducto: { nombre: string, stock: number }): string | { nombre: string, stock: number }[] {
  // Validamos que el nuevo producto tenga un nombre y stock
  if (!nuevoProducto.nombre.trim() || typeof nuevoProducto.stock !== 'number') {
    return 'El producto debe tener un nombre y un stock válido'
  }
  // Verificamos si el producto ya existe en el inventario
  const yaExiste = inventario.some(
    item => item.nombre.toLowerCase() === nuevoProducto.nombre.toLowerCase()
  )

  if (yaExiste) {
    return `El producto "${nuevoProducto.nombre}" ya está registrado`
  }

  // Agregamos el nuevo producto al inventario (sin modificar el original)
  return [...inventario, nuevoProducto]
}