import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{
  isLoading:boolean = false;
  private authStatusSub?:Subscription;
  loginValid:boolean = true;

  constructor(private authService:AuthService){}

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener()
      .subscribe({
        next: status => {
          this.loginValid = status;
        }
      })
  }

  onLogin(form:NgForm){
    this.loginValid = true;

    if (form.invalid){
      return;
    }

    this.authService.login(form.value.email, form.value.password);
  }

  onSignup(form:NgForm){
    if (form.invalid){
      return;
    }
    this.authService.createUser(form.value.email, form.value.password, form.value.username);
  }

  ngOnDestroy() {
    this.authStatusSub?.unsubscribe();
  }

}
