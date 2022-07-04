import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WishService } from '../wish.service';
import { ActivatedRoute } from '@angular/router';
import { DataModel } from '../start/data.model';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css'],
})
export class WishComponent implements OnInit {
  id = '';
  url = '';
  urls = '';
  ck = ['Copy Link', 'Copy Link'];
  data: any = new DataModel('', '', '');

  constructor(public wish: WishService, private actiroute: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.actiroute.snapshot.params['id'];
    this.url = `http:localhost:4200/wish/${this.id}`;
    this.urls = `http:localhost:4200/wishes/${this.id}`;
    this.wish.getWish(this.id).subscribe((db) => {
      this.data = JSON.parse(JSON.stringify(db));
    });
  }
  change() {
    this.ck[0] = 'Copied';
  }
  change1() {
    this.ck[1] = 'Copied';
  }
  click(input: any) {
    input.select();
    document.execCommand('copy');
    console.log(input);
  }
}
