import { Subject, take, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Account } from './account';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  //musisz mi pomoc z tymi interface'ami bo nie wiedzialem jak to napisac
  #users?: Account[];
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
    this.http.get<Account[]>(this.#databaseUrl)
    .subscribe((res => {
        this.#users = res;
    }))
  }

  getUsers(){
    return this.#users;
  }
}
