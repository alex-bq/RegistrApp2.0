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
  
  async ingreso(usuario: string, contrasena: string) {
    try {
      const credencialesCorrectas = await this.storageService.validar(usuario, contrasena);
      
      if (credencialesCorrectas) {
        console.log('Credenciales correctas para usuario:', usuario);
  
        const rolUsuario = await this.storageService.obtenerRol(usuario);
    
        console.log('Rol del usuario:', rolUsuario);
  
        if (rolUsuario === 'Estudiante') {
          localStorage.setItem('nombre', this.nombreUsuario);
          localStorage.setItem('ingresado','true');
          this.router.navigate(['/home']);
        } else {
          localStorage.setItem('nombre', this.nombreUsuario);
          localStorage.setItem('ingresadoProfe','true');
          this.router.navigate(['/home-profe']);
        }
    
        // Limpiar campos de entrada
        this.nombreUsuario = "";
        this.contrasena = "";
    
      } else {
        // Credenciales incorrectas
        console.log('Credenciales incorrectas para usuario:', usuario);
        this.error();
      }
    } catch (error) {
      // Manejar errores aquí
      console.error('Error al intentar ingresar:', error);
      this.error();
    }
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
  irRegistrar(){
    this.router.navigate(['/registro'])
  }

  async ionViewWillEnter() {
    
    await this.storageService.agregar('admin', 'admin','admin');
    
  }

  ngOnInit() {
    console.log('Ruta actual:', this.router.url);

  }

  
}




