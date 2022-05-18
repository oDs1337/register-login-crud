import { Subject, take, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Account } from './../account';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  #users: Account[] = [];
  #currentUserInfo?: Account;
  #databaseUrl = "https://register-login-crud-default-rtdb.europe-west1.firebasedatabase.app/registeredUsers.json/";

  constructor(private http: HttpClient) { }


  registerUser(accountData: Account){
    this.http
        .post(this.#databaseUrl, accountData)
        .subscribe(res => {
          console.log(res);
        });
  }

  updateUser(updateData: Account){
    const updateUrl = "https://register-login-crud-default-rtdb.europe-west1.firebasedatabase.app/registeredUsers/" + this.#currentUserInfo?.id;
    console.log(updateUrl);
  }

  loginUser(email: string, password: string){
    this.#users.forEach(user => {
      if(email === user.email && password === user.password){
        console.log("logged in");
        this.#currentUserInfo = user;
      }
    })
  }

  fetchData(){
    this.http.get<any>(this.#databaseUrl)
    .subscribe((res => {
        this.#users = Object.keys(res).map(element => {
        let user = res[element];
        user.id = element;
        return user;
      })
    }))
  }

  getUsers(){
    return this.#users;
  }

  getCurrentUserInfo(){
    return this.#currentUserInfo;
  }

}
