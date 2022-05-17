import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountsService } from '../accounts.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  users?: Account[];

  constructor(private fb: FormBuilder, private accountService: AccountsService) { }

  ngOnInit(): void {

    this.accountService.fetchData();

    this.loginForm = this.fb.group({
      email: ['',[
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(9),
      ]],
      password: ['',[
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(9),
      ]],
    })

  }

  get email(){
    return this.loginForm.get('email') as FormControl;
  }

  get password(){
    return this.loginForm.get('password') as FormControl;
  }

  onSubmit(data: any){
    this.users = this.accountService.getUsers()!;

    this.users.forEach(user => {
      console.log(user);
    })


  }

}
