import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { TopicComponent } from './pages/topic/topic.component';
import { SubtopicComponent } from './pages/subtopic/subtopic.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserAuthGuard } from './guards/user-auth.guard';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { UsersComponent } from './pages/admin/modify/users/users.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'subject/:subject',
    component: SubjectComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'subject/:subject/:id',
    component: TopicComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'subject/:subject/:id/:id',
    component: SubtopicComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path: 'admin/modify/users',
    component: UsersComponent,
    canActivate: [AdminAuthGuard],
  },
];
