import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-admin-edit-uesr',
  templateUrl: './admin-edit-uesr.component.html',
  styleUrls: ['./admin-edit-uesr.component.css']
})
export class AdminEditUesrComponent implements OnInit{
  edituserForm = new FormGroup({
    img: new FormControl('', [Validators.required]),
    Firstname: new FormControl('', [Validators.required]),
    Lastname: new FormControl('', [Validators.required]),
    age2: new FormControl('', [Validators.required, Validators.min(1)]),
    gender: new FormControl(''),
    username2: new FormControl('', [Validators.required]),
    password2: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]),
    phone2: new FormControl('', [Validators.required])
  })
  constructor( private http:HttpClient , private router:ActivatedRoute) {}
  id!: string ;
  image!:string;
  firstname!: string ;
  lastname!:string;
  age!: string ;
  gen!:string;
  username!: string ;
  password!:string;
  phone!:string;



  get username2() { return this.edituserForm.get('username2'); }

  get Firstname() { return this.edituserForm.get('Firstname'); }

  get Lastname() { return this.edituserForm.get('Lastname'); }

  get age2() { return this.edituserForm.get('age2'); }

  get password2() { return this.edituserForm.get('password2'); }

  get phone2() { return this.edituserForm.get('phone2'); }

  gender: string[] = ['Male', 'Female', 'Other']

  @Output() commuDataChanged = new EventEmitter<boolean>();
  CommuData: boolean = false;

  onClickToGoodPassword() {
    this.CommuData = !this.CommuData;
    this.commuDataChanged.emit(this.CommuData);
  }

  results: any=[];
  

  ngOnInit(): void {
    this.showUserBy()
  }
 

  editUser() 
  {
    let bodyData = {
      "image" : this.image,
      "firstname": this.firstname,
      "lastname": this.lastname,
      "age": this.age,
      "gen": this.gen,
      "username": this.username,
      "password": this.password,
      "phone": this.phone,
     };

    

    this.http.put("http://localhost:3000/user/editUser/"+this.router.snapshot.params['id'],bodyData,{responseType:'text'}).subscribe(data => {
      alert("Update User Success!");

     
      
    })
  }

  showUserBy() {
    this.http.get<any>('http://localhost:3000/user/getUserBy/'+this.router.snapshot.params['id']).subscribe(data => {
      this.results = data;
    })

    
  }




}
