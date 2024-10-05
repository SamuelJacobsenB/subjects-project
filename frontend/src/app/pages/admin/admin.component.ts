import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { subjects } from '../../../constants/subjects.constant';
import { AdminService } from './admin.service';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { AdminNavComponent } from '../../components/layout/admin-nav/admin-nav.component';
import { CardComponent } from '../../components/shared/card/card.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [HeaderComponent, AdminNavComponent, CardComponent],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  router = inject(Router);
  adminService = inject(AdminService);

  subjects = subjects;

  onClick(title: string): void {
    const subject: string = this.adminService.translateSubject(title);
    this.router.navigateByUrl(`/subject/${subject.toLowerCase()}`);
  }
}
