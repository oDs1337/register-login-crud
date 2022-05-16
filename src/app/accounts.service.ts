import { Subject, take, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Account } from './account';
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


  registerUser(accountData: Account){
    this.http
        .post(this.#databaseUrl, accountData)
        .subscribe(res => {
          console.log(res);
        });
  }

  fetchData(){
    this.http.get(this.#databaseUrl)
        .subscribe((res => {
          console.log(res);
          this.#users = Object.keys(res).map(element => {
            let user = this.#users[element];
            return user;
          });
    }))
  }

  getUsers(){
    return this.#arrayOfUsers;
  }
}
