import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router , NavigationExtras} from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController) { }

  nombreUsuario: any;
  contrasena: any;

  ingreso(){
    if(this.nombreUsuario==="calfun" && this.contrasena==="calfun"){
      localStorage.setItem("nombre",this.nombreUsuario)

      this.router.navigate(['/home'], {queryParams: {data:this.nombreUsuario}})
    }
    else if(this.nombreUsuario==="german" && this.contrasena==="german"){
      localStorage.setItem("nombre",this.nombreUsuario)

      this.router.navigate(['/home'], {queryParams: {data:this.nombreUsuario}})
    }
    else if(this.nombreUsuario==="hettel" && this.contrasena==="hettel"){
      localStorage.setItem("nombre",this.nombreUsuario)

      this.router.navigate(['/home'], {queryParams: {data:this.nombreUsuario}})
    }

    else if(this.nombreUsuario==="andres" && this.contrasena==="andres"){
      localStorage.setItem("nombre",this.nombreUsuario)

      this.router.navigate(['/home'], {queryParams: {data:this.nombreUsuario}})
    }
    else if(this.nombreUsuario==="juan" && this.contrasena==="juan"){
      localStorage.setItem("nombre",this.nombreUsuario)

      this.router.navigate(['/home'], {queryParams: {data:this.nombreUsuario}})
    }
    else if(this.nombreUsuario==="andrus" && this.contrasena==="andrus"){
      localStorage.setItem("nombre",this.nombreUsuario)

      this.router.navigate(['/home'], {queryParams: {data:this.nombreUsuario}})
    }
    else{
       this.error();
    }
    this.nombreUsuario="";
    this.contrasena="";
  }

  

  async error(){
    const alert = await this.alertController.create({
      header: 'Datos incorrectos',
      message: `El usuario o la contraseña que proporcionó no existe.`,
      buttons: ['Volver a intentar']
    })

    await alert.present();
  }
  ngOnInit() {
  }

}
