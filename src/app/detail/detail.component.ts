
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';
import {ServerAddr} from '../server';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css'],
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
export class DetailComponent implements OnInit {
    view = 0;

    datas: any = [];
    designers: any = [];
    no: any;
    filterargs = null;
    hoveredIndex: any;
    category: any;
    active: any = 0;
    search = '';
    id: any;
    link: any;
    constructor(private http: HttpClient, 
        private router: Router, private route: ActivatedRoute, public location: Location) {
        this.link = ServerAddr.getServerAddr();
    }
    back(){
        this.location.back();
    }
    ngOnInit() {
      this.route.params.subscribe(params => {
            this.no = params['no'];
            this.id = params['id'];
            this.active = params['category'];
            this.load();
            this.load2(this.no);
        });
    }
    go(link) {
        this.router.navigateByUrl(`year?no=${this.no}&category=${link}`);
    }

    bg (no) {
        return `\'background-image\':\'url('${this.link}'/img/m-\' ' + no + ' \'.png)\'`;
    }
    load() {
        this.http.get(`${this.link}/item/detail/${this.id}`)
            .subscribe((data: any) => {
                this.datas  = data.item;
                this.designers  = data.designer;
                console.log(data);
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
        // this.http.get(`${this.link}/item/search/${this.search}`)
        //     .subscribe((data: any) => {
        //         console.log(data);
        //         this.datas  = data;
        //     });
        this.router.navigateByUrl(`year?no=${this.no}&category=${this.active}`)
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
