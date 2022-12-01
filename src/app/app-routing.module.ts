import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComebackComponent } from './comeback/comeback.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'validate/:id', component: ComebackComponent },
  { path: 'home', component: HomeComponent },
  { path: '',  redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
