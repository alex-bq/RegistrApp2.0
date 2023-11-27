import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root' 
})
export class StorageService {

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this.storage = storage;
  }

  async agregar(user: any, pass: any, rol: any) {
    await this.storage.set(user, { user, pass, rol });
  }

  async obtener(key: string) {
    const userData = await this.storage.get(key);
    let datos: any[] = []
    datos.push(userData.user)
    datos.push(userData.pass)
    datos.push(userData.rol)
    return datos;
  }

  async get(key: string) {
    return this.storage.get(key);
  }

  async validar(usuario: string, contrasena: string): Promise<boolean> {
    const storedUserData = await this.storage.get(usuario);
    console.log('storedUserData:', storedUserData);
    if (storedUserData && storedUserData.pass) {
      return contrasena === storedUserData.pass;
    } else {
      return false;
    }
  }

  async obtenerRol(usuario: string) {
    const userData = await this.storage.get(usuario);
    return userData ? userData.rol : null;
  }

  async remove(key: string) {
    return this.storage.remove(key);
  }

  async clear() {
    return this.storage.clear();
  }

  async keys() {
    return this.storage.keys();
  }

  async length() {
    return this.storage.length();
  }

  // Nuevo método para agregar asistencia
  async agregarAsistencia(usuario: string, asignatura: string, estado: string) {
    // Obtener el historial de asistencias del usuario, si existe
    const historialAsistencias = (await this.storage.get(usuario + '_asistencias')) || [];

    // Agregar la nueva asistencia al historial
    historialAsistencias.push({ asignatura, estado, fecha: new Date() });

    // Actualizar el historial en el almacenamiento
    await this.storage.set(usuario + '_asistencias', historialAsistencias);
  }
  
  async obtenerAsistencias(usuario: string): Promise<any[]> {
    // Obtener el historial de asistencias del usuario
    return (await this.storage.get(usuario + '_asistencias')) || [];
  }

  async agregarMensajeQR(codigo: string, mensaje: string) {
    await this.storage.set(codigo, { codigo, mensaje });
  }

  async obtenerMensajeQR(codigo: string) {
    const qrData = await this.storage.get(codigo);
    return qrData ? qrData.mensaje : null;
  }

  async removeMensajeQR(codigo: string) {
    return this.storage.remove(codigo);
  }

}
