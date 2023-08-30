import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { NewCarComponent } from './admin/car/new-car/new-car.component';
import { EditCarComponent } from './admin/car/edit-car/edit-car.component';
import { DeleteCarComponent } from './admin/car/delete-car/delete-car.component';
import { NewUserComponent } from './admin/user/new-user/new-user.component';
import { EditUserComponent } from './admin/user/edit-user/edit-user.component';
import { DeleteUserComponent } from './admin/user/delete-user/delete-user.component';
import { ReservationsComponent } from './admin/reservations/reservations.component';
import { MenubarModule } from 'primeng/menubar';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { BarComponent } from './admin/bar/bar.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { CommentsComponent } from './admin/comments/comments.component';
import { ContactsComponent } from './admin/contacts/contacts.component';
import { DropdownModule } from 'primeng/dropdown';
import { CommentDetailComponent } from './admin/comments/comment-detail/comment-detail.component';
import { ReservationDetailComponent } from './admin/reservations/reservation-detail/reservation-detail.component';
import { MessagesModule } from 'primeng/messages';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CardModule } from 'primeng/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    PricingComponent,
    ContactComponent,
    LoginComponent,
    SigninComponent,
    ProfileComponent,
    NewCarComponent,
    EditCarComponent,
    DeleteCarComponent,
    NewUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    ReservationsComponent,
    AdminHomeComponent,
    BarComponent,
    AdminProfileComponent,
    CommentsComponent,
    ContactsComponent,
    CommentDetailComponent,
    ReservationDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    CalendarModule,
    HttpClientModule,
    MenubarModule,
    InputTextModule,
    PasswordModule,
    InputMaskModule,
    InputNumberModule,
    DropdownModule,
    MessagesModule,
    CascadeSelectModule, 
    CardModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    NgFor,
    MatSelectModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
