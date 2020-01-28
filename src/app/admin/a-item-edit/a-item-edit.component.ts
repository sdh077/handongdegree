import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FileUploader } from 'ng2-file-upload';
import {ServerAddr} from '../../server';

@Component({
  selector: 'app-a-item-edit',
  templateUrl: './a-item-edit.component.html',
  styleUrls: ['./a-item-edit.component.css']
})
export class AItemEditComponent implements OnInit {
  id: number;
  private sub: any;
  data: any;
  public uploader_thumb: FileUploader;
  public uploader_main: FileUploader;

  designers: any;
  link: any;
  designer_add: any = {
      name: '',
      name_en: '',
      tel: '',
      mail: '',
      school: '시각디자인 / 제품디자인',
      item_no: 0

  };

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {
    this.link = ServerAddr.getServerAddr();

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['no'];
      this.uploader_thumb = new FileUploader({url: `/imgload/t-${this.id}`});
      this.uploader_main = new FileUploader({url: `/imgload/m-${this.id}`});
      this.load(this.id);
      this.designer_add.item_no = this.id;
   });
  }
  load(no) {
    this.http.get(`${this.link}/item/detail/${no}`)
    .subscribe((data: any) => {
      console.log(data)
      this.data = data.item;
      this.designers = data.designer;

    });
  }
    add() {
      this.http.post(`${this.link}/designer`, {data: this.designer_add})
        .subscribe((data: any) => {
            this.load(this.id);
            this.designer_add = {
                name: '',
                name_en: '',
                tel: '',
                mail: '',
                school: '시각디자인 / 제품디자인',
                item_no: this.id

            };
        });
    }
    edit() {
      this.http.put(`${this.link}/item/${this.id}`, {data: this.data})
      .subscribe((data: any) => {
          this.load(this.id);
      });
    }
}
