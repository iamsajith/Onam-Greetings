import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WishService {
  server_address:string = 'api';
  constructor(public http:HttpClient,public router:Router) { }
  postWish(data:string){return this.http.post(`${this.server_address}`,data)
}
  getWish(id:any){
   return this.http.get<any>(`${this.server_address}/wish/`+id)
  }
}
