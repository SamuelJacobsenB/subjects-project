import { Component, inject, OnInit, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faHome,
  faWarning,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { NavService } from './nav.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FontAwesomeModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  navService = inject(NavService);

  screenWidth!: number;

  onClick(): void {
    this.navService.toogleMenu();
  }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.screenWidth = window.innerWidth;

      if (this.screenWidth >= 900) {
        this.navService.setVisible();
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if (typeof window !== 'undefined') {
      this.screenWidth = window.innerWidth;

      if (this.screenWidth >= 900) {
        this.navService.setVisible();
      }
    }
  }

  faBars = faBars;
  faHome = faHome;
  faWarning = faWarning;
  faEnvelope = faEnvelope;
}
