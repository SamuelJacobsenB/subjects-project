import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { TopicComponent } from './pages/topic/topic.component';
import { UserAuthGuard } from './guards/user-auth.guard';
import { SubtopicComponent } from './pages/subtopic/subtopic.component';

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
    path: ':subject',
    component: SubjectComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: ':subject/:id',
    component: TopicComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: ':subject/:id/:id',
    component: SubtopicComponent,
    canActivate: [UserAuthGuard],
  },
];
