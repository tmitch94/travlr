import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterLink],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}
  ngOnInit() {}
  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
  public onLogout(): void {
    return this.authenticationService.logout();
  }
}
