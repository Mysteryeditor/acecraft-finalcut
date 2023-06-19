import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CollegeComponent } from './college/college.component';
const routes: Routes = [
  { path:'', component :HomepageComponent },
  {path:'college' ,component:CollegeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
