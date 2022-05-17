import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Account } from '../account';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private accountService: AccountsService) { }

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
   //this.registerForm.valueChanges.subscribe(console.log);

  }

  get email(){
    return this.registerForm.get('email') as FormControl;
  }

  get name(){
    return this.registerForm.get('name') as FormControl;
  }

  get lastName(){
    return this.registerForm.get('lastName') as FormControl;
  }

  get password(){
    return this.registerForm.get('password') as FormControl;
  }


  onSubmit(registerFormDate: Account): void{
    console.log(registerFormDate);
    this.accountService.registerUser(registerFormDate);
  }
}
