import { Component } from '@angular/core';
import { Router , NavigationExtras} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombre = localStorage.getItem("nombre")

  constructor(private router: Router) {}

  irApi(){
    this.router.navigate(['/api'])
  }

  

}
