import { Subject, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Account } from './account';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  #currentUser: Subject<Account> = new Subject();

  constructor(private http: HttpClient) { }


  sendAccountToDatabase(accountToRegister: Account){
    this.http
    .post('https://register-login-crud-default-rtdb.europe-west1.firebasedatabase.app/registeredUsers.json', [accountToRegister]);
  }
}
