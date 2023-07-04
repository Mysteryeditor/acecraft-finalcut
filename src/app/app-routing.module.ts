import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SchoolComponent } from './school/school.component';
import { BrowseComponent } from './browse/browse.component';
import { CollegeComponent } from './college/college.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { NotesComponent } from './notes/notes.component';
import { AirenMaskComponent } from './airen-mask/airen-mask.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { SingleNoteComponent } from './notes/single-note/single-note.component';
import { AuthGuard } from 'src/shared/authent-guard.guard';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'college', component: CollegeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'enterprise', component: EnterpriseComponent },
  { path: 'blogs', component: NotesComponent },
  { path: 'am', component: AirenMaskComponent },
  { path: 'school', component: SchoolComponent,canActivate:[AuthGuard] },
  {
    path:'browse',
    component:BrowseComponent
  },
  {
    path:'product/:id',component:ProductComponent
  },
  {
    path:'cart',component:CartComponent
  }
  ,{
    path:'singlenote/:id',component:SingleNoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
