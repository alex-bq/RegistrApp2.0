import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { QrService } from '../qr.service';
import { Router } from '@angular/router';

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
  qrCode: string = "";
  mostrarTarjeta = false;

  constructor(private router: Router,private qr:QrService,public appComponent: AppComponent,private http: HttpClient) { }

  generarQr(data:string) {
    this.qr.generateQrCode(data).subscribe(
      (response) => {
        if (response instanceof Blob) {
          this.mostrarTarjeta = true;
          this.qrCode = URL.createObjectURL(response);
          console.log(this.qrCode);
        } else {
          console.error('Invalid response format');
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
