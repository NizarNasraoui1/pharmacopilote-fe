import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './layout/app.layout.component';
import { NotfoundComponent } from './features/notfound/notfound.component';
import { AuthGardService as AuthGard } from './core/_services/auth-gard.service';

@NgModule({
    imports: [
        RouterModule.forRoot([
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
            },
            {
                path:'models',
                loadChildren: ()=>import('./features/models/models.module').then((m)=>m.ModelsModule)
            },
            {
                path:'medical-assessment',
                loadChildren: ()=>import('./features/medical-assessment/medical-assessment.module').then((m)=>m.MedicalAssessmentModule)
            },
            {   path:'quality-control',
                loadChildren: ()=>import('./features/quality-control/quality-control.module').then((m)=>m.QualityControlModule)

            },
            {
                path:'my-account',
                loadChildren: ()=>import('./features/my-account/my-account.module').then((m)=>m.MyAccountModule)
            },
            {
                path:'user-management',
                loadChildren: ()=>import('./features/user-management/user-management.module').then((m)=>m.UserManagementModule)
            }
        ],
        canActivate: [AuthGard],
    },
    {
        path: 'auth',
        loadChildren: () => import('./core/auth/auth.module').then((m) => m.AuthModule),
    },
    { path: 'pages/notfound', component: NotfoundComponent },
    { path: '**', redirectTo: 'pages/notfound' },
], {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    initialNavigation: 'enabledBlocking'
}),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
