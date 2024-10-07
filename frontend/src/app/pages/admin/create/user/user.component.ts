import { Component, inject } from '@angular/core';

import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../../components/shared/button/button.component';
import { FormareaComponent } from '../../../../components/shared/formarea/formarea.component';
import { MessageService } from '../../../../components/shared/message/message.service';
import { UserService } from './user.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { helpers } from '../../../../../helpers/helpers';
import { BackComponent } from '../../../../components/shared/back/back.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    FormareaComponent,
    ButtonComponent,
    ReactiveFormsModule,
    FontAwesomeModule,
    BackComponent,
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  userService = inject(UserService);
  messageService = inject(MessageService);

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.required,
    ]),
  });

  async onSubmit(evt: Event) {
    evt.preventDefault();

    const name: string | null = this.form.controls.name.value;
    const email: string | null = this.form.controls.email.value;
    const password: string | null = this.form.controls.password.value;

    if (name && email && password) {
      await this.userService.create(name, email, password);
    } else {
      this.messageService.showMessage(helpers.messages.UNFIELD_FIELDS, 'error');
    }
  }

  faUser = faUser;
  faEnvelope = faEnvelope;
  faKey = faKey;
}
