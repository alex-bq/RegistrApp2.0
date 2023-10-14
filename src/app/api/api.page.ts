import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';




 

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  data: any[] = [];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.llenarDatos()
  }

  llenarDatos(){
    this.api.getPosts().subscribe( data => {
      this.data = data;
      console.log(this.data);
    })

  }
    


   
}
