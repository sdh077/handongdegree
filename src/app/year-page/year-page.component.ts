import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';
import {ServerAddr} from '../server';

@Component({
  selector: 'app-year-page',
  templateUrl: './year-page.component.html',
  styleUrls: ['./year-page.component.css'],
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
export class YearPageComponent implements OnInit {
  view = 0;
  datas: any = [];
  no: any;
  filterargs = null;
  hoveredIndex: any;
  category: any = [];
  active: any = 0;
  search = '';
  link: any;
  txt: any;
  sideView = 0;
  year = 0;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, public location: Location) {
      this.link = ServerAddr.getServerAddr();
  }
  back(){
    this.router.navigateByUrl(`/`);
  }
  ngOnInit() {
    this.route
        .queryParams
        .subscribe(params => {
            this.no = params['no'];
            this.txt = params['search'];
            this.loadYear();

            if (this.txt) {
                this.searchItem(this.txt);
            } else if (params['category']) {
                this.load2(this.no, params['category']);
            } else {
                this.load2(this.no, -1);
            }
        });
  }

  go(ca) {
      this.router.navigateByUrl(`year?no=${this.no}&category=${ca}`);
  }

  bg (no) {
    return `\'background-image\':\'url('${this.link}'/img/m-\' ' + no + ' \'.png)\'`;
  }
  sideBarView(onOff) {
    this.sideView = onOff;
  }
  loadYear() {
      this.http.get(`${this.link}/degree/one/${this.no}`)
          .subscribe((data: any) => {
              console.log(data);
              this.year  = data[0].year;
          });
  }
  load(select) {
    this.http.get(`${this.link}/item/main/${select}`)
    .subscribe((data: any) => {
      this.datas  = data;
    });
  }
  load2(select, category) {
      this.http.get(`${this.link}/item/category/${select}`)
        .subscribe((data: any) => {
            this.category  = data;
            if ( category == -1) {
                this.load(this.category[0].item_category_no);
                this.active = this.category[0].item_category_no;
            } else {
                this.load(category);
                this.active = category;
            }
        });
  }
  searchItem(search) {
      this.http.get(`${this.link}/item/search/${search}/${this.no}`)
          .subscribe((data: any) => {
              this.datas  = data;
          });
  }
  next(no) {
    // this.view = no;
    this.datas = [];
    this.router.navigate(['year', 'detail', this.no, no, this.active]);
  }
  filter(no) {
    if (no === 0) {
      this.filterargs = null;
    } else {
      this.filterargs = {kind: no};
    }
  }

}
