import { Component, HostListener, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faHome,
  faWarning,
  faEnvelope,
  faUser,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import { AdminNavService } from './admin-nav.service';

@Component({
  selector: 'app-admin-nav',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FontAwesomeModule],
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.scss'],
})
export class AdminNavComponent implements OnInit {
  adminNavService = inject(AdminNavService);

  screenWidth!: number;

  onClick(): void {
    this.adminNavService.toogleMenu();
  }

  async ngOnInit() {
    if (typeof window !== 'undefined') {
      this.screenWidth = window.innerWidth;

      if (this.screenWidth >= 900) {
        this.adminNavService.setVisible();
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if (typeof window !== 'undefined') {
      this.screenWidth = window.innerWidth;

      if (this.screenWidth >= 900) {
        this.adminNavService.setVisible();
      }
    }
  }

  faBars = faBars;
  faHome = faHome;
  faWarning = faWarning;
  faEnvelope = faEnvelope;
  faUser = faUser;
  faLock = faLock;
}
