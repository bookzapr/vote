import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  adduserForm = new FormGroup({
    img: new FormControl('', [Validators.required]),
    Firstname: new FormControl('', [Validators.required]),
    Lastname: new FormControl('', [Validators.required]),
    age2: new FormControl('', [Validators.required, Validators.min(1)]),
    gender: new FormControl(''),
    username2: new FormControl('', [Validators.required]),
    password2: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]),
    phone2: new FormControl('', [Validators.required])
  })
  constructor( private http:HttpClient) {}
  id: string ="";
  firstname: string ="";
  lastname:string="";
  age: string ="";
  gen:string="";
  username: string ="";
  password:string="";
  phone:string="";
  img:string="";

  previewLoaded: boolean = false;

  ngOnInit(): void {
    
  }
  get username2() { return this.adduserForm.get('username2'); }

  get Firstname() { return this.adduserForm.get('Firstname'); }

  get Lastname() { return this.adduserForm.get('Lastname'); }

  get age2() { return this.adduserForm.get('age2'); }

  get password2() { return this.adduserForm.get('password2'); }

  get phone2() { return this.adduserForm.get('phone2'); }


  gender: string[] = ['Male', 'Female', 'Other']


  @Output() commuDataChanged = new EventEmitter<boolean>();
  CommuData: boolean = false;

  onClickToGoodPassword() {
    this.CommuData = !this.CommuData;
    this.commuDataChanged.emit(this.CommuData);
  }

  addUser() 
  {
    let bodyData = {
     "id" : this.id,
     "firstname": this.firstname,
     "lastname": this.lastname,
     "age": this.age,
     "gen": this.gen,
     "username": this.username,
     "password": this.password,
     "phone": this.phone,
     "img": this.img,
    };

    console.log(bodyData)

    this.http.post("http://localhost:3000/user/addUser",bodyData,{responseType:'text'}).subscribe(data => {
      alert("Create Event Success!");
    })

  }

  onChangeImg(e: any) {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      var pattern = /image-*/;
      const reader = new FileReader();

      if (!file.type.match(pattern)) {
        alert('invalid format')
        this.adduserForm.reset();
      }
      else {
        reader.readAsDataURL(file);

        reader.onload = () => {
          if (typeof reader.result === 'string') {
            this.previewLoaded = true;
            this.adduserForm.patchValue({
              img: reader.result
            });
          } else {
            console.error('Reader result is not a string:', reader.result);
          }
        }
      }
    }
  }

  resetForm() {
    this.adduserForm.reset();
    this.previewLoaded = false;
  }
}

