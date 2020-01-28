import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';
import {Location} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {ServerAddr} from '../../server';

@Component({
  selector: 'app-a-item-add',
  templateUrl: './a-item-add.component.html',
  styleUrls: ['./a-item-add.component.css']
})


export class AItemAddComponent implements OnInit {

  public uploader1: FileUploader = new FileUploader({url: '/imgload/a.png'});
  view = 1;
  degrees: any = null;
  selectedValue: any;
  body = {
    year: 0,
    title: '',
    title_en: '',
    content: '',
    content_en: '',
    category_no: 0,
  };
  categorys: any;
  id = 0;
  link: any;

    constructor(private http: HttpClient, private _location: Location, private route: ActivatedRoute) {
    }

  ngOnInit() {
      this.link = ServerAddr.getServerAddr();

      this.route.params.subscribe(params => {
          this.id = +params['no'];
          this.body.year = this.id;
          this.load();

      });
  }
  uploadImgServer(no) {
    const body = {
      imgUrl: `/img/a.png`
    };
    this.http.post(`/timeline/img`, body).subscribe(() => {
    });
  }
  load() {
    this.http.get(`${this.link}/degree/one/${this.id}`)
    .subscribe(data => {
      this.degrees = data[0];
        this.http.get(`${this.link}/item/category/${this.id}`)
            .subscribe((datas: any) => {
                this.categorys = datas;
            });
    });
  }
  add() {
    console.log(this.body)
    this.http.post(`${this.link}/item`, {data: this.body})
        .subscribe(data => {
            this._location.back();
        });
  }

}
