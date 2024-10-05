import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { NavComponent } from '../../components/layout/nav/nav.component';
import { SubjectService } from './subject.service';
import { CardComponent } from '../../components/shared/card/card.component';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [HeaderComponent, NavComponent, CardComponent],
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {
  router = inject(Router);
  subjectService = inject(SubjectService);

  subject: string = this.router.url.split('/')[2].toLocaleUpperCase();

  onClick(id: string): void {
    this.router.navigateByUrl(`/subject/${this.subject.toLowerCase()}/${id}`);
  }

  async ngOnInit(): Promise<void> {
    await this.subjectService.getTopics(this.subject);
  }
}
