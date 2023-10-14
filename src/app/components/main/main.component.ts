import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router'
import { Emitter } from 'src/app/emitters/emitter';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  events: any = [
    {"id":"1","e_title":"เลือกประธาน นร.","e_status":"open"},
    {"id":"2","e_title":"คัดเลือกหัวหน้าห้อง","e_status":"close"},
    {"id":"3","e_title":"คัดเลือก....","e_status":"close"},
    {"id":"4","e_title":"คัดเลือก....","e_status":"close"},
  ]

  results: any=[];

  results2: any=[];



  constructor( private http:HttpClient , private router:ActivatedRoute) {}

  ngOnInit(): void {

    this.showEventBy()
    this.refreshData()
    
    this.http.get('http://localhost:3000/login', { withCredentials: true}) 
    .subscribe(
      (res:any) => {
        Emitter.authEmitter.emit(true);
      },
      (err) => {
        Emitter.authEmitter.emit(false);
      }
    )
    
  }

  showEventBy() {
    this.http.get<any>('http://localhost:3000/main/testGet/').subscribe(data2 => {
      this.results = data2;
    })

  }

  refreshData(){
    this.http.get<any>('http://localhost:3000/manageEvent/testGet').subscribe(data => {
      this.results2 = data;
      console.log(this.results2)
    })

  }

}
