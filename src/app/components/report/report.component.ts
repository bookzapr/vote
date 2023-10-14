import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit{

  candidates: any = [
    {"id":"1","c_id":"1001","c_img":"https://th-images.hellomagazine.com/wp-content/uploads/2021/12/21192602/b134-500x500.jpg",
    "c_name":"นาย A","c_intro":"สวัสดีครับ", "score":"7"},
    {"id":"2","c_id":"1002","c_img":"https://storage-wp.thaipost.net/2023/03/1031814.jpg",
    "c_name":"นาย B","c_intro":"สวัสดีครับ", "score":"4"},
    {"id":"3","c_id":"1003","c_img":"https://scontent.fnak3-1.fna.fbcdn.net/v/t1.6435-9/88180757_2795546980523009_8238364980219478016_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG6mTrx2e4Lbs7xOWHVtqDqmilWB8paxSSaKVYHylrFJGjVrh_vsacrDvG2IjT5QnqU1rySrL6nbZ0JcC14KGXp&_nc_ohc=NtN3f9xo6EMAX9sA-tR&_nc_ht=scontent.fnak3-1.fna&_nc_e2o=f&oh=00_AfAwBNkj6M0sHY8HuZZZSDMtq5p3X9SdbtgZT8UAzc1-nQ&oe=654075EF",
    "c_name":"นาย C","c_intro":"ไม่รู้ ไม่รู้", "score":"2"},
    {"id":"4","c_id":"1004","c_img":"https://image.tnews.co.th/newscenter/images/userfiles/images/51431060_2138638203112949_7347244950897033216_n.jpg",
    "c_name":"นาย D","c_intro":"ปั๊ดโธ่", "score":"3"}
  ]

  results: any=[];
  // results2: any=[];
  score: any=[];



  test: any=[];
  i :any;

  
  constructor( private http:HttpClient , private router:ActivatedRoute) {}

  ngOnInit(): void {
    // this.showEventBy();
    this.refreshData();
    this.refreshData2();
    
  }

  refreshData(){

    this.http.get<any>('http://localhost:3000/userJcandidate/countScore/'+this.router.snapshot.params['id']).subscribe(data => {
      this.test = data;
      console.log(this.test[0].resultnew[0][0].id)
    })
  }

  // showEventBy() {
  //   this.http.get<any>('http://localhost:3000/manageEvent/getEventBy2/'+this.router.snapshot.params['id']).subscribe(data2 => {
  //     this.results2 = data2[0];
  //   })

  // }

  refreshData2(){

    this.http.get<any>('http://localhost:3000/userJcandidate/countScore/'+this.router.snapshot.params['id']).subscribe(data => {
      
    this.score = data;

  })

}


}

