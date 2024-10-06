import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageComponent } from './components/shared/message/message.component';
import { ConfirmCardComponent } from './components/shared/confirm-card/confirm-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MessageComponent, ConfirmCardComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
