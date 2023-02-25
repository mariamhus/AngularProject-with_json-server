import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { StddetailsComponent } from './components/stddetails/stddetails.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path:'',component:MainPageComponent},
  {path:'std',component:HomeComponent},
  {path:'stddetails/:id',component:StddetailsComponent},
  {path:'add',component:AddComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'**',component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
