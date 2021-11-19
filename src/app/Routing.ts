import{ Routes} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {MainComponent} from './main/main.component';
import{ActivateGuard} from './activate.guard';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
export const Approutes : Routes =[
    {path:'', component: HomeComponent},
    {path:'Home', component: HomeComponent},
    {path:'Admin', component: AdminComponent, 
    canActivate:[ActivateGuard]}
]