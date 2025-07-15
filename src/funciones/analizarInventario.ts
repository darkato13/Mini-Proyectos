export function analizarInventario(inventario: {nombre: string, stock: number}[]): string | { totalProductos: number, productosAgotados: string[], stockBajo: string[], productosDisponibles: string[]} {
    // Validamos que el inventario no esté vacío
    if (!Array.isArray(inventario) || inventario.length === 0) {
        return 'El inventario debe ser un array no vacío'
    }
    // Validamos que cada producto tenga un nombre y stock 
    const esValido = inventario.every(item => 
        typeof item.nombre === 'string' && item.nombre.trim() !== '' && 
        typeof item.stock === 'number'
    ) 
    if (!esValido) {
        return 'Todos los productos deben tener un nombre y un stock válido';
    }

    const totalProductos = inventario.length
    const productosAgotados = inventario.filter(inventario => inventario.stock === 0).map(inventario => inventario.nombre)
    const stockBajo = inventario.filter(inventario => inventario.stock > 0 && inventario.stock < 5).map(inventario => inventario.nombre)
    const productosDisponibles = inventario.filter(inventario => inventario.stock > 0).map(inventario => inventario.nombre)

    return {
        totalProductos,
        productosAgotados,
        stockBajo,
        productosDisponibles
    };
}
