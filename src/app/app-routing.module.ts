import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApisComponent } from './apis/apis.component';



const routes: Routes = [
   { path: '', redirectTo: 'text', pathMatch: 'full' }, // default
  { path: 'text', component: HomeComponent },          // Text Formatter
  { path: 'apis', component: ApisComponent },          // APIs page
  { path: '**', redirectTo: 'text' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
