import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SubtopicService } from './subtopic.service';
import { HeaderComponent } from './../../components/layout/header/header.component';
import { NavComponent } from './../../components/layout/nav/nav.component';
import { BackComponent } from '../../components/shared/back/back.component';

@Component({
  selector: 'app-subtopic',
  standalone: true,
  imports: [HeaderComponent, NavComponent, BackComponent],
  templateUrl: './subtopic.component.html',
  styleUrls: ['./subtopic.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SubtopicComponent implements OnInit {
  router = inject(Router);
  subtopicService = inject(SubtopicService);

  urlParts: string[] = this.router.url.split('/');
  subtopic: string = this.urlParts[3];
  url: string = `/${this.urlParts[1]}/${this.urlParts[2]}`;

  async ngOnInit(): Promise<void> {
    this.subtopicService.getSubtopic(this.subtopic);
  }
}
