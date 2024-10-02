import { Component } from '@angular/core';
import { FormareaComponent } from '../../components/shared/formarea/formarea.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonComponent } from '../../components/shared/button/button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormareaComponent, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.required,
    ]),
  });
}
