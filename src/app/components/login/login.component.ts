import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username?: string;
  password?: string;

  constructor(private accountService: AccountService, private router: Router
   ,private authService: AuthService)
   {}

  loginSuccess: boolean = false; // เริ่มต้นเป็น false
  loginSuccessMessage: string = ''; // เริ่มต้นเป็นข้อความว่าง
  loginErrorMessage: string = ''; // เริ่มต้นเป็นข้อความว่าง

  onSubmit() {
    this.accountService.login(this.username + '', this.password + '').subscribe(
      (response) => {
        if (response.success) {
          // การลองอินสำเร็จ
          this.authService.login(); // อัปเดตสถานะการลองอินใน AuthService
          this.loginSuccess = true;
          this.loginSuccessMessage = 'เข้าสู่ระบบสำเร็จ';
          this.router.navigate(['/main']);
          alert("login Success!");
          
        } else {
          // ล็อกอินไม่สำเร็จ
          this.loginSuccess = false;
          this.loginErrorMessage = 'เข้าสู่ระบบไม่สำเร็จ: ' + response.message;
          alert("login Failed!"); // เพิ่มเตือนเพิ่มเติมหรือไม่ก็ได้
        }
      },
      (error) => {
        // กรณีเกิดข้อผิดพลาดในการเรียก API
        console.error('เกิดข้อผิดพลาดในการเรียก API: ' + error.message);
        this.loginErrorMessage = 'เกิดข้อผิดพลาดในการเรียก API: ' + error.message;
      }
    );
  }
}
