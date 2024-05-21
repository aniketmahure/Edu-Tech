import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { MasterclassComponent } from './pages/masterclass/masterclass.component';
import { StudyComponent } from './pages/study/study.component';
import { ClassesComponent } from './pages/classes/classes.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
