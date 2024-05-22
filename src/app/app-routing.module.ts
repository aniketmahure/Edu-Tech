import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { MasterclassComponent } from './pages/masterclass/masterclass.component';
import { StudyComponent } from './pages/study/study.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'courses',
    component:CoursesComponent
  },
  {
    path:'masterclass',
    component:MasterclassComponent
  },
  {
    path:'study',
    component: StudyComponent
  },
  {
    path:'class',
    component:ClassesComponent
  }
  ,
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
