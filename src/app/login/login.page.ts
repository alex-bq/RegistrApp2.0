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

  async ingreso() {
    const nombre: string = this.nombreUsuario.trim();
    const contrasena: string = this.contrasena.trim();

    // Obtener la contraseña almacenada para el nombre de usuario
    const storedPassword = await this.storageService.get(nombre);

    if (storedPassword && storedPassword === contrasena) {
      localStorage.setItem('nombre', nombre);
      localStorage.setItem('ingresado','true');
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

  irRecuperarContra(){
    this.router.navigate(['/recuperar-contra'])
  }

  async ionViewWillEnter() {
    
    await this.storageService.set('admin', 'admin');
    
  }

  ngOnInit() {
    
  }

  
}




