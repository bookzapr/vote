import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailComponent } from './components/detail/detail.component';
import { ReportComponent } from './components/report/report.component';
import { VoteComponent } from './components/vote/vote.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageuserComponent } from './components/manageuser/manageuser.component';
import { ManageEventComponent } from './components/manage-event/manage-event.component';
import { AdminReportComponent } from './components/admin-report/admin-report.component';
import { ReportforAdminComponent } from './components/reportfor-admin/reportfor-admin.component';
import { AddeventComponent } from './components/addevent/addevent.component';
import { AddcandidatesComponent } from './components/addcandidates/addcandidates.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { AdminadduserComponent } from './components/adminadduser/adminadduser.component';
import { EventComponent } from './components/event/event.component';
import { AdminEditUesrComponent } from './components/admin-edit-uesr/admin-edit-uesr.component';
import { EditcandidatesComponent } from './components/editcandidates/editcandidates.component';
import { EditeventComponent } from './components/editevent/editevent.component';
import { UserresetpasswordComponent } from './components/userresetpassword/userresetpassword.component';


const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'login' ,component: LoginComponent},
  {path: 'logout' ,component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '',redirectTo: 'login', pathMatch: 'full' },
  {path: 'detail/:id', component: DetailComponent},
  {path: 'report/:id', component: ReportComponent},
  {path: 'vote/:id', component: VoteComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'manageuser', component: ManageuserComponent},
  {path: 'manageEvent', component: ManageEventComponent},
  {path: 'adminReport', component: AdminReportComponent},
  {path: 'ReportforAdmin/:id', component: ReportforAdminComponent},
  {path: 'addevent', component: AddeventComponent},
  {path: 'addcandidates/:id', component: AddcandidatesComponent},
  {path: 'resetpassword/:id', component: ResetpasswordComponent},
  {path: 'adduser', component: AdminadduserComponent},
  {path: 'event/:id', component: EventComponent},
  {path: 'edituser/:id', component: AdminEditUesrComponent},
  {path: 'editcandidates/:id', component: EditcandidatesComponent},
  {path: 'editevent/:id', component: EditeventComponent},
  {path: 'userresetpassword', component: UserresetpasswordComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
