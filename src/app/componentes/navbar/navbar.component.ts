import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor(private authservice: AuthService) {}
  public app_name = "RISC";

  ngOnInit() {}

  onLogout(): void{
    this.authservice.logoutUser();
  }
}