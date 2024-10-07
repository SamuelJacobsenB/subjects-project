import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserService } from './user.service';
import { MessageService } from '../../../../components/shared/message/message.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { FormareaComponent } from './../../../../components/shared/formarea/formarea.component';
import { ButtonComponent } from '../../../../components/shared/button/button.component';
import { BackComponent } from '../../../../components/shared/back/back.component';
import { helpers } from '../../../../../helpers/helpers';
import { User } from '../../../../../types/user.type';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FontAwesomeModule,
    FormareaComponent,
    ButtonComponent,
    BackComponent,
  ],

  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  router = inject(Router);
  userService = inject(UserService);
  messageService = inject(MessageService);
  user!: User;

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
      // await this.userService.update();
    } else {
      this.messageService.showMessage(helpers.messages.UNFIELD_FIELDS, 'error');
    }
  }

  async ngOnInit(): Promise<void> {
    await this.userService.get();

    this.form.controls.name.setValue(this.userService.user().name);
    this.form.controls.email.setValue(this.userService.user().email);
    this.form.controls.password.setValue(this.userService.user().password);
  }

  faUser = faUser;
  faEnvelope = faEnvelope;
  faKey = faKey;
}
