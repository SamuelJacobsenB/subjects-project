import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

type Type = 'text' | 'password' | 'email' | 'number';

@Component({
  selector: 'app-form-area',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formarea.component.html',
  styleUrl: './formarea.component.scss',
})
export class FormareaComponent {
  label = input.required<string>();
  type = input.required<Type>();
  name = input.required<string>();
  placeholder = input.required<string>();
  svg = input.required<string>();
}
