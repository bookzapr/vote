import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-addcandidates',
  templateUrl: './addcandidates.component.html',
  styleUrls: ['./addcandidates.component.css']
})
export class AddcandidatesComponent implements OnInit {
  addcandidatesForm = new FormGroup({
    img: new FormControl('', [Validators.required]),
    Firstname: new FormControl('', [Validators.required]),
    Lastname: new FormControl('', [Validators.required]),
    age2: new FormControl('', [Validators.required, Validators.min(1)]),
    gender: new FormControl(''),
    intro: new FormControl('', [Validators.required])
  })
  constructor( private http:HttpClient , private router:ActivatedRoute) {}

  ngOnInit(): void {
    
  }
  get img() { return this.addcandidatesForm.get('img'); }

  get Firstname() { return this.addcandidatesForm.get('Firstname'); }

  get Lastname() { return this.addcandidatesForm.get('Lastname'); }

  get age2() { return this.addcandidatesForm.get('age2'); }

  get intro() { return this.addcandidatesForm.get('intro'); }

  gender: string[] = ['Male', 'Female', 'Other']

  id: string ="";
  image:string="";
  firstname: string ="";
  lastname:string="";
  age!: number;
  gen:string="";
  describe: string ="";



  
  addCandidate() 
  {
    let bodyData = {
     "id" : this.id,
     "image" : this.image,
     "firstname": this.firstname,
     "lastname": this.lastname,
     "age" : this.age,
     "gen": this.gen,
     "describe": this.describe,
    
    };



    this.http.post<any>("http://localhost:3000/candidate/addCandidate",bodyData).subscribe(data => {
      
      this.addEventJCandidate(data)
    })



    

    
    
  }

  addEventJCandidate(data:string) {

    let bodyData2 = {
      "candidate_id" : data,
      "event_id": this.router.snapshot.params['id'],
     };

    this.http.post("http://localhost:3000/editevent/addEventAcandidate",bodyData2,{responseType:'text'}).subscribe(data => {
      alert("Create Event Success!");

    })

  }




}
function data(value: string): void {
  throw new Error('Function not implemented.');
}

