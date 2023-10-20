import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombreUsuario: string = '';
  contrasena: string = '';

  constructor(private storageService: StorageService,private router: Router,private alertController: AlertController) {}




async registrar() {
  const nombre: string = this.nombreUsuario.trim();
  const contrasena: string = this.contrasena.trim();

  if (!nombre || nombre.length < 3) {
    this.mostrarError('El nombre de usuario debe tener al menos 3 caracteres.');
    return;
  }

  const usuarioExistente = await this.storageService.get(nombre);
  if (usuarioExistente) {
    this.mostrarError('El nombre de usuario ya existe.');
    return;
  }

  this.storageService.set(nombre, contrasena);
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

  ngOnInit() {
  }

}
