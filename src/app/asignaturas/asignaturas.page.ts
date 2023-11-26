
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  constructor(private router: Router,private loadingCtrl: LoadingController) { }

  irPerfil(){
    this.router.navigate(['/perfil'])
  }
  salir(){
    localStorage.removeItem('ingresado')
    localStorage.removeItem('nombre')
    this.router.navigate(['/login'])
    this.mostrarCarga("Salió de la sesión");

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
  irQR(){
    this.router.navigate(['/qr'])
   }
}