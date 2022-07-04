import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WishService } from '../wish.service';
import { DataModel } from './data.model';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  data:any=new DataModel("","","")
  constructor(public wish:WishService, public route:Router) { }

  ngOnInit(): void {
  }
  Verify(){
      this.wish.postWish(this.data).subscribe((Data)=>{
        var id = JSON.parse(JSON.stringify(Data))
        this.route.navigate(['/success/',id._id])
        console.log(id)
      })
    }




  }
