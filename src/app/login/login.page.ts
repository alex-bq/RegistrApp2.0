import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { StorageService } from '../storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController, public menuCrtl: MenuController,private storageService: StorageService) { }

  nombreUsuario: string = '';
  contrasena: string = '';

  ingreso() {
    const nombre: string = this.nombreUsuario.trim();
    const contrasena: string = this.contrasena.trim();

    const credencialesValidas: { [key: string]: string } = {
      calfun: 'perdon',
      german: 'poto',
      alex: 'alex',
      andres: 'fufu',
      juan: '321',
      andrus: '123',
    };

    if (credencialesValidas[nombre] === contrasena) {
      localStorage.setItem('nombre', nombre);
      this.router.navigate(['/home']);
    } else {
      this.error();
    }

    this.nombreUsuario = '';
    this.contrasena = '';
  }

  async error() {
    const alert = await this.alertController.create({
      header: 'Datos incorrectos',
      message: `El usuario o la contraseña que proporcionó no existe.`,
      buttons: ['Volver a intentar']
    });

    await alert.present();
  }

  async ionViewWillEnter() {
    // Este evento se dispara cuando la página se va a mostrar

    // Ejemplo de uso del servicio
    await this.storageService.set('name', 'Mr. Ionitron');
    
    const name = await this.storageService.get('name');
    console.log(name); // Debería imprimir "Mr. Ionitron"
  }

  ngOnInit() {
    
  }

  
}
