

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';
import {ServerAddr} from '../server';

@Component({
    selector: 'app-year-list',
    templateUrl: './year-list.component.html',
    styleUrls: ['./year-list.component.css'],
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
export class YearListComponent implements OnInit {
    view = 0;
    datas: any = [];
    no: any;
    filterargs = null;
    hoveredIndex: any;
    category: any;
    active: any = 0;
    search = '';
    link: any;
    constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, public location: Location) {
        this.view = null;
        this.link = ServerAddr.getServerAddr();

    }

    ngOnInit() {
        this.route
            .queryParams
            .subscribe(params => {
                this.no = params['no'];
                this.load(this.no);
                this.load2(this.no);
            });
    }

    go() {
        this.router.navigate([`year?no=${this.no}`]);
    }

    bg (no) {
        return `\'background-image\':\'url('${this.link}'/img/m-\' ' + no + ' \'.png)\'`;
    }
    load(select) {
        this.http.get(`${this.link}/item/main/${select}`)
            .subscribe((data: any) => {
                console.log(data);
                this.datas  = data;
            });
    }
    load2(select) {
        this.http.get(`${this.link}/item/category/${select}`)
            .subscribe((data: any) => {
                console.log(data);
                this.category  = data;
            });
    }
    searchItem() {
        this.http.get(`${this.link}/item/search/${this.search}`)
            .subscribe((data: any) => {
                console.log(data);
                this.datas  = data;
            });
    }
    next(no) {
        // this.view = no;
        this.datas = [];
        this.router.navigate(['year', 'detail', 1]);
    }
    filter(no) {
        if (no === 0) {
            this.filterargs = null;
        } else {
            this.filterargs = {kind: no};
        }
    }

}
