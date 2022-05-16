import { Subject, take, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Account } from './account';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  users?: any;
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
          this.users = res;
          console.log(this.users);
          let dupa: any[];
          dupa = Object.keys(this.users).map(index => {
            let user = this.users[index];
            return user;
          })
          console.log(dupa[0][0].name);
    }))
  }
}
