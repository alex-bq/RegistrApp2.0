import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombre = localStorage.getItem("nombre")

  constructor(private router: Router) {}

  irPerfil(){
    this.router.navigate(['/perfil'])
  }

  salir(){
    this.router.navigate(['/login'])
  }

  
}
