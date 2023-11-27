import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombre = localStorage.getItem("nombre")

  constructor(private router: Router,private loadingCtrl: LoadingController) {}

  irPerfil(){
    this.router.navigate(['/perfil'])
  }

  irAsignaturas(){
    this.router.navigate(['/asignaturas'])
  }

  salir(){
    localStorage.removeItem('ingresadoProfe')
    localStorage.removeItem('ingresado')
    localStorage.removeItem('nombre')
    this.router.navigate(['/login'])
    this.mostrarCarga("Salió de la sesión");

  }
  irQR(){
    this.router.navigate(['/qr'])
   }
   irAsistencia(){
    this.router.navigate(['/asistencia'])
   }

  async mostrarCarga(mensaje: string) {
    const loading = await this.loadingCtrl.create({
      message: mensaje,
      duration: 1000,


    });

    loading.present();
  }


}
