import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  loginSuccess: boolean = false; // ตัวแปรสำหรับแสดงสถานะการลอกอิน

  constructor(private authService: AuthService) {} // นำเข้า AuthService

  // เมื่อผู้ใช้คลิกที่ปุ่ม "ลงชื่อออก"
  onLogoutClick() {
    this.authService.logout(); // เรียกใช้เมธอดการลงชื่อออกจาก AuthService
    this.loginSuccess = false; // อัปเดตสถานะการลอกอินเป็น false
  }
}
