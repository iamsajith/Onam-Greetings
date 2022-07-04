import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WishService {
  constructor(public http:HttpClient,public router:Router) { }
  postWish(data:string){return this.http.post("http://localhost:5000",data)
  // .subscribe((Data)=>{
  //   var id = JSON.parse(JSON.stringify(Data))
  //   localStorage.setItem("id",id._id) }


  // )
}
  getWish(id:any){
   return this.http.get<any>('http://localhost:5000/wish/'+id)
  }
}
