import { Subject, take, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Account, AccountDTO } from './account';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  //musisz mi pomoc z tymi interface'ami bo nie wiedzialem jak to napisac
  #users: any;
  #arrayOfUsers?: any[];
  #databaseUrl = "https://register-login-crud-default-rtdb.europe-west1.firebasedatabase.app/registeredUsers.json";

  constructor(private http: HttpClient) { }


  sendAccountToDatabase(accountToRegister: Account){
    this.http
        .post(this.#databaseUrl, [accountToRegister])
        .subscribe(res => {
          console.log(res);
        });
  }

  fetchData(){
    this.http.get(this.#databaseUrl)
        .subscribe((res => {
          this.#users = res;
          this.#arrayOfUsers = Object.keys(this.#users).map(index => {
            let user = this.#users[index][0];
            return user;
          });
    }))
  }

  getUsers(){
    return this.#arrayOfUsers;
  }
}
