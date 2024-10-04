import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { NavComponent } from '../../components/layout/nav/nav.component';
import { subjects } from '../../../constants/subjects.constant';
import { CardComponent } from '../../components/shared/card/card.component';
import { HomeService } from './home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NavComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  router = inject(Router);
  homeService = inject(HomeService);

  subjects = subjects;

  onClick(title: string): void {
    const subject: string = this.homeService.translateSubject(title);
    this.router.navigateByUrl(`/${subject.toLowerCase()}`);
  }
}
