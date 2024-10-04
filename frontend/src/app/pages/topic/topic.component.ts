import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { NavComponent } from '../../components/layout/nav/nav.component';
import { CardComponent } from '../../components/shared/card/card.component';
import { TopicService } from './topic.service';

@Component({
  selector: 'app-topic',
  standalone: true,
  imports: [HeaderComponent, NavComponent, CardComponent],
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
})
export class TopicComponent implements OnInit {
  router = inject(Router);
  topicService = inject(TopicService);

  topic: string = this.router.url.split('/')[2].toLocaleUpperCase();

  onClick(id: string): void {
    this.router.navigateByUrl(`${this.router.url}/${id}`);
  }

  async ngOnInit(): Promise<void> {
    await this.topicService.getSubtopics(this.topic);
  }
}
