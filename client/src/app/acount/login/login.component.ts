import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AccountService} from "../../shared/services/account.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private readonly accountService: AccountService,
    private readonly router: Router) { }

  ngOnInit() {
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$')]),
      password: new FormControl('', Validators.required)
    });
  }
  onSubmit() {
    // this.accountService.login(this.loginForm.value).subscribe({
    //   next: () => void this.router.navigateByUrl(this.returnUrl),
    //   error: (error: any) => console.log(error)
    // });
  }
}
