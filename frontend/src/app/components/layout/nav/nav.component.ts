import { Component, inject } from '@angular/core';
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
export class NavComponent {
  navService = inject(NavService);

  onClick(): void {
    this.navService.toogleMenu();
  }

  faBars = faBars;
  faHome = faHome;
  faWarning = faWarning;
  faEnvelope = faEnvelope;
}
