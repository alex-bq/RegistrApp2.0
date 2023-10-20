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

  

  constructor(private storageService: StorageService,private router: Router,private alertController: AlertController,private loadingCtrl: LoadingController) {}

  async recuperarContra() {
    // Verifica que las contraseñas coincidan
    if (this.nuevaContra !== this.repetirContra) {
      this.mostrarError('Las contraseñas no coinciden');
      return; // Detén la recuperación si las contraseñas no coinciden
    }
  
    const usuarioIngresado: string = this.nombreUsuario;
  
    // Aquí puedes agregar lógica para verificar si el nombre de usuario existe en tu sistema.
    const usuarioExistente = await this.storageService.get(usuarioIngresado);
    
    if (usuarioExistente == null) {
      this.mostrarError('El nombre de usuario no existe.');
      return;
    }
    
    await this.storageService.remove(usuarioIngresado);

    // Si el nombre de usuario existe y las contraseñas coinciden, procede a cambiar la contraseña.
    // Aquí puedes llamar a una función o servicio que realice la recuperación de contraseña.
    await this.storageService.set(usuarioIngresado, this.nuevaContra);
    // Por ahora, solo mostraremos un mensaje en la consola.
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
