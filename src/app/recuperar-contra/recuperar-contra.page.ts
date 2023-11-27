import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';




@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.page.html',
  styleUrls: ['./recuperar-contra.page.scss'],
})
export class RecuperarContraPage implements OnInit {
  nombreUsuario: string = '';
  nuevaContra: string = '';
  repetirContra: string = '';
  rol: string= '';

  

  constructor(private storageService: StorageService,private router: Router,private alertController: AlertController,private loadingCtrl: LoadingController) {}

  async recuperarContra() {
    if (this.nuevaContra.length < 3) {
      this.mostrarError('La contraseña debe tener al menos 3 caracteres');
      return;
    }
    if (this.nuevaContra !== this.repetirContra) {
      this.mostrarError('Las contraseñas no coinciden');
      return; 
    }
  
    const usuarioIngresado: string = this.nombreUsuario;
  
    const usuarioExistente = await this.storageService.get(usuarioIngresado);
  
    if (!usuarioExistente || usuarioExistente.length === 0) {
      this.mostrarError('El nombre de usuario no existe.');
      return;
    }
  
    const rolExistente: string = await this.storageService.obtenerRol(usuarioIngresado);
  
    await this.storageService.remove(usuarioIngresado);
  
    await this.storageService.agregar(usuarioIngresado, this.nuevaContra, rolExistente);
  
    await this.mostrarCarga("Contraseña recuperada con éxito");
    await this.router.navigate(['/login']);
  }
  
  


  async mostrarError(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error en la recuperacion',
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
