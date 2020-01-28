import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {ServerAddr} from '../../server';

@Component({
  selector: 'app-a-item',
  templateUrl: './a-item.component.html',
  styleUrls: ['./a-item.component.css']
})
export class AItemComponent implements OnInit {
  id: number;
  private sub: any;
  datas: any;
  link: any;
  constructor(private route: ActivatedRoute, private http: HttpClient, public router: Router) {

  }

  ngOnInit() {
    this.link = ServerAddr.getServerAddr();

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['no'];
      this.load(this.id);
   });
  }
  load(degree_no) {
    this.http.get(`${this.link}/item/${degree_no}`)
    .subscribe(data => {
      this.datas = data;
      console.log(data);
    });
  }
  add(no) {
    this.router.navigate(['admin', 'item-add', no]);
  }
}
