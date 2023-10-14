import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit{

  constructor( private http:HttpClient , private router:ActivatedRoute) {}

  results: any=[];

  results2: any=[];
  test: any=[];
  i :any;
  


  ngOnInit(): void {
    this.showEventBy();
    this.refreshData();
  }
  refreshData(){

    this.http.get<any>('http://localhost:3000/editevent/getOnlyEvent/'+this.router.snapshot.params['id']).subscribe(data => {
      this.test = data;
      for ( this.i =0 ; this.i <this.test.length ;this.i++) {
        this.results[this.i] = this.test[this.i].EventACandidate;
      }
      this.test = this.results;
    })
  }

  showEventBy() {
    this.http.get<any>('http://localhost:3000/manageEvent/getEventBy2/'+this.router.snapshot.params['id']).subscribe(data2 => {
      this.results2 = data2[0];
    })

  }

  deleteCandidate(id:any) {
    this.http.delete<any>('http://localhost:3000/candidate/deleteCandidate/'+id).subscribe(data => {
      this.deleteCandidateJEvent(data)
    })
  }

  deleteCandidateJEvent(data:string) {
    this.http.delete('http://localhost:3000/editevent/deleteEventAcandidate/'+data).subscribe(data => {
      alert("ลบข้อมูลเรียบร้อย");
    })

    window.location.reload();
    
  }

  


}
