import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private Authenticated = false; // สถานะการลอกอิน

  // ข้อมูลผู้ใช้ที่อาจจะต้องเก็บ (เช่น Token, ข้อมูลผู้ใช้)
  private user: any;

  constructor() {
    // สามารถทำการโหลดข้อมูลการลอกอินจากที่เก็บ (localStorage, cookies, etc.) ที่นี่
  }

  // เมท็อดเพื่อลองอิน
  login() {
    // ทำการลองอินและกำหนด isAuthenticated เป็น true
    this.Authenticated = true;
    // สามารถจัดเก็บข้อมูลผู้ใช้ (Token, ข้อมูลผู้ใช้) ที่ได้จากการลองอิน
  }

  // เมท็อดเพื่อลงชื่อออก
  logout() {
    // ทำการลงชื่อออกและกำหนด isAuthenticated เป็น false
    this.Authenticated = false;
    // ล้างข้อมูลผู้ใช้ (Token, ข้อมูลผู้ใช้) ที่เก็บไว้
  }

  // เมท็อดเพื่อตรวจสอบสถานะการลอกอิน
  isAuthenticated(): boolean {
    return this.Authenticated;
  }

  // เมท็อดเพื่อรับข้อมูลผู้ใช้ (หากมี)
  getUser(): any {
    return this.user;
  }
}
