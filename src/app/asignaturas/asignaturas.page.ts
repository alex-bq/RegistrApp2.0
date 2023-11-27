
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { StorageService } from '../storage.service';



@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {
  asignaturas = [
    { nombre: 'CALIDAD DE SOFTWARE', codigo: 'CSY4111', color: 'primary' },
    { nombre: 'ESTADISTICA DESCRIPTIVA', codigo: 'MAT4140', color: 'secondary' },
    { nombre: 'ETICA PARA EL TRABAJO', codigo: 'EAY4450', color: 'tertiary' },
    { nombre: 'INGLES INTERMEDIO', codigo: 'INI5111', color: 'success' },
    { nombre: 'PROCESO DE PORTAFOLIO', codigo: 'APY4461', color: 'warning' },
    { nombre: 'PROGRAMACION', codigo: 'APY3461', color: 'danger' },
  ];
  asistencias: any[] = [];



  codigoEscaneado: string = "";
  code: any;

  constructor(private router: Router,private loadingCtrl: LoadingController,private bc:BarcodeScanner,private storageService: StorageService) { }

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

  async qr(asignatura: string) {
    const loading = await this.loadingCtrl.create({
      message: 'Registrando asistencia...',
    });
    loading.present();

    this.codigoEscaneado = "Presente CSY4111";

    // El escaneo del código QR debe contener "Presente" y el código de la asignatura separados por un espacio
    // this.bc.scan().then(bcdata => {
    // const qrData = bcdata.text.split(' ');
    const qrData =  this.codigoEscaneado.split(' ');
      if (qrData.length === 2 && qrData[0] === 'Presente' && qrData[1] === asignatura) {
        // Si el código QR es válido y la asignatura coincide, registra la asistencia
        this.registrarAsistencia(asignatura);
        console.log('BarCode data: ', qrData);
      } else {
        console.log('Código QR no válido o asignatura incorrecta.');
      }
    // }).catch(e => {
    //   console.log('Error al escanear el código QR', e);
    // }).finally(() => {
    //   loading.dismiss();
    // });
}

  async registrarAsistencia(asignatura: string) {
    // Supongo que el nombre del usuario está almacenado en localStorage, puedes cambiarlo según tus necesidades
    const usuario = localStorage.getItem('nombre');
  
    if (usuario) {
      // Llama al servicio de almacenamiento para registrar la asistencia
      this.storageService.agregarAsistencia(usuario, asignatura, 'Presente');
      console.log('Asistencia registrada con éxito.');
    } else {
      console.log('Nombre de usuario no encontrado en localStorage.');
    }
  }

  ngOnInit() {
    const usuario = localStorage.getItem('nombre');

    if (usuario) {
      // Obtén el historial de asistencias del usuario
      this.storageService.obtenerAsistencias(usuario).then((asistencias) => {
        this.asistencias = asistencias;
      });
    } else {
      console.log('Nombre de usuario no encontrado en localStorage.');
    }
  }
  
}