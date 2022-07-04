import { Component, OnInit } from '@angular/core';
import { WishService } from '../wish.service';
import { DataModel } from '../start/data.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  id =""
  data:any=new DataModel("","","")

  constructor(public wish:WishService,public actiroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.actiroute.snapshot.params['id'];
    this.wish.getWish(this.id).subscribe((db) => {
      this.data = JSON.parse(JSON.stringify(db));
    });
  }

}
