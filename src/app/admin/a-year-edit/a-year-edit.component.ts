import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import {ServerAddr} from '../../server';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-a-year-edit',
  templateUrl: './a-year-edit.component.html',
  styleUrls: ['./a-year-edit.component.css']
})
export class AYearEditComponent implements OnInit {
  id: number;
  private sub: any;
  data: any;
  category: any;
  body: any;
  link: any;
  public uploader_title: FileUploader;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.link = ServerAddr.getServerAddr();

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['no'];
      this.body = {
        content: '',
        content_en: '',
        ord: null,
        degree_no: this.id,
      };
      this.uploader_title = new FileUploader({url: `/imgload/${this.id}`});
      console.log(this.uploader_title);
      this.load(this.id);
   });
  }
  load(degree_no) {
    this.http.get(`${this.link}/degree/${degree_no}`)
    .subscribe((data: any) => {
      this.data = data;
      this.category = data.category;
      console.log(data);

    });
  }
  update() {
    this.http.put(`${this.link}/degree`, this.data)
    .subscribe(data => {
      this.load(this.id);
      Swal('수정되었습니다');
    },
    err => {
      Swal('실패했습니다');

    });
  }
  add() {
    console.log(this.body);
    this.http.post(`${this.link}/degree/category`, this.body)
    .subscribe(data => {
      console.log(data);
      this.load(this.id);
      Swal('추가되었습니다');
    },
    err => {
      Swal('실패했습니다');

    });
  }
  updateCategory(item) {
    item.degree_no = this.id;
    this.http.put(`${this.link}/degree/category`, item)
    .subscribe(data => {
      this.load(this.id);
      Swal('수정 되었습니다');
    },
    err => {
      console.log(err);
      Swal('실패했습니다');

    });
  }

}

