import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['',[
        Validators.required,
        Validators.email
      ]],
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(9),
      ]],
      lastName: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(9),
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(9),
      ]]
    });

  }

  get email(){
    return this.registerForm.get('email');
  }

  get name(){
    return this.registerForm.get('name');
  }

  get lastName(){
    return this.registerForm.get('lastName');
  }

  get password(){
    return this.registerForm.get('password');
  }


  onSubmit(dupa: any): void{
    console.log(dupa);
  }

}
