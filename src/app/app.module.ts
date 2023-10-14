import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailComponent } from './components/detail/detail.component';
import { ReportComponent } from './components/report/report.component';
import { VoteComponent } from './components/vote/vote.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageuserComponent } from './components/manageuser/manageuser.component';
import { ManageEventComponent } from './components/manage-event/manage-event.component';
import { AdminReportComponent } from './components/admin-report/admin-report.component';
import { ReportforAdminComponent } from './components/reportfor-admin/reportfor-admin.component';
import { AddeventComponent } from './components/addevent/addevent.component';
import { AddcandidatesComponent } from './components/addcandidates/addcandidates.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminadduserComponent } from './components/adminadduser/adminadduser.component';
import { AdminEditUesrComponent } from './components/admin-edit-uesr/admin-edit-uesr.component';
import { EventComponent } from './components/event/event.component';
import { EditcandidatesComponent } from './components/editcandidates/editcandidates.component';
import { EditeventComponent } from './components/editevent/editevent.component';
import { UserresetpasswordComponent } from './components/userresetpassword/userresetpassword.component';
import { GoodpasswordComponent } from './components/goodpassword/goodpassword.component';
import { LogoutComponent } from './components/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    DetailComponent,
    ReportComponent,
    VoteComponent,
    AdmindashboardComponent,
    DashboardComponent,
    ManageuserComponent,
    ManageEventComponent,
    AdminReportComponent,
    ReportforAdminComponent,
    AddeventComponent,
    AddcandidatesComponent,
    ResetpasswordComponent,
    AdminadduserComponent,
    AdminEditUesrComponent,
    EventComponent,
    EditcandidatesComponent,
    EditeventComponent,
    UserresetpasswordComponent,
    GoodpasswordComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
