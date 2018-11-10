import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-year-page',
  templateUrl: './year-page.component.html',
  styleUrls: ['./year-page.component.css']
})
export class YearPageComponent implements OnInit {
  datas:any=[];
  no:any;
  filterargs=null;
  constructor(private http:HttpClient,private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route
        .queryParams
        .subscribe(params => {
            this.no = params['no'];
            this.load(this.no);
        });
  }

  load(select){
    this.http.get(`http://localhost:3000/yearList?select=${select}`)
    .subscribe((data:any)=>{
      this.datas  = data;
    })
  }
  next(no){
    this.router.navigate(['detail'])
  }
  filter(no){
    if(no==0){
      this.filterargs=null;
    } else {
      this.filterargs = {kind:no}
    }
  }

}
