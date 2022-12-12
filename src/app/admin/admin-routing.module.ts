import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { LoginComponent } from './login/login.component';
import { AgentComponent } from './agent/agent.component';

const routes: Routes = [
  {
    path: '', component: LayoutsComponent, children: [

      {path: '', redirectTo: 'home', pathMatch:'full'},

      {path: 'home', component: HomeComponent },
      {path: 'login', component: LoginComponent },
      {path: 'agent', component: AgentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
