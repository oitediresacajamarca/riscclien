import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { UserI } from 'src/app/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  user: UserI = {
    dni: "",
    password: ""
  }

  ngOnInit() {
  }

  onLogin(){
    return this.authService.login(this.user)
    .subscribe( data => {
      this.authService.setUser(data.dataUser)
      let token = data.dataUser.accessToken;
      let expiresIn = data.dataUser.expiresIn;
      this.authService.saveToken(token,expiresIn);
      this.router.navigate(["user/profile"])
    },
    error => console.log(error)
    );
  }
}
