import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombreUsuario: string = '';
  contrasena: string = '';
  rol: string = '';

  constructor(private loadingCtrl: LoadingController,private storageService: StorageService,private router: Router,private alertController: AlertController) {}




async registrar() {
  const nombre: string = this.nombreUsuario.trim();
  const contrasena: string = this.contrasena.trim();
  const rol: string = this.rol;


  if (!nombre || nombre.length < 3) {
    this.mostrarError('El nombre de usuario debe tener al menos 3 caracteres.');
    return;
  }
  if (this.contrasena.length < 3) {
    this.mostrarError('La contraseña debe tener al menos 3 caracteres');
    return;
  }

  const usuarioExistente = await this.storageService.get(nombre);
  if (usuarioExistente) {
    this.mostrarError('El nombre de usuario ya existe.');
    return;
  }
  if (rol == ''){
    this.mostrarError('Seleccione un rol')
    
    return;
  }

  await this.storageService.agregar(nombre, contrasena, rol);
  await this.mostrarCarga("Registrado con éxito");

  this.router.navigate(['/login'])

}

async mostrarError(mensaje: string) {
  const alert = await this.alertController.create({
    header: 'Error en el registro',
    message: mensaje,
    buttons: ['OK']
  });

  await alert.present();
}

async mostrarCarga(mensaje: string) {
  const loading = await this.loadingCtrl.create({
    message: mensaje,
    duration: 1000,
    
    
  });

  loading.present();
}

  ngOnInit() {
  }

}
