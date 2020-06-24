import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/servicios/auth.service";
import { UserI } from "src/app/interfaces/user";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  constructor(private authService: AuthService) { }
  user: UserI;

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
  }
}
