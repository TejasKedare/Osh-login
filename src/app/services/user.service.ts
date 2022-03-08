import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  url = "https://admin.eniola.app/api/v1/login"

  constructor(
    private https:HttpClient
  ) { }

  login(data: any){
    return this.https.post(this.url, data)
  }

  checkUser(){
    return !!localStorage.getItem('data')
  }
}
