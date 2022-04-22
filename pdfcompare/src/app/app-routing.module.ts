import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { SingleselectComponent } from './singleselect/singleselect.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'Single_select_Component', component: SingleselectComponent },
  { path: 'Multi_select_Component', component: MultiselectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
