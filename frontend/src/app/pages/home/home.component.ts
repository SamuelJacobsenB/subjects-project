import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { NavComponent } from '../../components/layout/nav/nav.component';
import { subjects } from '../../../constants/subjects.constant';
import { CardComponent } from '../../components/shared/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NavComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  subjects = subjects;

  onClick(title: string): void {
    alert(`Aprendendo ${title}`);
  }
}
