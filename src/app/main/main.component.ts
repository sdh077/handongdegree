import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { YearPageComponent } from '../year-page/year-page.component';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  view=1;
  no:any;
  datas:any=[];

  constructor(private http:HttpClient,private router:Router,private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.load();
    this.route
        .queryParams
        .subscribe(params => {
            this.no = params['no'];
        });

  }
  load(){
    this.http.get('http://localhost:3000/list')
    .subscribe((data:any)=>{
      this.datas = data;
    })
  }
  next(select){
    this.view=0;
    this.router.navigate([`/year`],{queryParams: {no: select}});
  }
}
