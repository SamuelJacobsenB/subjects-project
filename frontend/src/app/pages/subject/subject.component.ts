import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { NavComponent } from '../../components/layout/nav/nav.component';
import { SubjectService } from './subject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [HeaderComponent, NavComponent],
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {
  router = inject(Router);
  subjectService = inject(SubjectService);

  subject: string = this.router.url.split('/')[1].toLocaleUpperCase();

  async ngOnInit(): Promise<void> {
    await this.subjectService.getTopics(this.subject);
  }
}
