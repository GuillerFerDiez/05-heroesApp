import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) { }
  login() {
    this.authService.login()
      .subscribe(resp => {
        console.log(resp);
        if (resp.id) {
          // si la respuesta es exitosa navego a heroes
          this.router.navigate(['./heroes']);
        }
      })
    //this.router.navigate(['./heroes']);
  }

  ingresarSinlogin() {
    this.authService.logout();
    console.log('Ingresar sin login(token)', this.authService.auth.id);
    this.router.navigate(['./heroes']);
  }

}