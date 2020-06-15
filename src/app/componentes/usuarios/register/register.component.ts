import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { UserI } from 'src/app/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  public user: UserI = {
    dni: "",
    password: "",
    email: "",
    apellido_paterno: "",
    apellido_materno: "",
    nombres: "",
    tipo_ambito: "",
    descripcion_ambito: ""
  };
  
  ngOnInit() { }

  onRegister()/*: void*/{
    return this.authService.registerUser(this.user)
    .subscribe( data => {
      console.log(data);
    },
    error => console.log(error)
    );
    /* 
    this.authService.registerUser(this.user)
    .subscribe( user => {
      this.authService.setUser(this.user);
      let token = user.dataUser.accessToken;
      let expiresIn = user.dataUser.expiresIn;
      this.authService.saveToken(token, expiresIn);
      this.router.navigate(["/user/profile"]);
    }); */
  }

}
