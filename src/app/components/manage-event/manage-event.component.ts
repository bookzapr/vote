import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manage-event',
  templateUrl: './manage-event.component.html',
  styleUrls: ['./manage-event.component.css']
})

export class ManageEventComponent implements OnInit{

  constructor( private http:HttpClient) {}

  results: any=[];
  


  ngOnInit(): void {
    this.refreshData();
  }

  refreshData(){
    this.http.get<any>('http://localhost:3000/manageEvent/testGet').subscribe(data => {
      this.results = data;
    })

  }

  deleteEvent(id:any) {
    this.http.delete('http://localhost:3000/manageEvent/deleteEvent/'+id).subscribe(data => {
      alert("ลบข้อมูลเรียบร้อย");
      this.refreshData();
    })
  }

  

  


  
  

}
