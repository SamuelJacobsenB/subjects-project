import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { UsersService } from './users.service';
import { HeaderComponent } from '../../../../components/layout/header/header.component';
import { AdminNavComponent } from '../../../../components/layout/admin-nav/admin-nav.component';
import { ButtonComponent } from '../../../../components/shared/button/button.component';
import { AdminCardComponent } from '../../../../components/shared/admin-card/admin-card.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    AdminNavComponent,
    ButtonComponent,
    AdminCardComponent,
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  usersService = inject(UsersService);

  async ngOnInit(): Promise<void> {
    await this.usersService.getUsers();
  }

  async onDelete(id: string): Promise<void> {
    // await this.usersService.deleteUser(id);
    console.log(id);
  }
}
