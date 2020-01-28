import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { YearPageComponent } from '../year-page/year-page.component';
import { trigger, style, animate, transition } from '@angular/animations';
import {ServerAddr} from '../server';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        // transition(':leave', [
        //   style({transform: 'translateX(0)', opacity: 1}),
        //   animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        // ])
      ]
    )
  ],
})
export class MainComponent implements OnInit {
  view = 1;
  no: any;
  datas: any = [];
  choose: any = {
    degree_no: 1
  };
  search = '';
    modalView = 0;
  link: any;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.link = ServerAddr.getServerAddr();
   }

  ngOnInit() {
    this.load();
    this.route
        .queryParams
        .subscribe(params => {
            this.no = params['no'];
        });

  }
  load() {
    this.http.get(`${ServerAddr.getServerAddr()}/degree`)
    .subscribe((data: any) => {
      this.datas = data;
    });
  }
  choice(data) {
    this.choose = data;
  }
  next(select) {
    this.router.navigate([`/year`], {queryParams: {no: select}});
  }
}
