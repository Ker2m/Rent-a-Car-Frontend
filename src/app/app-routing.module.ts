import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { NewCarComponent } from './admin/car/new-car/new-car.component';
import { EditCarComponent } from './admin/car/edit-car/edit-car.component';
import { DeleteCarComponent } from './admin/car/delete-car/delete-car.component';
import { NewUserComponent } from './admin/user/new-user/new-user.component';
import { EditUserComponent } from './admin/user/edit-user/edit-user.component';
import { DeleteUserComponent } from './admin/user/delete-user/delete-user.component';
import { ReservationsComponent } from './admin/reservations/reservations.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { CommentsComponent } from './admin/comments/comments.component';
import { ContactsComponent } from './admin/contacts/contacts.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent, },
  { path: 'contact', component: ContactComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SigninComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin/home', component: AdminHomeComponent },
  { path: 'admin/new-user', component: NewUserComponent },
  { path: 'admin/edit-user', component: EditUserComponent },
  { path: 'admin/delete-user', component: DeleteUserComponent },
  { path: 'admin/new-car', component: NewCarComponent },
  { path: 'admin/edit-car', component: EditCarComponent },
  { path: 'admin/delete-car', component: DeleteCarComponent },
  { path: 'admin/reservations', component: ReservationsComponent },
  { path: 'admin/comments', component: CommentsComponent },
  { path: 'admin/contacts', component: ContactsComponent },
  { path: 'admin/profile', component: AdminProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
