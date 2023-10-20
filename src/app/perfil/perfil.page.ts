import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  nombre = localStorage.getItem("nombre")

  getdata:any[]=[];
  data: any[] = [];
  constructor(private api: ApiService, private http :HttpClient) { }

  ngOnInit() {
    this.llenarDatos()
    this.getData()
  }

  llenarDatos(){
    this.api.getPosts().subscribe( data => {
      this.data = data;
      console.log(this.data);
    })

  }

  getData(){
    this.api.getdata<any[]>("").subscribe(data => {
      this.getdata = data
      console.log(this.getdata);
    }
      
    )
  }

}
