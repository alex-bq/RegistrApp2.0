
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  code: any;

  constructor(private router: Router,private loadingCtrl: LoadingController,private bc:BarcodeScanner) { }

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

  qr(){
    this.bc.scan().then(bcdata => {
      this.code = bcdata.text;
      console.log('BarCode data : ', this.code);
    }).catch(e => {
      console.log('error', e)
    })
  }

  ngOnInit() {
  }
  
}