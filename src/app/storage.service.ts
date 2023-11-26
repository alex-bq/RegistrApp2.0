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

  async agregar(user: any,pass: any, rol:any){
    await this.storage.set(user,{ user, pass, rol})
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

  async obtenerRol(usuario: string){
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

  

}