import { AccountsService } from '../services/accounts.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Account } from '../account';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private fb: FormBuilder, private accountService: AccountsService) { }

  currentUser?: Account;
  manageForm!: FormGroup;

  ngOnInit(): void {
    this.currentUser = this.accountService.getCurrentUserInfo();
    this.manageForm = this.fb.group({
      email: ['',[
        Validators.email
      ]],
      name:['',[
        Validators.minLength(3),
        Validators.maxLength(9),
      ]],
      lastName:['',[
        Validators.minLength(3),
        Validators.maxLength(9),
      ]],
      password:['',[
        Validators.minLength(3),
        Validators.maxLength(9),
      ]],

    })
  }

  get email(){
    return this.manageForm.get('email') as FormControl;
  }

  get name(){
    return this.manageForm.get('name') as FormControl;
  }

  get lastName(){
    return this.manageForm.get('lastName') as FormControl;
  }

  get password(){
    return this.manageForm.get('password') as FormControl;
  }

  onSubmit(userData: Account){
    this.accountService.fetchData();
    this.accountService.updateUser(userData);
    console.log(userData);
  }

}
