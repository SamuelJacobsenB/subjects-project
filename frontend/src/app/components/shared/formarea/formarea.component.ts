import { Component, input } from '@angular/core';
import { FormControl } from '@angular/forms';

enum Type {
  text = 'text',
  email = 'email',
  password = 'password',
  number = 'number',
}

@Component({
  selector: 'app-form-area',
  standalone: true,
  imports: [],
  templateUrl: './formarea.component.html',
  styleUrl: './formarea.component.scss',
})
export class FormareaComponent {
  label = input.required<string>();
  type = input.required<Type>();
  name = input.required<string>();
  placeholder = input.required<string>();
}
