import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WishService } from '../wish.service';
import { DataModel } from '../start/data.model';

@Component({
  selector: 'app-previewall',
  templateUrl: './previewall.component.html',
  styleUrls: ['./previewall.component.css']
})
export class PreviewallComponent implements OnInit {
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
