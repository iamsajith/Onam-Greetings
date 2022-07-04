import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WishService } from '../wish.service';
import { ActivatedRoute } from '@angular/router';
import { DataModel } from '../start/data.model';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {
  id = ""
  data:any = new DataModel("","","")

  constructor(public wish:WishService,private actiroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.actiroute.snapshot.params['id']
    // console.log("eyeD",this.id)
    this.wish.getWish(this.id).subscribe((db)=>{
    this.data = JSON.parse(JSON.stringify(db))
    })
  }

}
