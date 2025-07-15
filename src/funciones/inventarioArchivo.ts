import { promises as fs } from 'fs'
import path from 'path'

const rutaArchivo = path.resolve(__dirname, '../../data/inventario.json')

export async function leerInventario(): Promise<{ nombre: string; stock: number }[]> {
  try {
    const data = await fs.readFile(rutaArchivo, 'utf-8')
    return JSON.parse(data);
  } catch (error) {
    console.error('Error al leer el inventario:', error)
    return []
  }
}

export async function guardarInventario(
  inventario: { nombre: string; stock: number }[]
): Promise<void> {
  try {
    const contenido = JSON.stringify(inventario, null, 2)
    await fs.writeFile(rutaArchivo, contenido, 'utf-8')
  } catch (error) {
    console.error('Error al guardar el inventario:', error)
  }
}