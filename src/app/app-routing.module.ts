import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }