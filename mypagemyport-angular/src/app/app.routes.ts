import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'contact', component: ContactComponent },
];
