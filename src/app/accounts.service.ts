import { HttpClient } from '@angular/common/http';
import { Account } from './account';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient) { }


  sendAccountToDatabase(accountToRegister: Account){
    this.http
    .post('https://register-login-crud-default-rtdb.europe-west1.firebasedatabase.app/registeredUsers.json', [accountToRegister]);
  }
}
