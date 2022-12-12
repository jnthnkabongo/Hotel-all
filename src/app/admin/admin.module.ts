import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { LoginComponent } from './login/login.component';
import { AgentComponent } from './agent/agent.component';


@NgModule({
  declarations: [
    HomeComponent,
    LayoutsComponent,
    LoginComponent,
    AgentComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
