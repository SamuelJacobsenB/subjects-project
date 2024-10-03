import { Component, inject } from '@angular/core';
import { FormareaComponent } from '../../components/shared/formarea/formarea.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../components/shared/button/button.component';
import { LoginService } from './login.service';
import { MessageService } from '../../components/shared/message/message.service';
import { helpers } from '../../../helpers/helpers';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormareaComponent,
    ButtonComponent,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginService = inject(LoginService);
  messageService = inject(MessageService);

  form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.required,
    ]),
  });

  async onSubmit(evt: Event) {
    evt.preventDefault();

    const email: string | null = this.form.controls.email.value;
    const password: string | null = this.form.controls.password.value;

    if (email && password) {
      await this.loginService.login(email, password);
    } else {
      this.messageService.showMessage(helpers.messages.UNFIELD_FIELDS, 'error');
    }
  }

  faEnvelope = faEnvelope;
  faKey = faKey;
}
