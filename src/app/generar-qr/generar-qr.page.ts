import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQrPage {
  asignaturas = [
    { nombre: 'CALIDAD DE SOFTWARE', codigo: 'CSY4111', color: 'primary' },
    { nombre: 'ESTADISTICA DESCRIPTIVA', codigo: 'MAT4140', color: 'secondary' },
    { nombre: 'ETICA PARA EL TRABAJO', codigo: 'EAY4450', color: 'tertiary' },
    { nombre: 'INGLES INTERMEDIO', codigo: 'INI5111', color: 'success' },
    { nombre: 'PROCESO DE PORTAFOLIO', codigo: 'APY4461', color: 'warning' },
    { nombre: 'PROGRAMACION', codigo: 'APY3461', color: 'danger' },
  ];

  constructor(private barcodeScanner: BarcodeScanner) {}

  generarQR(asignatura: string) {



    console.log(`Generando QR para la asignatura: ${asignatura}`);
  }
}
