import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ShipperService} from "../../shared/services/shipper.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  errors!: string;
  constructor(private readonly fb: FormBuilder,
              private readonly shipperService: ShipperService,
              private readonly router: Router) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }
  createRegisterForm() {
    this.registerForm = this.fb.group({
      fullName: [null, [Validators.required]],
      email: [
        null,
        [
          Validators.required,
          Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
        ],
        [],
      ],
      password: [null, [Validators.required]],


    });
  }
  onSubmit() {
    this.shipperService.registerShipper(this.registerForm.value).subscribe({
      next: () => void this.router.navigateByUrl('/'),
      error: (error: { errors: string; }) => {
        console.log(error);
        this.errors = error.errors;
      }
    });
  }
  // validateEmailNotToken(): AsyncValidatorFn {
  //   return control => {
  //     return timer(500).pipe(
  //       switchMap(() => {
  //         if (!control.value) {
  //           return of(null);
  //         }
  //         return this.accountService.checkEmailExists(control.value).pipe(
  //           map(res => {
  //             return res ? { emailExists: true } : null;
  //           })
  //         );
  //       })
  //     );
  //   };
  // }
}
