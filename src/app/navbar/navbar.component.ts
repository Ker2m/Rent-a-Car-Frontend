import { Component } from '@angular/core';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  //EĞER KULLANICI OTURUM AÇTIYSA LOGIN YERİNE PROFILE GELSİN
  constructor(private authService: AuthService) {}

  public get isLoggedIn(): boolean {
    return this.authService.IsLoggedIn;
  }

  //MENU

  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
