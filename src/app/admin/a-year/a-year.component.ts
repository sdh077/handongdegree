import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {ServerAddr} from '../../server';

@Component({
  selector: 'app-a-year',
  templateUrl: './a-year.component.html',
  styleUrls: ['./a-year.component.css']
})
export class AYearComponent implements OnInit {
  datas: any;
  input: any = {
    year: null,
    title: null
  };
  link: any;
    constructor(private http: HttpClient, private router: Router) {
      this.link = ServerAddr.getServerAddr();
      this.load();
    }

  ngOnInit() {
  }
  load() {
      console.log(this.link);
    this.http.get(`${this.link}/degree`)
    .subscribe(data => {
      this.datas = data;
    });
  }
  item(no) {
    this.router.navigate(['admin', 'item', no]);
  }
  edit(no) {
    this.router.navigate(['admin', 'year-edit', no]);
  }
  add() {
    this.http.post(`${this.link}/degree`, this.input)
    .subscribe(data => {
      this.load();
    });
  }

}
