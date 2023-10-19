import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root' // Esto asegura que el servicio sea un singleton
})
export class StorageService {
  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // Inicializamos Ionic Storage
    const storage = await this.storage.create();
    // Almacenamos la instancia de Ionic Storage
    this.storage = storage;
  }

  // Métodos para interactuar con el almacenamiento
  async set(key: string, value: any) {
    return this.storage.set(key, value);
  }

  async get(key: string) {
    return this.storage.get(key);
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
