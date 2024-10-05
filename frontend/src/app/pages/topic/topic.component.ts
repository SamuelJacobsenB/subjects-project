import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { NavComponent } from '../../components/layout/nav/nav.component';
import { CardComponent } from '../../components/shared/card/card.component';
import { TopicService } from './topic.service';
import { BackComponent } from '../../components/shared/back/back.component';

@Component({
  selector: 'app-topic',
  standalone: true,
  imports: [HeaderComponent, NavComponent, CardComponent, BackComponent],
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
})
export class TopicComponent implements OnInit {
  router = inject(Router);
  topicService = inject(TopicService);

  urlParts: string[] = this.router.url.split('/');
  topic: string = this.urlParts[3].toUpperCase();
  url: string = `/${this.urlParts[1]}/${this.urlParts[2]}`;

  onClick(id: string): void {
    this.router.navigateByUrl(`${this.router.url}/${id}`);
  }

  async ngOnInit(): Promise<void> {
    await this.topicService.getSubtopics(this.topic);
  }
}
