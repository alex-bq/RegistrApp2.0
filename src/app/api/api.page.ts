import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';




 

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

   
}
